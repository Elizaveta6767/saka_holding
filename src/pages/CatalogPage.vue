<script setup lang="ts">
import Reviews from '../components/about/reviews.vue';
import ServiceSection from '../components/advantages/ServiceSection.vue';
import Infocompani from '../components/container.vue/infocompani.vue';
import Text from '../components/container.vue/text.vue';
import View from '../components/container.vue/view.vue';
import CertificatesBlock from '@/components/certificates/CertificatesBlock.vue';
import Recently from '@/components/recently-viewed/Recently.vue';
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
  <div>
    <CertificatesBlock/>
  </div>
  <Reviews/>
  <div>
    <Recently/>
  </div>
</template>

<style lang="scss">
.main{
  padding: 20px 200px; 
  line-height: 30px;
}
.info_compani{
  display: flex;
  gap: 100px;
}
.view{
  padding: 0 100px;
}

/* Адаптив для планшета */
@media (max-width: 1024px) {
  .main {
    padding: 20px 50px;
  }
  
  .info_compani {
    gap: 40px;
    flex-wrap: wrap;
  }
  
  .view {
    padding: 0 40px;
  }
}

/* Адаптив для телефона */
@media (max-width: 768px) {
  .main {
    padding: 15px 20px;
    line-height: 26px;
  }
  
  .info_compani {
    gap: 20px;
    flex-direction: column;
  }
  
  .view {
    padding: 0 15px;
  }
}

/* Адаптив для маленьких телефонов */
@media (max-width: 480px) {
  .main {
    padding: 10px 15px;
    line-height: 24px;
  }
  
  .info_compani {
    gap: 15px;
  }
  
  .view {
    padding: 0 10px;
  }
}
</style>