<template>
  <section class="reviews-section">
    <div class="reviews-container">
      
      <!-- Шапка слайдера -->
      <div class="reviews-header">
        <h2 class="reviews-title">
          Делаем все для того, чтобы вы остались довольны нашей тканью
        </h2>
        <div class="reviews-nav">
          <button class="nav-btn prev" @click="prev" aria-label="Назад">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <button class="nav-btn next" @click="next" aria-label="Вперед">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Окно просмотра слайдера -->
      <div class="reviews-viewport">
        <!-- Сдвиг рассчитывается автоматически в зависимости от активного слайда -->
        <div 
          class="reviews-track" 
          :style="{ transform: `translateX(calc(-${currentSlide} * (100% + 30px) / ${itemsToShow}))` }"
        >
          
          <!-- Карточка 1 -->
          <div class="review-card">
            <p class="review-text">
              Повседневная практика показывает, что современная методология разработки способствует повышению качества благоприятных перспектив. Наше дело не так однозначно, как может показаться: высокое качество позиционных исследований не даёт нам иного выбора, кроме определения глубокомысленных рассуждений. Являясь всего лишь частью общей картины, акционеры крупнейших компаний, превозмогая сложившуюся непростую экономическую ситуацию, превращены в посмешище, хотя само их существование приносит несомненную пользу обществу.
            </p>
            <h4 class="review-author">Наталья</h4>
          </div>

          <!-- Карточка 2 -->
          <div class="review-card">
            <p class="review-text">
              Повседневная практика показывает, что современная методология разработки способствует повышению качества благоприятных перспектив. Наше дело не так однозначно, как может показаться: высокое качество позиционных исследований не даёт нам иного выбора, кроме определения глубокомысленных рассуждений. Являясь всего лишь частью общей картины, акционеры крупнейших компаний, превозмогая сложившуюся непростую экономическую ситуацию.
            </p>
            <h4 class="review-author">Василий</h4>
          </div>

          <!-- Карточка 3 -->
          <div class="review-card">
            <p class="review-text">
              Повседневная практика показывает, что современная методология разработки способствует повышению качества благоприятных перспектив. Наше дело не так однозначно, как может показаться: высокое качество позиционных исследований не даёт нам иного выбора, кроме определения глубокомысленных рассуждений.
            </p>
            <h4 class="review-author">Геннадий</h4>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>
<script></script>

<style lang="scss" scoped>
.reviews-section {
  width: 100%;
  padding: 80px 0;
  background-color: #ffffff;
  overflow: hidden;
  box-sizing: border-box;
}

.reviews-container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 40px;
  box-sizing: border-box;
}

/* ШАПКА */
.reviews-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 40px;
  margin-bottom: 50px;
}

.reviews-title {
  font-family: var(--font-famaly), sans-serif;
  font-size: 36px;
  font-weight: 700;
  line-height: 1.3;
  color: #1a1a1a;
  max-width: 680px;
  margin: 0;
}

.reviews-nav {
  display: flex;
  gap: 15px;
  flex-shrink: 0;
}

.nav-btn {
  width: 56px;
  height: 56px;
  border-radius: 14px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s, transform 0.1s;

  &.prev {
    background-color: #f5f5f7;
    color: #1a1a1a;
    &:hover { background-color: #eaeaea; }
  }

  &.next {
    background-color: #dec5a1; /* Золотисто-бежевый */
    color: #1a1a1a;
    &:hover { background-color: #d1b68f; }
  }

  &:active {
    transform: scale(0.95);
  }
}

/* СЛАЙДЕР */
.reviews-viewport {
  overflow: hidden;
  width: 100%;
}

.reviews-track {
  display: flex;
  gap: 30px; /* Отступ между карточками */
  transition: transform 0.5s cubic-bezier(0.25, 1, 0.5, 1);
  width: 100%;
}

/* КАРТОЧКА ОТЗЫВА */
.review-card {
  background-color: #fcfcfd;
  border: 1px solid #f1f1f4;
  border-radius: 16px;
  padding: 40px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 420px;
  flex: 0 0 calc((100% - 60px) / 3); 

  &:hover {
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
  }
}

.review-text {
  font-family: var(--font-famaly), sans-serif;
  font-size: 15px;
  line-height: 1.6;
  color: #556272;
  margin: 0 0 30px 0;
}

.review-author {
  font-family: var(--font-famaly), sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0;
}
</style>