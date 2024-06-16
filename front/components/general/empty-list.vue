<template>
  <div class="empty-list">
    <!--    <img :src="EmptyIllustration" style="width: 300px"/>-->
    <empty-illustration style="width: 100%" />
    <div class="mt-20">{{t('messages.empty_list')}}</div>
  </div>
</template>

<script setup>
import EmptyIllustration from '~/assets/svg/empty.svg'
// import EmptyIllustration from '~/assets/svg/undraw_Dog_c7i6.png'
const {t} = useI18n()
</script>
