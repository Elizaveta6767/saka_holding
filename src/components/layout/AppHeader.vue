<script setup lang="ts">
import Logo from '@/components/header/logo.vue';
import Emblem from '@/components/header/emblem.vue';
import Shop from '@/components/header/shop.vue';
import User from '@/components/header/user.vue';
import Call from '@/components/header/call.vue';
import Theme from '@/components/header/theme.vue';
import Menu from '@/components/header/menu.vue';
import Sale from '@/components/header/sale.vue';
import Fabrics from '@/components/header/fabrics.vue';
</script>

<template>
<div class="header">
  <div class="container">
    <Logo />
    <Emblem />
    <span class="text_header">Производитель турецкого<br>трикотажного полотна</span>
    <Shop />
    <User />
    <Call/>
    <Theme/>
      <span></span><span></span><span></span>
  </div>
  <div class="menu_header">
    <Menu/>
  </div>
  <div class="sale_header">
    <Sale/>
    <Fabrics/>
  </div>
</div>
  
</template>

<style lang="scss">
.header{
  display: flex;
  flex-direction: column;
  color: var(--text-color);
 width: 100%;
 justify-content: center;

  .container{
    display: flex;
    gap: 25px;
    background-color: var(--header-top-color);
    align-items: center;
    padding: 40px 200px;
     .text_header{
    font-weight: 100;
  }
  }
  .menu_header{
    background-color: var(--header-medium-color);
  }
  .sale_header{
    display: flex;
    justify-content: space-between;
    
    background-color: var(--header-top-color);
    padding: 0 200px;
  }
}

</style>