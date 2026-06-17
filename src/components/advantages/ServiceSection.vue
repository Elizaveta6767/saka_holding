<template>
   <div class="service-h1"><h1 >Наша главная задача - не просто предоставить качественную ткань, но и оказать каждому заказчику высокий уровень клиентского сервиса</h1></div>
  <section class="section-service">
    <div class="top-section-service">
      <div class="first_section">
        <div class="down-section-service">
          <ServiceCard 
          icon="logistic", 
          title="ЛОГИСТИКА"
          description="Весь ассортимент в наличии на складе в Москве. Вам не потребуется тратить свои ресурсы на доставку ткани из Турции." />
        </div>
        <div class="down-section-service">
          <ServiceCard 
          icon="factory", 
          title="ПРОИЗВОДСТВО"
          description="Регулярное наличие ткани позволяет не останавливать процесс вашего производства и минимизирует финансовые потери." />
        </div>
        <div class="down-section-service">
          <ServiceCard 
          icon="clothes", 
          title="ДОПОЛНИТЕЛЬНЫЕ МАТЕРИАЛЫ"
          description="Вместе с товаром мы предоставляем полиэтиленовую упаковку, бесплатную загрузку товара со склада и бесплатные образцы." />
        </div>
        <div class="down-section-service">
          <ServiceCard 
          icon="love", 
          title="ЛОЯЛЬНОСТЬ"
          description="Наш трикотаж закупают известные бренды. Это позволит вам создать собственный качественный бренд одежды." />
        </div>
      </div>
      <div class="first_section">
        <div class="down-section-service">
          <ServiceCard 
          icon="diamond", 
          title="УНИКАЛЬНОСТЬ"
          description="Мы предоставляем клиентам широкую палитру цветов, что позволяет создавать уникальные коллекции одежды." />
        </div>
        <div class="down-section-service">
          <ServiceCard 
          icon="medal", 
          title="КАЧЕСТВО"
          description="Наша ткань обрабатывается специальным силиконовым составом, что позволяет ей не терять свои свойства с течением времени." />
        </div>
      </div>
    </div>

  </section>
</template>

<script setup lang="ts">
import ServiceCard from './ServiceCard.vue';
</script>

<style lang="scss">
.service-h1{
  margin-left: 190px;
  max-width: 800px;
}
.section-service{
  background-image: url(@/assets/images/cloth.png);
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  background-position: right center;
  .top-section-service{
    display: flex;
    justify-content: space-between;
    gap: 15px;
    flex-direction: column;
  }
}

.first_section {
  display: flex;
  flex-direction: row;
  gap: 18px;
}

</style>