<template>
  <div class="promo-container">
    <div class="promo-image-wrapper">
      <img src="/src/assets/images/sakatekstil.png" alt="Saka Tekstil Building" class="promo-image"/>
    </div>
    <div class="promo-content">
      <h1 class="promo-title">
        Saka Tekstil – для тех, кто хочет быстро и комфортно получать текстильную продукцию 
        <span class="highlight">высокого качества по адекватной стоимости</span>
      </h1>
      <ul class="promo-list">
        <li class="promo-item">
          <span class="bullet-line"></span>
          <p class="promo-text">
            Предоставляем возможность закупки широкого ассортимента: футер, кулирка, 
            джакарт, флис, рибана и многое другое...
          </p>
        </li>
        <li class="promo-item">
          <span class="bullet-line"></span>
          <p class="promo-text">
            Наша компания является надежным поставщиком и производителем турецкого 
            трикотажного полотна по всему миру
          </p>
        </li>
      </ul>

      <button class="promo-btn">
        <span>Смотреть каталог</span>
        <span class="arrow-icon">→</span>
      </button>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss">

.promo-container {
  display: flex;
  background-color: #f8f9fa; 
  min-height: 500px;
  width: 100%;
  overflow: hidden;
  font-family: var(--font-famaly); 
}
.promo-image-wrapper {
  flex: 0 0 45%; 
  position: relative;
  overflow: hidden;
}

.promo-image {
  width: 100%;
    max-width: 1400px;
  height: 100%;
  object-fit: cover; 
  display: block;
  border-top-right-radius: 24px; 
}

.promo-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center; 
  padding: 0px 60px 40px 100px;
  color: #2c3e50;
}

.promo-title {
  font-size: 32px;
  line-height: 1.4;
  font-weight: 700;
  margin-bottom: 35px;
  max-width: 600px;
}

.highlight {
  color: #cca471; 
}

.promo-list {
  list-style: none;
  padding: 0;
  margin: 0 0 40px 0;
}

.promo-item {
  display: flex;
  align-items: flex-start; 
  gap: 15px;
  font-size: 28px;
  margin-bottom: 25px;
  max-width: 500px;
}

.bullet-line {
  display: block;
  width: 30px;
  height: 2px;
  background-color: var(--gold-color);
  margin-top: 10px; 
  flex-shrink: 0;
}

.promo-text {
  margin: 0;
  font-size: 18px;
  line-height: 1.5;
  color: #5a626a;
}

.promo-btn {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  background-color: var(--gold-color); 
  color: #2c3e50;
  border: none;
  padding: 14px 28px;
  border-radius: 30px;
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;

  width: fit-content;
}

.arrow-icon {
  width: 18px;
  height: 18px;
  transition: transform 0.3s ease;
}

@media (max-width: 992px) {
  .promo-container {
    flex-direction: column; 
  }

  .promo-image-wrapper {
    flex: 0 0 auto;
    width: 100%;
    height: 350px; 
  }

  .promo-image {
    border-top-right-radius: 0; 
  }

  .promo-content {
    padding: 30px 20px;
  }
}
</style>