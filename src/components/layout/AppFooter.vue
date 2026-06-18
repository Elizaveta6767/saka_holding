
<script setup lang="ts">
import Logo from '@/components/footer/Logo.vue';
import Navigation from '@/components/footer/navigation.vue';
import Info from '@/components/footer/info.vue';
import News from '@/components/footer/news.vue';
import Online from '../footer/online.vue';
import Textile from '../footer/textile.vue';
</script>

<template>
  <footer class="app-footer">
    <div class="footer-container">
      <div class="footer-main-grid">
        <Logo />
        <Navigation />
        <Info />
        <News />
      </div>
      <hr class="footer-divider" />
      <div class="footer-bottom-bar">
        <Online />
        <Textile />
      </div>

    </div>
  </footer>
</template>

<style scoped lang="scss">
.app-footer {
  width: 100%;
  max-width: 100%;
  background-color: #1d2530;
  padding: 80px 0 40px 0;
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;
  overflow-x: hidden; 
}

.footer-container {
  max-width: 1440px;
  width: 100%; 
  margin: 0 auto;
  padding: 0 40px;
  box-sizing: border-box;
  overflow: hidden; 

  @include tablet {
    padding: 0 30px;
  }

  @include mobile {
    padding: 0 20px;
  }
}

.footer-main-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr 1fr 2.2fr;
  gap: 40px;
  align-items: start;
  margin-bottom: 60px;
  width: 100%; 
  overflow: hidden; 

  @include tablet {
    grid-template-columns: 1fr 1fr;
    gap: 50px 30px;
  }

  @include mobile {
    grid-template-columns: 1fr;
    gap: 40px;
    margin-bottom: 40px;
  }
}

.footer-divider {
  border: none;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.08);
  margin: 0 0 30px 0;
  width: 100%; 
}

.footer-bottom-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  width: 100%; 

  @include mobile {
    flex-direction: column;
    align-items: flex-start;
    gap: 25px;
  }
}

@include tablet {
  .app-footer {
    padding: 60px 0 30px 0;
  }

  .footer-main-grid {
    grid-template-columns: 1fr 1fr;
    gap: 50px 30px;
  }
}

@include mobile {
  .app-footer {
    padding: 40px 0 25px 0;
  }

  .footer-container {
    padding: 0 15px;
  }

  .footer-main-grid {
    grid-template-columns: 1fr;
    gap: 35px;
    margin-bottom: 30px;
  }

  .footer-bottom-bar {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
}
</style>