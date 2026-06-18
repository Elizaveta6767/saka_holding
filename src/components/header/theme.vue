<template>
  <div class="comp-lang">
    <span class="lang active">dark</span>
    <span class="divider">/</span>
    <span class="lang">light</span>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.comp-lang {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 16px;
  font-weight: 500;
color: var(--grey-color);
  .lang {
    cursor: pointer;
  }
  
}
</style>
