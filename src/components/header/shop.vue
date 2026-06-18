<template>
    <div class="comp-cart" :class="{ 'm-mobile': Mobile }">
        <div class="cart-circle">
            <img src="../../assets/icons/shop.svg" alt="">
            <span class="cart-badge">3</span>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    Mobile?: boolean 
}>();
</script>

<style scoped lang="scss">
.comp-cart {
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 15px;

    .cart-circle {
        width: 42px;
        height: 42px;
        background: #334251;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        color: #a6b1bd;
    }
    .cart-badge {
        position: absolute;
        top: -3px;
        right: -3px;
        background-color: var(--gold-color);
        font-size: 10px;
        color: var(--white-color);
        border-radius: 50%;
        width: 17px;
        height: 17px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .cart-label {
        font-size: 16px;
        color: #a6b1bd;
    }
}
</style>