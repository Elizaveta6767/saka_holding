<template>
    <nav class="mobile">
        <div class="nav-container">
            <div class="nav-list">
                <router-link to="/" class="nav-link" active-class="active" exact>Главная</router-link>
                <div class="nav-catalog">
                    <router-link to="/about" class="nav-link" active-class="active" exact>Каталог</router-link>
                    <img src="../../assets/icons/arrow.svg" alt="">
                </div>
                <router-link to="/catalog" class="nav-link" active-class="active" exact>О компании</router-link>
                <router-link to="/" class="nav-link" active-class="active" exact>Новости</router-link>
                <router-link to="/" class="nav-link" active-class="active" exact>Доставка и оплата</router-link>
                <router-link to="/" class="nav-link" active-class="active" exact>Контакты</router-link>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.mobile {
    background-color: var(--medium-header-color);
    display: flex;
    justify-content: space-between;

    .nav-container {
      display: flex;
        justify-content: space-between;
        max-width: 1440px;
        margin: 0 auto;
        padding: 0 40px;
        gap: 50px;
    }
    .nav-catalog{
        display: flex;
        align-items: center;
        gap: 6px;
        color: #a6b1bd;
    }
    .nav-list {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0;
        padding: 18px 0;
        gap: 110px;
    }

    .nav-link {
        color: #a6b1bd;
        text-decoration: none;
        font-size: 14px;
        font-weight: 500;
        display: flex;
        align-items: center;
        gap: 6px;

    }
}
</style>