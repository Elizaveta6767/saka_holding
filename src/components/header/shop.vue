<template>
  <!-- Клик по кнопке открывает модальное окно -->
  <div class="comp-cart" :class="{ 'm-mobile': Mobile }" @click="isModalOpen = true">
    <div class="cart-circle">
      <img src="../../assets/icons/shop.svg" alt="Cart">
      <span class="cart-badge">3</span>
    </div>
  </div>

  <!-- Модальное окно -->
  <ModalCart :is-open="isModalOpen" @close="isModalOpen = false" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ModalCart from './ModalCart.vue'

defineProps<{
  Mobile?: boolean 
}>()

const isModalOpen = ref<boolean>(false)
</script>

<style scoped lang="scss">
.comp-cart {
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 15px;
  user-select: none;

  .cart-circle {
    width: 42px;
    height: 42px;
    background: #334251;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .cart-badge {
    position: absolute;
    top: -3px;
    right: -3px;
    background-color: var(--gold-color, #d8bf95);
    font-size: 10px;
    color: var(--white-color, #ffffff);
    border-radius: 50%;
    width: 17px;
    height: 17px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>