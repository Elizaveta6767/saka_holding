<script setup lang="ts">
import Logo from '@/components/footer/Logo.vue';
import Navigation from '@/components/footer/navigation.vue';
import Info from '@/components/footer/info.vue';
import News from '@/components/footer/news.vue';
import Online from '../footer/online.vue';
import Textile from '../footer/textile.vue';
</script>

<template>
<div class="footer">
    <div class="container">
        <Logo/>
        <Navigation/>
        <Info/>
        <News/>
    </div>
    <div class="down_footer">
        <Online/>
        <Textile/>
    </div>
</div>
  
</template>

<style lang="scss">
.footer{
    background-color: var(--header-top-color);
    padding: 0 200px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto auto auto auto auto auto;
    grid-template-areas: 
        "logo navigator info email email"
        ". navigator info email email"
        ". navigator info . Number"
        ". navigator info . ."
        ". . . . ."
        "online online . span span";
    gap: 20px;
}

</style>