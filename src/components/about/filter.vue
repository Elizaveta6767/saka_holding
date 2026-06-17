<script setup lang="ts">
import { ref } from 'vue'
const price = ref(50000)
</script>

<template>
    <div class="money">
        <div class="min">0₽</div>
        <input type="range" v-model="price" min="0" max="100000">
        <div>{{ price }}₽</div>
    </div>
</template>

<style scoped>
.money {
    display: flex;
    align-items: center;
    gap: 10px;
    color: var(--header-top-color);
    background-color: var(--grey-color);
    width: 220px;
    height: 50px;
    padding: 20px;
    border-radius: 16px;
    margin-top: 10px;
}

input {
    width: 223px;
    height: 3px;
    -webkit-appearance: none;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 3px;
}
input::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: var(--dark-gold); 
    cursor: pointer;
}

</style>