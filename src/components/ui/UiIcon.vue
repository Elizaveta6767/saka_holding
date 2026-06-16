<template>
  <div 
    class="icon"
    :style="{
      width: size + 'px',
      height: size + 'px',
      color: color
    }"
  >
    <!-- Временно вставляем заглушку, чтобы увидеть, работает ли компонент -->
    ⭐
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  name: string
  size?: number
  color?: string
}>()
</script>

<style lang="scss" scoped>
.icon {
  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  font-size: 24px;
}
</style>