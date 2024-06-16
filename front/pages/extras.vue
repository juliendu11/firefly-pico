<template>
  <div class="app-form">
    <app-top-toolbar />

    <van-cell-group inset style="overflow: auto">
      <app-field-link :label="t('extras_page.accounts.title')" :icon="TablerIconConstants.account" @click="onGoToAccountsList" />

      <app-field-link :label="t('extras_page.categories.title')" :icon="TablerIconConstants.category" @click="onGoToCategoriesList" />

      <app-field-link :label="t('extras_page.tags.title')" :icon="TablerIconConstants.tag" @click="onGoToTagsList" />

      <app-field-link :label="t('extras_page.transaction_templates.title')" :icon="TablerIconConstants.transactionTemplate" @click="onGoToTransactionTemplatesList" />

      <app-field-link  :label="t('extras_page.exchanges_rate.title')" :icon="TablerIconConstants.exchangeRates" @click="navigateTo(RouteConstants.ROUTE_EXCHANGE_RATES)" />

      <!--      <app-field-link-->
      <!--          label="Currencies"-->
      <!--          :icon="IconifyConstants.currency"-->
      <!--          @click="onGoToCurrenciesList"-->
      <!--      />-->
    </van-cell-group>
  </div>
</template>

import { ref, onMounted } from 'vue'; import { useAppStore } from '~/stores/appStore'

<script setup>
import { useAppStore } from '~/stores/appStore'
import RouteConstants from '~/constants/RouteConstants'
import { useToolbar } from '~/composables/useToolbar'
import TablerIconConstants from '~/constants/TablerIconConstants'

const {t} = useI18n()

const onNavigateToCalendar = async () => await navigateTo(RouteConstants.ROUTE_CALENDAR)
const onNavigateToTransactionTemplate = async () => await navigateTo(RouteConstants.ROUTE_TRANSACTION_TEMPLATE_LIST)
const onGoToAccountsList = async () => await navigateTo(RouteConstants.ROUTE_ACCOUNT_LIST)
const onGoToCategoriesList = async () => await navigateTo(RouteConstants.ROUTE_CATEGORY_LIST)
const onGoToTagsList = async () => await navigateTo(RouteConstants.ROUTE_TAG_LIST)
const onGoToCurrenciesList = async () => await navigateTo(RouteConstants.ROUTE_CURRENCY_LIST)
const onGoToTransactionTemplatesList = async () => await navigateTo(RouteConstants.ROUTE_TRANSACTION_TEMPLATE_LIST)

const toolbar = useToolbar()
toolbar.init({ title: 'Extra' })
</script>
