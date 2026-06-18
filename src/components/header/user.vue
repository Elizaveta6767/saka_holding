<template>
  <button class="comp-login" @click="openModal">
    <img src="../../assets/icons/user.svg" alt="User icon">  
    <span>Войти</span>
  </button>
  <ModalLogin :is-open="isModalOpen" @close="closeModal" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ModalLogin from '../header/ModalLogin.vue' 

const isModalOpen = ref<boolean>(false)

const openModal = (): void => {
  isModalOpen.value = true
}

const closeModal = (): void => {
  isModalOpen.value = false
}
</script>

<style scoped lang="scss">
.comp-login {
  background: none;
  border: none;
  color: var(--white-color);
  font-size: 14px;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0;
  outline: none;

  > span {
    display: flex;
    align-items: center;
    margin-left: 8px; 
  }
}
</style>