<template>
  <app-select
    :label="t('transactions_page.filters_dialog.form.transaction_type_select.label')"
    :popupTitle="t('transactions_page.filters_dialog.form.transaction_type_select.popup.title')"
    v-model="modelValue"
    v-model:showDropdown="showDropdown"
    :list="list"
    :columns="1"
    v-bind="dynamicAttrs"
    :has-search="false"
  />
</template>

<script setup>
import Account from '~/models/Account'
import { useFormAttributes } from '~/composables/useFormAttributes'
import Transaction from '~/models/Transaction.js'

const attrs = useAttrs()
const { dynamicAttrs } = useFormAttributes(attrs)
const modelValue = defineModel()
const list = Transaction.typesList

const {t} = useI18n()

const showDropdown = ref(null)
</script>
