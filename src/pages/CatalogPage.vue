<script setup lang="ts">
import ServiceSection from '../components/advantages/ServiceSection.vue';
import Infocompani from '../components/container.vue/infocompani.vue';
import Text from '../components/container.vue/text.vue';
import View from '../components/container.vue/view.vue';

</script>

<template>
  <div class="main">
    <Text/>
  </div>
  <div class="info_compani">
    <Infocompani/>
  </div>
  <div class="view">
    <View/>
  </div>
  <div class="task">
    <ServiceSection/>
  </div>
</template>
<style lang="scss">
.main{
  padding: 0 200px; 
  line-height: 30px;
}
.info_compani{
  display: flex;
  gap: 100px;
}
.view{
  padding: 0 100px;
}
</style>