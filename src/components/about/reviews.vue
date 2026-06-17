<template>
  <section class="reviews-section">
    <div class="reviews-container">
      <div class="reviews-header">
        <h2 class="reviews-title">Делаем все для того, чтобы вы остались довольны нашей тканью</h2>
        <div class="reviews-nav">
          <button class="nav-btn prev" @click="prev" :disabled="currentSlide === 0" aria-label="Назад">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
          <button class="nav-btn next" @click="next" :disabled="currentSlide === 2" aria-label="Вперед">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
        </div>
      </div>

      <div class="reviews-grid">
        <div v-for="(review, i) in reviews" :key="i" class="review-card">
          <p class="review-text">{{ review.text }}</p>
          <h4 class="review-author">{{ review.author }}</h4>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    currentSlide: 0,
    reviews: [
      { text: 'Повседневная практика показывает, что современная методология разработки способствует повышению качества благоприятных перспектив. Наше дело не так однозначно, как может показаться: высокое качество позиционных исследований не даёт нам иного выбора, кроме определения глубокомысленных рассуждений. Являясь всего лишь частью общей картины, акционеры крупнейших компаний, превозмогая сложившуюся непростую экономическую ситуацию, превращены в посмешище, хотя само их существование приносит несомненную пользу обществу.', author: 'Наталья' },
      { text: 'Повседневная практика показывает, что современная методология разработки способствует повышению качества благоприятных перспектив. Наше дело не так однозначно, как может показаться: высокое качество позиционных исследований не даёт нам иного выбора, кроме определения глубокомысленных рассуждений. Являясь всего лишь частью общей картины, акционеры крупнейших компаний, превозмогая сложившуюся непростую экономическую ситуацию.', author: 'Василий' },
      { text: 'Повседневная практика показывает, что современная методология разработки способствует повышению качества благоприятных перспектив. Наше дело не так однозначно, как может показаться: высокое качество позиционных исследований не даёт нам иного выбора, кроме определения глубокомысленных рассуждений.', author: 'Геннадий' }
    ]
  }),
  methods: {
    prev() { this.currentSlide > 0 && this.currentSlide-- },
    next() { this.currentSlide < 2 && this.currentSlide++ }
  }
}
</script>

<style lang="scss" scoped>
.reviews-section {
  padding: 80px 150px;
  background: #fff;
}
.reviews-container { max-width: 1440px; margin: 0 auto; padding: 0 40px; }
.reviews-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 40px;
  margin-bottom: 50px;
}
.reviews-title {
  font-size: 36px;
  font-weight: 700;
  line-height: 1.3;
  color: #1a1a1a;
  max-width: 680px;
  margin: 0;
}
.reviews-nav { display: flex; gap: 15px; flex-shrink: 0; }
.nav-btn {
  width: 56px;
  height: 56px;
  border-radius: 14px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: .2s;
  
}
.prev { background: #f5f5f7; &:hover:not(:disabled) { background: #eaeaea; } }
.next { background: #dec5a1; &:hover:not(:disabled) { background: #d1b68f; } }

.reviews-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.review-card {
  background: #fcfcfd;
  border: 1px solid #f1f1f4;
  border-radius: 16px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 420px;
  &:hover { box-shadow: 0 10px 30px rgba(0,0,0,.04); }
}
.review-text {
  font-size: 15px;
  line-height: 1.6;
  color: #556272;
  margin: 0 0 30px;
}
.review-author {
  font-size: 18px;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0;
}

@media (max-width: 1200px) {
  .reviews-section { padding: 60px 50px; }
  .reviews-title { font-size: 28px; }
}
@media (max-width: 992px) {
  .reviews-section { padding: 50px 30px; }
  .reviews-container { padding: 0 20px; }
  .reviews-grid { grid-template-columns: repeat(2, 1fr); }
  .review-card { padding: 30px; min-height: 350px; }
}
@media (max-width: 768px) {
  .reviews-header { flex-direction: column; align-items: flex-start; gap: 20px; }
  .reviews-title { font-size: 24px; max-width: 100%; }
  .reviews-nav { align-self: flex-end; }
  .nav-btn { width: 44px; height: 44px; }
  .reviews-grid { grid-template-columns: 1fr; }
}
@media (max-width: 576px) {
  .reviews-section { padding: 40px 15px; }
  .reviews-container { padding: 0 10px; }
  .review-card { padding: 20px; min-height: 300px; }
  .review-text { font-size: 14px; }
}
</style>