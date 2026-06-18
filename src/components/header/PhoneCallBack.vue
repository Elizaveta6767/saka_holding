<template>
  <div class="comp-phone">
    <div class="phone-num">
      <img src="../../assets/icons/call.svg" alt="Телефон" />
      <span>+90 212 547 08 26</span>
    </div>
    <button class="callback-btn" @click="openModal">
      <u>Заказать звонок</u>
    </button>

    <!-- Подключаем модальное окно, импортированное из этой же папки -->
    <CallModal 
      :is-open="isModalOpen" 
      @close="closeModal" 
      @submit="handleFormSubmit" 
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import CallModal from './CallModal.vue'; // Импортируем из этой же папки

const isModalOpen = ref<boolean>(false);

const openModal = (): void => {
  isModalOpen.value = true;
};

const closeModal = (): void => {
  isModalOpen.value = false;
};

const handleFormSubmit = (formData: any): void => {
  console.log('Данные формы из модалки:', formData);
};
</script>

<style scoped lang="scss">
.comp-phone {
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  .phone-num {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 16px;
    font-weight: 700;
    color: var(--text-color, #ffffff); /* Fallback на белый, если переменная не загрузилась */
  }

  .callback-btn {
    border: 0;
    background-color: transparent;
    font-size: 11px;
    font-weight: 500;
    color: var(--grey-color, #a6b1bd);
    cursor: pointer;
    padding: 0;
    margin-top: 3px;
    transition: opacity 0.3s;

    &:hover {
      opacity: 0.7;
    }
  }
}
</style>