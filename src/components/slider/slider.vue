<template>
  <div 
    class="slider-card"
    @mouseenter="stopAutoplay"
    @mouseleave="startAutoplay"
  >
    <div class="slider-track" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
      <div 
        v-for="(slide, index) in slides" 
        :key="slide.id" 
        class="slide"
      >
        <div class="slide-content">
          <h2 class="slide-title" v-html="slide.title"></h2>          
          <RouterLink class="slide-button">
            <span>Подробнее</span>
            <span class="arrow">→</span>
          </RouterLink>
        </div>
        <div class="slide-image-container">
          <img :src="slide.image" :alt="'Slide ' + (index + 1)" class="slide-image" />
        </div>
      </div>
    </div>
    <div class="slider-controls">
      <div class="indicators">
        <button 
          v-for="(_, index) in slides" 
          :key="index"
          class="indicator-bar"
          :class="{ active: currentSlide === index }"
          @click="goToSlide(index)"
          :aria-label="`Перейти к слайду ${index + 1}`"
        ></button>
      </div>
      <div class="counter">
        <span class="current">{{ formatNumber(currentSlide + 1) }}</span>
        <span class="divider">/</span>
        <span class="total">{{ formatNumber(slides.length) }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const slides = ref([
  {
    id: 1,
    title: 'Здесь будет слайдер с различными акциями или <span class="accent">специальными предложениями</span>',
    link: '#',
    image: '/src/assets/images/women.png'
  },
  {
    id: 2,
    title: 'Здесь будет слайдер с различными акциями или <span class="accent">специальными предложениями</span>',
    link: '#',
    image: '/src/assets/images/women.png'
  },
  {
    id: 3,
    title: 'Здесь будет слайдер с различными акциями или <span class="accent">специальными предложениями</span>',
    link: '#',
    image: '/src/assets/images/women.png'
  },
  {
    id: 4,
    title: 'Здесь будет слайдер с различными акциями или <span class="accent">специальными предложениями</span>',
    link: '#',
    image: '/src/assets/images/women.png'
  },
  {
    id: 5,
    title: 'Здесь будет слайдер с различными акциями или <span class="accent">специальными предложениями</span>',
    link: '#',
    image: '/src/assets/images/women.png'
  }
])

const currentSlide = ref(0)
let autoplayInterval = null
const goToSlide = (index) => {
  currentSlide.value = index
}
const formatNumber = (num) => {
  return num < 10 ? `0${num}` : num
}
const startAutoplay = () => {
  stopAutoplay() 
  autoplayInterval = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % slides.value.length
  }, 5000)
}

const stopAutoplay = () => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval)
    autoplayInterval = null
  }
}




</script>

<style lang="scss" scoped>
.slider-card {
  --color-dark-bg: #181f29;
  --color-accent-gold: #d8bc97;
  --color-inactive-bar: #242c38;

  position: relative;
  width: 100%;
  max-width: 1200px;
  height: 480px;
  background-color: var(--color-dark-bg);
  border-radius: 20px;
  overflow: hidden;
  font-family: 'Inter', sans-serif;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
}
.slider-track {
  display: flex;
  width: 100%;
  height: 100%;
  transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1);
}
.slide {
  flex: 0 0 100%;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 60px 80px;
  box-sizing: border-box;
  position: relative;
}

.slide-content {
  max-width: 50%;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.slide-title {
  font-size: 38px;
  font-weight: 700;
  line-height: 1.3;
  color: #ffffff;
  margin: 0 0 40px 0;
}

:deep(.accent) {
  color: var(--color-accent-gold);
}

.slide-button {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-accent-gold);
  color: #000000;
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
  padding: 16px 32px;
  border-radius: 30px;
  border: 1px solid #000000;
  min-width: 200px;
  box-sizing: border-box;
}

.slide-button .arrow {
  font-size: 20px;
  margin-left: auto;
}

.slide-image-container {
  position: absolute;
  right: 40px;
  bottom: 0;
  height: 105%;
  width: 45%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  z-index: 1;
}

.slide-image {
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
  pointer-events: none;
}

.slider-controls {
  position: absolute;
  bottom: 40px;
  left: 80px;
  display: flex;
  align-items: center;
  gap: 30px;
  z-index: 3;
}

.indicators {
  display: flex;
  gap: 10px;
}

.indicator-bar {
  width: 35px;
  height: 3px;
  background-color: var(--color-inactive-bar);
  border: none;
  border-radius: 2px;
  cursor: pointer;
  padding: 0;
  transition: background-color 0.3s ease;
}

.indicator-bar.active {
  background-color: var(--color-accent-gold);
}

.counter {
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: var(--font-family);
  font-size: 16px;
  font-weight: 500;
  user-select: none;
}

.counter .current {
  color: #ffffff;
}

.counter .divider,
.counter .total {
  color: #4b5563;
}


  

</style>