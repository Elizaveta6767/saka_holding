<template>
  <component
      :is="icon"
      class="icon"
      :style="{
      width: size + 'px',
      height: size + 'px',
      color: color
    }"
  />
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const props = defineProps<{
  name: string
  size?: number
  color?: string
}>()

const icon = defineAsyncComponent(
    () => import(`@/assets/icons/${props.name}.svg`)
)
</script>

<style lang="scss" scoped>
.icon {
  display: inline-flex;
  flex-shrink: 0;
}
</style>