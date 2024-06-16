<template>
  <app-select
    :label="t('accounts.add_form.account_type.label')"
    :popupTitle="t('accounts.add_form.account_type.popup.title')"
    v-model="modelValue" v-model:showDropdown="showDropdown" :list="list" :columns="1" v-bind="dynamicAttrs" :has-search="false" />
</template>

<script setup>
import Account from '~/models/Account'
import { useFormAttributes } from '~/composables/useFormAttributes'

const attrs = useAttrs()
const { dynamicAttrs } = useFormAttributes(attrs)
const modelValue = defineModel()
const list = Account.typesList()

const showDropdown = ref(null)
const {t} = useI18n()
</script>
