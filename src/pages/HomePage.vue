<script setup lang="ts">
    import Slider from '@/components/slider/slider.vue';
    import NewsGrid from '@/components/cards/NewsGrid.vue';
    import TypesFabrics from '@/components/fabrics/TypesFabrics.vue';
    import PromoBlock from '@/components/aboutcompany/PromoBlock.vue';
    import CertificatesBlock from '@/components/certificates/CertificatesBlock.vue';
    import PaletteInfoBlock from '@/components/paletteinfo/PaletteInfoBlock.vue';
    import PaletteBlock from '@/components/tshirt/PaletteBlock.vue';
    import PaletteTitle from '@/components/palettetitle/PaletteTitle.vue';
    import OrderForm from '@/components/orderform/OrderFormBlock.vue';
    import Recently from '@/components/recently-viewed/Recently.vue';
</script>

<template>
    <div class="slider">
        <Slider/>
        
    </div>
    <div class="cards">
    <NewsGrid/>
    </div>
    <TypesFabrics/>
    <PromoBlock/>
    <CertificatesBlock/>
    <PaletteInfoBlock/>
    <PaletteBlock/>
    <PaletteTitle/>
    <PaletteBlock/>
    <OrderForm/>
    <Recently/>

</template>

<style lang="scss">
    .slider{
        display: flex;
        padding-top: 100px;
        justify-content: center;
    }
</style>