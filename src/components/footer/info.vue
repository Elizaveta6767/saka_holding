<script>
</script>

<template>
  <div class="footer-info">
    <h4 class="title">Информация</h4>
    <ul class="list">
      <li><a href="#">Помощь</a></li>
      <li><a href="#">Блог</a></li>
      <li><a href="#">Вопрос-ответ</a></li>
      <li><a href="#">Политика конфиденциальности</a></li>
      <li><a href="#">Карта сайта</a></li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.footer-info {
  .title {
    font-size: 16px;
    font-weight: 600;
    color: #ffffff;
    margin: 0 0 20px 0;
  }
  .list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 12px;

    a {
      font-size: 14px;
      color: #a6b1bd;
      text-decoration: none;
      transition: color 0.2s ease;
      &:hover {
        color: #ffffff;
      }
    }
  }
}
</style>