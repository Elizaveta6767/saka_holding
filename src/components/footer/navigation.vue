<script>
</script>
<template>
  <div class="footer-nav">
    <h4 class="title">Навигация</h4>
    <ul class="list">
      <li><a href="#">Каталог</a></li>
      <li><a href="#">О компании</a></li>
      <li><a href="#">Новости</a></li>
      <li><a href="#">Доставка и оплата</a></li>
      <li><a href="#">Контакты</a></li>
      <li><a href="#">Корзина</a></li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.footer-nav {
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