<template>
  <app-select
    :label="getLabel"
    class=""
    :popupTitle="t('transactions_page.filters_dialog.form.category_type_select.popup.title')"
    v-model="modelValue"
    v-model:showDropdown="showDropdown"
    v-model:search="search"
    :list="filteredList"
    :columns="3"
    :getDisplayValue="getDisplayValue"
    v-bind="dynamicAttrs"
  >
    <template #top-right>
      <van-button size="small" @click="onRefresh" class="">
        <app-icon :icon="TablerIconConstants.refresh" :stroke="1.7" size="14" />
      </van-button>
    </template>

    <template #item="{ item }">
      <app-select-option :text="Category.getDisplayName(item)" :icon="Category.getIcon(item) ?? TablerIconConstants.category" />
    </template>

    <template #inputItemContent="{ item }">
      <div class="flex-center gap-1">
        <app-icon :icon="Category.getIcon(item) ?? TablerIconConstants.category" :size="18" />
        <span class="font-weight-400 text-size-12">{{ getDisplayValue(item) }}</span>
      </div>
    </template>
  </app-select>
</template>

<script setup>
import { useDataStore } from '~/stores/dataStore'
import { useFormAttributes } from '~/composables/useFormAttributes'
import { IconRefresh } from '@tabler/icons-vue'
import Category from '~/models/Category'

import TablerIconConstants from '~/constants/TablerIconConstants'
import Tag from '~/models/Tag.js'

const dataStore = useDataStore()
const attrs = useAttrs()
const { dynamicAttrs } = useFormAttributes(attrs)

const {t} = useI18n()

const props = defineProps({
  label: {
    type: String,
    default: '',
  },
})

const getLabel = computed(() => {
  if(!props.label){
    return t('transactions_page.filters_dialog.form.category_type_select.label')
  }

  return props.label
})

const modelValue = defineModel()
const showDropdown = ref(false)
const search = ref('')

let list = ref([])

const filteredList = computed(() => {
  if (search.value.length === 0) {
    return list.value
  }
  return list.value.filter((item) => {
    return Category.getDisplayName(item).toUpperCase().indexOf(search.value.toUpperCase()) !== -1
  })
})

const categoryList = computed(() => {
  if (search.value.length === 0) {
    return dataStore.categoryList
  }
  return dataStore.categoryList.filter((item) => {
    return Category.getDisplayName(item).toUpperCase().indexOf(search.value.toUpperCase()) !== -1
  })
})

// ------ Methods ------

onMounted(async () => {
  list.value = dataStore.categoryList
})

const onSelectCell = (value) => {
  modelValue.value = value
  showDropdown.value = false
}

const getDisplayValue = (value) => {
  return Category.getDisplayName(value)
}

const isLoading = ref(false)
UIUtils.showLoadingWhen(isLoading)
const onRefresh = async () => {
  isLoading.value = true
  await dataStore.fetchCategories()
  isLoading.value = false
}
</script>

<style></style>
