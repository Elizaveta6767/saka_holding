<template>
  <div class="service-card">
    <UiIcon name='logistic'/>
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
  </div>
</template>

<script setup>
import UiIcon from '../../components/ui/UiIcon.vue'

defineProps({
  title: String,
  description: String
})
</script>

<style scoped>
.service-card {
  background: white;
  padding: 30px;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
  transition: transform 0.3s;
}
.icon { font-size: 40px; margin-bottom: 20px; }
h3 { font-size: 16px; margin-bottom: 15px; text-transform: uppercase; }
p { color: #666; font-size: 14px; line-height: 1.5; }
</style>