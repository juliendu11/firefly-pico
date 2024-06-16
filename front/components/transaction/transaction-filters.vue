<template>
  <van-popup v-model:show="showDropdown" round position="bottom" :style="style">
    <div class="h-100 display-flex flex-column qqq">
      <div class="flex-center-vertical m-10 mb-0">
        <div class="flex-1 text-center font-weight-600 text-size-18">
          {{ t('transactions_page.filters_dialog.title') }}
        </div>
      </div>

      <div ref="popupContentRef" class="flex-1 flex-column overflow-auto color" style="padding-bottom: 100px">
        <van-form @submit="onApplyFilters">
          <app-field
              class="flex-1"
              v-model="description"
              :label="t('transactions_page.filters_dialog.form.description')"
              :placeholder="t('transactions_page.filters_dialog.form.description')"
          />

          <transaction-type-select v-model="transactionType" />

          <div class="display-flex van-cell-fake ps-3 align-items-baseline">
            <div class="display-flex flex-column gap-3 align-items-center">
              <div class="text-size-14">{{ t('label.without') }}</div>
              <app-checkbox v-model="withoutCategory" shape="square" />
            </div>

            <category-select v-model="category" :disabled="!!withoutCategory" class="flex-1" />
          </div>

          <div class="display-flex van-cell-fake ps-3 align-items-baseline">
            <div class="display-flex flex-column gap-3 align-items-center">
              <div class="text-size-14">{{ t('label.without') }}</div>
              <app-checkbox v-model="withoutTag" shape="square" />
            </div>

            <tag-select v-model="tag" :disabled="!!withoutTag" class="flex-1" :is-multi-select="false" :auto-select-parents="false" />
          </div>

          <account-select v-model="account" />

          <div class="flex-center-vertical">
            <app-date class="flex-1" v-model="dateStart" :label="t('transactions_page.filters_dialog.form.date.after.label')" />

            <app-date class="flex-1" v-model="dateEnd" :label="t('transactions_page.filters_dialog.form.date.before.label')" />
          </div>

          <div class="px-3 flex-center-vertical gap-1">
            <van-button size="small" @click="onSubMonth">
              {{t('transactions_page.filters_dialog.form.date.remove_month')}}
            </van-button>
            <van-button size="small" @click="onCurrentMonth">
              {{t('transactions_page.filters_dialog.form.date.current_month')}}
            </van-button>
            <van-button size="small" @click="onAddMonth">
              {{t('transactions_page.filters_dialog.form.date.add_month')}}
            </van-button>
          </div>

          <div class="display-flex">
            <app-field
                class="flex-1"
                v-model="amountStart"
                :label="t('transactions_page.filters_dialog.form.amount_min.label')"
                :placeholder="t('transactions_page.filters_dialog.form.amount_min.label')"
            />
            <app-field
                class="flex-1"
                v-model="amountEnd"
                :label="t('transactions_page.filters_dialog.form.amount_max.label')"
                :placeholder="t('transactions_page.filters_dialog.form.amount_max.label')"
            />
          </div>

          <app-button-form-save :label="t('label.apply_filters')" bottom="20">
            <template #left>
              <van-button v-if="isFiltered" @click="onClearFilters" round> {{ t('label.clear') }} </van-button>
            </template>
          </app-button-form-save>
        </van-form>
      </div>
    </div>
  </van-popup>
</template>

<script setup>
import { useSwipeToDismiss } from '~/composables/useSwipeToDismiss'
import { generateChildren } from '~/utils/VueUtils'
import TagSelect from '~/components/select/tag-select.vue'
import { cloneDeep } from 'lodash'
import { addMonths, endOfMonth, startOfMonth } from 'date-fns'

const modelValue = defineModel({})
const {t} = useI18n()

const localModelValue = ref({})
const { description, dateStart, dateEnd, amountStart, amountEnd, category, withoutCategory, tag, withoutTag, account, transactionType } = generateChildren(localModelValue, [
  'description',
  'dateStart',
  'dateEnd',
  'amountStart',
  'amountEnd',
  'category',
  'withoutCategory',
  'withoutTag',
  'tag',
  'account',
  'transactionType',
])
const showDropdown = ref(false)

const style = computed(() => {
  return {
    height: '95%',
    // 'height': 'calc(100vh - 3rem)',
    // 'height': '100%',
    'padding-top': '4px',
    'border-radius': '0px',
  }
})

watch(modelValue, (newValue) => {
  localModelValue.value = cloneDeep(newValue)
})

const show = () => {
  showDropdown.value = true
}

const onDismiss = () => {
  showDropdown.value = false
}

const onApplyFilters = () => {
  modelValue.value = localModelValue.value
  showDropdown.value = false
}

const isFiltered = computed(() => {
  return Object.values(localModelValue.value).some((item) => !!item)
})

const onClearFilters = () => {
  localModelValue.value = {}
}

const onSubMonth = () => {
  dateStart.value = addMonths(dateStart.value ?? startOfMonth(new Date()), -1)
  dateEnd.value = endOfMonth(addMonths(dateEnd.value ?? endOfMonth(new Date()), -1))
}

const onCurrentMonth = () => {
  dateStart.value = startOfMonth(new Date())
  dateEnd.value = endOfMonth(new Date())
}

const onAddMonth = () => {
  dateStart.value = addMonths(dateStart.value ?? startOfMonth(new Date()), 1)
  dateEnd.value = endOfMonth(addMonths(dateEnd.value ?? endOfMonth(new Date()), 1))
}

const popupContentRef = ref(null)
useSwipeToDismiss({
  onSwipe: onDismiss,
  swipeRef: popupContentRef,
  showDropdown: showDropdown,
})

defineExpose({ show })
</script>
