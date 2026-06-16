<template>
  <section class="news-section">
    <div class="grid">
      <NewsCard
        v-for="news in newsList"
        :image="news.image"
        :title="news.title"
        :description="news.description"
        :date="news.date"
        :link="news.link"
      />
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import NewsCard from './NewsCard.vue' 

const newsList = ref([
  { id: 1, title: 'Пример текста для заголовка новости', 
  description: 'Здесь будет находиться небольшое триггерное описание или краткий дискриптор новости', 
  date: '31.03.2022', 
  image: '/src/assets/images/bgcard1.png' 
},
  { id: 2, title: 'Пример текста для заголовка новости', 
  description: 'Здесь будет находиться небольшое триггерное описание или краткий дискриптор новости', 
  date: '31.03.2022', 
  image: '/src/assets/images/bgcard2.png' 
},
  { id: 3, title: 'Пример текста для заголовка новости', 
  description: 'Здесь будет находиться небольшое триггерное описание или краткий дискриптор новости', 
  date: '31.03.2022', 
  image: '/src/assets/images/bgcard3.png' 
},
  { id: 4, title: 'Пример текста для заголовка новости', 
  description: 'Здесь будет находиться небольшое триггерное описание или краткий дискриптор новости', 
  date: '31.03.2022', 
  image: '/src/assets/images/bgcard4.png' 
},
  { id: 5, title: 'Пример текста для заголовка новости', 
  description: 'Здесь будет находиться небольшое триггерное описание или краткий дискриптор новости', 
  date: '31.03.2022', 
  image: '/src/assets/images/bgcard5.png' 
},
  { id: 6, title: 'Пример текста для заголовка новости', 
  description: 'Здесь будет находиться небольшое триггерное описание или краткий дискриптор новости', 
  date: '31.03.2022', 
  image: '/src/assets/images/bgcard6.png' 
}
])
</script>

<style scoped>
.news-section {
  padding: 60px 20px;
  min-height: 100vh;
  display: flex;
  justify-content: center;
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1200px;
  width: 100%;
}
</style>