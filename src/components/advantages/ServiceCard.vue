<template>
  <div class="card-service">
    <UiIcon :name="icon" />
    <h2 class="title-service">{{ title }}</h2>
    <p>{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
import UiIcon from '../ui/UiIcon.vue';

defineProps<{
  icon: string
  title: string
  description: string
}>()
</script>

<style lang="scss" scoped>
.card-service {
display: flex;
flex-direction: column;
align-items: center;
max-width: 260px;
max-height: 337px;
background-color: var(--grey-color);
border-radius: 16px;
text-align: center;
padding: 10px 6px;
    >p{
        line-height: 30px;
        font-size: 16px;
    }
    .title-service{
        font-size: 16px;
    }

}
</style>


