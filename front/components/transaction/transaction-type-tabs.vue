<template>
  <div class="transaction-type-container">
    <div @click="onClick(item)" :class="getItemClass(item)" v-for="item in list">
      <span>{{ t(`transactions.type.${item.name.toLowerCase()}`) }}</span>
      <span class="type-indicator"></span>
    </div>
  </div>
</template>

<script setup>
import Transaction from '~/models/Transaction'
import { isEqual } from 'lodash/lang'

const modelValue = defineModel()
const {t} = useI18n()
// const list = ref(['Expense', 'Income', 'Transfer'])
const list = Transaction.typesList

const onClick = (item) => {
  modelValue.value = item
}

const getItemClass = (item) => {
  return {
    'transaction-type-item': true,
    selected: isEqual(item, modelValue.value),
  }
}
</script>
