<template>
  <app-select
    :label="t('accounts.add_form.account_role.label')"
    :popupTitle="t('accounts.add_form.account_role.popup.title')"
    v-model="modelValue" v-model:showDropdown="showDropdown" :list="list" :columns="1" v-bind="dynamicAttrs" :has-search="false" />
</template>

<script setup>
import Account from '~/models/Account'
import { useFormAttributes } from '~/composables/useFormAttributes'

const attrs = useAttrs()
const { dynamicAttrs } = useFormAttributes(attrs)
const modelValue = defineModel()

const {t} = useI18n()

const list = Account.roleAssetsList()
const showDropdown = ref(null)
</script>
