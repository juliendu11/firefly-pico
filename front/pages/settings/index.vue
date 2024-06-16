<template>
  <div class="app-form">
    <app-top-toolbar />

    <van-cell-group inset style="overflow: auto">
      <app-field-link :label="t('settings_page.app_config.title')" :icon="TablerIconConstants.settings" @click="navigateTo(RouteConstants.ROUTE_SETTINGS_APP_CONFIG)" />

      <app-field-link :label="t('settings_page.ui_config.title')" :icon="TablerIconConstants.settingsUI" @click="navigateTo(RouteConstants.ROUTE_SETTINGS_USER_PREFERENCES_UI)" />

      <app-field-link :label="t('settings_page.dashboard_config.title')" :icon="TablerIconConstants.dashboard" @click="navigateTo(RouteConstants.ROUTE_SETTINGS_USER_PREFERENCES_DASHBOARD)" />

      <app-field-link :label="t('settings_page.date_config.title')" :icon="TablerIconConstants.settingsUserPreferencesDate" @click="navigateTo(RouteConstants.ROUTE_SETTINGS_USER_PREFERENCES_DATE)" />

      <app-field-link :label="t('settings_page.new_transaction_defaults.title')" :icon="TablerIconConstants.settingsNewTransactionDefaults" @click="navigateTo(RouteConstants.ROUTE_SETTINGS_NEW_TRANSACTION_DEFAULTS)" />

      <app-field-link :label="t('settings_page.transaction_config.title')" :icon="TablerIconConstants.settingsUserPreferences" @click="navigateTo(RouteConstants.ROUTE_SETTINGS_USER_PREFERENCES_TRANSACTIONS)" />

      <app-field-link :label="t('settings_page.about.title')" :icon="TablerIconConstants.settingsAbout" @click="navigateTo(RouteConstants.ROUTE_SETTINGS_ABOUT)" />
    </van-cell-group>

    <div class="text-muted subtitle flex-center mt-20 flex-column">
      <div>
        <a :href="REPO_URL">{{ t('settings_page.version', {version: appStore.currentAppVersion}) }}</a>
      </div>

      <div v-if="true" class="latest-version-badge">
        <a :href="REPO_URL">{{ t('settings_page.new_version', {version: appStore.latestAppVersion}) }} 🎉</a>
      </div>
    </div>
    <div></div>
  </div>
</template>

import { ref, onMounted } from 'vue'; import { useAppStore } from '~/stores/appStore' import

<script setup>
import RouteConstants from '~/constants/RouteConstants'
import { useToolbar } from '~/composables/useToolbar'
import { REPO_URL } from '~/constants/Constants'

import TablerIconConstants from '~/constants/TablerIconConstants'

const appStore = useAppStore()
const toolbar = useToolbar()
const {t} = useI18n()

toolbar.init({ title: 'Settings' })
</script>
