<script setup lang="ts">
import Logo from '@/components/header/logo.vue';
import Emblem from '@/components/header/emblem.vue';
import Shop from '@/components/header/shop.vue';
import User from '@/components/header/User.vue';
import Call from '@/components/header/PhoneCallBack.vue';
import Theme from '@/components/header/theme.vue';
import Menu from '@/components/header/menu.vue';
import Fabrics from '@/components/header/fabrics.vue';
</script>

<template>
  <div class="header">
    <div class="header-top">
      <div class="container">
        <Logo />
        <Emblem />
        <span class="text_header">Производитель турецкого трикотажного полотна</span>
        <div class="header-container">
          <Shop />
          <User />
          <Call />
          <Theme />
        </div>
      </div>
      <img src="../../assets/icons/burger-menu.svg" alt="Меню" class="burger-menu" />
    </div>
    <div class="menu_header">
      <Menu />
    </div>
    <div class="sale_header">
      <Fabrics />
    </div>
  </div>
</template>

<style setup lang="scss">
.header {
  font-family: var(--font-family);
  display: flex;
  flex-direction: column;
  color: var(--text-color);
  width: 100%;
  max-width: 100%;
  justify-content: center;
  overflow-x: hidden;

  &-top {
    display: flex;
    width: 100%;
    max-width: 100%;
    background-color: var(--header-top-color);
    justify-content: space-between;
    align-items: center;
    padding: 40px 40px;
    box-sizing: border-box;

    @include tablet {
      padding: 20px 20px;
      justify-content: space-between;
    }

    @include mobile {
      padding: 15px 15px;
    }
  }

  &-container {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-left: 50px;

    @include tablet {
      display: none;
    }
  }

  .container {
    display: flex;
    justify-content: center;
    gap: 25px;
    background-color: var(--header-top-color);
    align-items: center;
    max-width: 100%;
    overflow: hidden;
    flex: 1; 

    @include tablet {
      padding: 0;
      gap: 15px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      width: auto; 
      flex: 0 1 auto; 
    }

    @include mobile {
      gap: 10px;
    }

    .text_header {
      font-weight: 100;
      white-space: nowrap;

      @include tablet {
        display: none;
      }
    }
  }

  .menu_header {
    background-color: var(--header-medium-color);
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: 100%;
    overflow: hidden;

    @include tablet {
      display: none;
    }
  }

  .sale_header {
    display: flex;
    height: 50px;
    max-width: 100%;
    background-color: var(--header-top-color);
    padding: 0 70px;
    justify-content: center;
    gap: 10px;
    overflow: hidden;
    flex-wrap: nowrap;

    @include tablet {
      display: none;
    }
  }
}

.burger-menu {
  display: none;
  flex-shrink: 0;
  cursor: pointer;

  @include tablet {
    display: block;
    width: 30px;
    height: 30px;
    margin-left: 15px; 
  }

  @include mobile {
    width: 24px;
    height: 24px;
    margin-left: 10px;
  }
}
</style>