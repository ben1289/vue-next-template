<template>
  <n-config-provider>
    <n-global-style />
    <n-loading-bar-provider>
      <n-dialog-provider>
        <n-notification-provider>
          <n-message-provider>
            <NaiveProviderContent />
            <slot />
          </n-message-provider>
        </n-notification-provider>
      </n-dialog-provider>
    </n-loading-bar-provider>
  </n-config-provider>
</template>

<script setup lang="ts" name="NaiveProvider">
import NaiveProviderContent from './components/NaiveProviderContent.vue';
</script>

<style scoped></style>
