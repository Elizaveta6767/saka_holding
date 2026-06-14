<template>
    <div class="menu">
        <RouterLink class="link" to="/" >Главная</RouterLink> 
        <RouterLink class="link_gap" to="/catalog"  >Каталог<img src="../../assets/icons/arrow.svg" alt="arrow"></RouterLink>
        <RouterLink class="link" to="/about" >О компании</RouterLink>
        <RouterLink class="link" to="/" >Новости</RouterLink>
        <RouterLink class="link" to="/" >Доставка и оплата</RouterLink>
        <RouterLink class="link" to="/" >Контакты</RouterLink>
    </div>
</template>

<script>
</script>

<style lang="scss">
.menu{
    display: flex;
    justify-content: space-between;
    padding: 20px 200px;
    color: var(--text-color);
    .link_gap{
        display: flex;
        align-items: center;
        gap: 10px;
        color: var(--text-color);
        text-decoration: none;
        cursor: pointer;
    }
    .link{
        color: var(--text-color);
        text-decoration: none;
        cursor: pointer;
    }
}
</style>