<template>
  <van-button size="small" class="add-button">
    <div class="flex-center" style="gap: 3px">
      <span class="">{{ t('label.new') }}</span>
    </div>
  </van-button>
</template>

<script setup>
const {t} = useI18n()
</script>
