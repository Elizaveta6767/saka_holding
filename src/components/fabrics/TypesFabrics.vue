<template>
  <section class="fabrics-section">
    <div class="container">
      <h2 class="section-title">
        Выбирайте из множества<br/>разновидностей тканей
      </h2>
      <div class="fabrics-grid">
        <div v-for="fabric in fabrics" :key="fabric.id" class="fabric-card":class="fabric.gridClass">
          <div class="image-wrapper">
            <img :src="fabric.image" :alt="fabric.name" class="fabric-image" />
          </div>
          <div class="fabric-badge">
            {{ fabric.name }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const fabrics = ref([
  {
    id: 1,
    name: 'Футер 3-х Нитка',
    gridClass: 'span-5',
    image: '/src/assets/images/nitka.png'
  },
  {
    id: 2,
    name: 'Френч Терри',
    gridClass: 'span-3',
    image: '/src/assets/images/french.png'
  },
  {
    id: 3,
    name: 'Вискоза',
    gridClass: 'span-4',
    image: '/src/assets/images/viskoza.png'
  },
  {
    id: 4,
    name: 'Пике',
    gridClass: 'span-3',
    image: '/src/assets/images/pike.png'
  },
  {
    id: 5,
    name: 'Кулирная гладь',
    gridClass: 'span-4',
    image: '/src/assets/images/glad.png'
  },
  {
    id: 6,
    name: 'Бифлекс',
    gridClass: 'span-5',
    image: '/src/assets/images/biflex.png'
  }
])
</script>

<style lang="scss">

.fabrics-section {
  background-color: var(--header-top-color);
  padding: 80px 20px;
  font-family: var(--font-famaly);
  display: flex;
  justify-content: center;
}

.container {
  max-width: 1200px;
  width: 100%;
}

.section-title {
  color: #ffffff;
  font-size: 32px;
  font-weight: 600;
  line-height: 1.3;
  margin: 0 0 40px 0;

}

.fabrics-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 20px;
}

.span-5 { grid-column: span 5; }
.span-4 { grid-column: span 4; }
.span-3 { grid-column: span 3; }

.fabric-card {
  position: relative;
  height: 240px;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
}

.image-wrapper {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.fabric-image {
  width: 100%;
  height: 100%;
}

.fabric-badge {
  position: absolute;
  bottom: 20px;
  left: 20px;
  background-color: #dfc29f;
  color: #1a222d; 
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
}

@media (max-width: 900px) {
  .span-5, .span-4, .span-3 {
    grid-column: span 6;
  }
  .fabric-card {
    height: 200px;
  }
}

@media (max-width: 550px) {
  .span-5, .span-4, .span-3 {
    grid-column: span 12;
  }
  .section-title {
    font-size: 24px;
    margin-bottom: 30px;
  }
  .fabric-card {
    height: 180px;
  }
}
</style>