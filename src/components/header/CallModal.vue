
<template>
  <Teleport to="body">
    <Transition name="modal-fade">
      <div v-if="isOpen" class="modal-overlay" @click.self="emit('close')">
        <div class="modal-wrapper">
          
          <!-- Левая сторона: Форма -->
          <div class="modal-form-side">
            <button class="close-mobile" @click="emit('close')" aria-label="Закрыть">&times;</button>
            
            <h2 class="form-title">Заказать прайс-лист и каталог</h2>
            <p class="form-subtitle">Оставьте заявку и получите образцы</p>

            <form class="modal-form" @submit.prevent="handleSubmit">
              <div class="input-group">
                <span class="input-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                </span>
                <input v-model="form.name" type="text" placeholder="Имя" required />
              </div>

              <div class="input-group">
                <span class="input-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </span>
                <input v-model="form.email" type="email" placeholder="E-Mail" required />
              </div>

              <div class="input-group">
                <span class="input-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </span>
                <input v-model="form.phone" type="tel" placeholder="+7 (___) ___ - __ - __" required />
              </div>

              <div class="input-group">
                <span class="input-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </span>
                <input v-model="form.address" type="text" placeholder="Адрес доставки" required />
              </div>

              <button type="submit" class="submit-btn">Оставить заявку</button>
            </form>

            <p class="form-disclaimer">
              Нажимая на кнопку вы даете свое согласие на обработку персональных данных. Гарантируем! Спама не будет!
            </p>
          </div>

          <!-- Правая сторона: Картинка -->
          <div class="modal-image-side">
            <button class="close-desktop" @click="emit('close')" aria-label="Закрыть">&times;</button>
            <img src="../../assets/images/modal-girl.png" alt="Выбор тканей" class="bg-img" />
          </div>

        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

defineProps<{
  isOpen: boolean;
}>();

const emit = defineEmits<{
  (e: 'close'): void;
  (e: 'submit', data: typeof form): void;
}>();

const form = reactive({
  name: '',
  email: '',
  phone: '',
  address: ''
});

const handleSubmit = () => {
  emit('submit', { ...form });
  form.name = '';
  form.email = '';
  form.phone = '';
  form.address = '';
  emit('close');
};
</script>

<style scoped lang="scss">
.modal-overlay {
  position: fixed;
  top: 0; left: 0;
  width: 100vw; height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.modal-wrapper {
  background-color: #ffffff;
  width: 100%;
  max-width: 960px;
  height: 600px;
  border-radius: 16px;
  display: flex;
  position: relative;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.15);
  margin: 0 20px;
}

.modal-form-side {
  flex: 1.1;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 2;
  background-color: #fdfdfd;
}

.close-mobile {
  display: none;
}

.form-title {
  font-family: sans-serif;
  font-size: 26px;
  font-weight: 800;
  color: #1a2332;
  margin: 0 0 8px 0;
  line-height: 1.2;
}

.form-subtitle {
  font-family: sans-serif;
  font-size: 14px;
  color: #7d8999;
  margin: 0 0 35px 0;
}

.modal-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
}

.input-group {
  position: relative;
  width: 100%;

  .input-icon {
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
    color: #a0aec0;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  input {
    width: 100%;
    padding: 18px 20px 18px 54px;
    border: 1px solid #eaeef2;
    border-radius: 30px;
    background-color: #ffffff;
    font-size: 14px;
    color: #1a2332;
    outline: none;
    box-sizing: border-box;
    transition: border-color 0.2s, box-shadow 0.2s;

    &::placeholder { color: #a0aec0; }
    &:focus {
      border-color: #3b82f6;
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    }
  }
}

.submit-btn {
  width: 100%;
  background-color: #dec5a1;
  color: #1a2332;
  font-size: 16px;
  font-weight: 700;
  padding: 18px 0;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: background-color 0.2s, transform 0.1s;
  margin-top: 10px;

  &:hover { background-color: #d1b68f; }
  &:active { transform: scale(0.98); }
}

.form-disclaimer {
  font-family: sans-serif;
  font-size: 11px;
  line-height: 1.5;
  color: #a0aec0;
  margin: 25px 0 0 0;
}

.modal-image-side {
  flex: 1;
  position: relative;
  background-color: #ffffff;
  overflow: hidden;
  clip-path: polygon(10% 0, 100% 0, 100% 100%, 0% 100%);
  margin-left: -40px;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    border-left: 3px solid #3b82f6;
    pointer-events: none;
    z-index: 3;
    clip-path: polygon(10% 0, 100% 0, 100% 100%, 0% 100%);
  }

  .bg-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
}

.close-desktop {
  position: absolute;
  top: 25px; right: 25px;
  background: none;
  border: none;
  font-size: 32px;
  color: #ffffff;
  cursor: pointer;
  z-index: 10;
  transition: transform 0.2s;
  &:hover { transform: scale(1.1); }
}

/* Анимации плавного перехода */
.modal-fade-enter-active, .modal-fade-leave-active {
  transition: opacity 0.3s ease;
}
.modal-fade-enter-from, .modal-fade-leave-to {
  opacity: 0;
}

@include tablet {
  .modal-wrapper {
    height: auto;
    max-width: 500px;
    flex-direction: column;
  }
  .modal-form-side { padding: 40px 30px; }
  .modal-image-side { display: none; }
  .close-mobile {
    display: block;
    position: absolute;
    top: 20px; right: 20px;
    background: none;
    border: none;
    font-size: 32px;
    color: #a0aec0;
    cursor: pointer;
    line-height: 1;
  }
  .form-title { font-size: 22px; }
  .form-subtitle { margin-bottom: 25px; }
}
</style>