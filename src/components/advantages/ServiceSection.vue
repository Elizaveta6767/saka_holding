<template>
  <section class="service-section">
    <div class="container">
      <div class="grid-container">
        <ServiceCard 
          v-for="(item, index) in services" 
          :key="index"
          :img="item.img"
          :title="item.title"
          :description="item.description"
        />
      </div>    
    </div>
  </section>
</template>

<script setup>
import ServiceCard from './ServiceCard.vue'

const services = [
  { title: 'Логистика', description: 'Весь ассортимент в наличии на складе в Москве. Вам не потребуется тратить свои ресурсы на доставку ткани из Турции.' },
  { img: '🏭', title: 'Производство', description: 'Регулярное наличие ткани позволяет не останавливать процесс вашего производства и минимизирует финансовые потери.' },
  { img: '👕', title: 'Доп. материалы', description: 'Вместе с товаром мы предоставляем полиэтиленовую упаковку, бесплатную загрузку товара со склада и бесплатные образцы.' },
  { img: '❤️', title: 'Лояльность', description: 'Наш трикотаж закупают известные бренды. Это позволит вам создать собственный качественный бренд одежды.' },
  { img: '💎', title: 'Уникальность', description: 'Мы предоставляем клиентам широкую палитру цветов, что позволяет создавать уникальные коллекции одежды.' },
  { img: '🏅', title: 'Качество', description: 'Наша ткань обрабатывается специальным силиконовым составом, что позволяет ей не терять свои свойства с течением времени.' }
]
</script>


<style scoped lang="scss">
@use '../../assets/styles/mixins.scss';

.service-section {
  background-repeat: no-repeat;
  background-image: url(../../assets/images/cloth.png);
  background-position: right center; /* <-- КЛЮЧЕВОЙ МОМЕНТ: изображение справа */
  background-size: auto 100%; /* <-- Опционально: растянуть по высоте */
  display: flex;
  justify-content: space-between;
  min-height: 500px; /* Добавьте, если контента мало, чтобы фон был виден */

  @include mobile {
    background-position: right bottom;
    background-size: 60% auto;
    }
}
.container {
  padding: 50px 20px;
  max-width: 1000px;
  margin: auto;
  width: 100%;

  @include mobile {
    padding: 30px 8px;
    max-width: 600px;
    }
  
}

h2 {
  text-align: center;
  margin-bottom: 40px;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @include tablet {
    grid-template-columns: repeat(2, 1fr);
    }

    @include mobile {
        grid-template-columns: 1fr;
    }
}


</style>