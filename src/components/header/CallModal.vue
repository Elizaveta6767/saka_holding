<template>
  <Teleport to="body">
    <Transition name="modal-fade">
      <div v-if="isOpen" class="modal-overlay" @click.self="emit('close')">
        <div class="modal-wrapper">
          <div class="modal-form-side">
            <h2 class="form-title">Заказать прайс-лист и каталог</h2>
            <p class="form-subtitle">Оставьте заявку и получите образцы</p>
            <form class="modal-form">
              <div class="input-group">
                <UiIcon class="input-icon" name="user2"/>
                <input  type="text" placeholder="Имя"  />
              </div>
              <div class="input-group">
                <UiIcon class="input-icon" name="mail"/>
                <input  type="email" placeholder="E-Mail"  />
              </div>
              <div class="input-group">
                <UiIcon class="input-icon" name="number"/>
                <input   placeholder="+7 (___) ___ - __ - __"  />
              </div>
              <div class="input-group">
                  <UiIcon class="input-icon" name="geo"/>
                <input  type="text" placeholder="Адрес доставки" />
              </div>

              <button class="submit-btn">Оставить заявку</button>
            </form>
            <p class="form-disclaimer">
              Нажимая на кнопку вы даете свое согласие на обработку персональных данных. Гарантируем! Спама не будет!
            </p>
          </div>
          <div class="modal-image-side">
            <button class="close-desktop" @click="emit('close')" a><UiIcon name="cross"/></button>
            <img src="../../assets/images/modal-girl.jpg" alt="Выбор тканей" class="bg-img" />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import UiIcon from '../ui/UiIcon.vue';

defineProps<{
  isOpen?: boolean;
}>();

const emit = defineEmits<{
  (e: 'close'): void;
  (e: 'submit'): void;
}>();

</script>

<style scoped lang="scss">
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.modal-wrapper {
  background-color: var(--white-color);
  width: 100%;
  max-width: 960px;
  height: 600px;
  display: flex;
  position: relative;
  margin: 0 20px;
}

.modal-form-side {
  flex: 1.1;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  background-color: #fdfdfd;
}

.form-title {
  font-family: sans-serif;
  font-size: 26px;
  font-weight: 800;
  margin: 0 0 8px 0;
  line-height: 1.2;
}

.form-subtitle {
  font-family: sans-serif;
  font-size: 14px;
  color: var(--gold-color);
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
    color: var(--grey-color);
    display: flex;
    align-items: center;
  }

  input {
    width: 100%;
    padding: 18px 20px 18px 54px;
    border: 1px solid #eaeef2;
    border-radius: 30px;
    background-color: var(--white-color);
    font-size: 14px;
    color: #1a2332;
    outline: none;
    box-sizing: border-box;

  }
}

.submit-btn {
  width: 100%;
  background-color: var(--gold-color);
  color: #1a2332;
  font-size: 16px;
  font-weight: 700;
  padding: 18px 0;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  margin-top: 10px;

  
}

.form-disclaimer {
  font-family: var(--font-famaly);
  font-size: 11px;
  line-height: 1.5;
  color: var(--grey-color);
  margin: 25px 0 0 0;
}

.modal-image-side {
  flex: 1;
  position: relative;
  background-color: var(--white-color);
  overflow: hidden;
  clip-path: polygon(26% 0, 100% 0, 100% 100%, 0% 100%);
  margin-left: -40px;

  .bg-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
}

.close-desktop {
  position: absolute;
  top: 25px;
  right: 25px;
  background: 0;
  border: 0;
  font-size: 32px;
  color: var(--white-color);
  cursor: pointer;

}


@include tablet {
  .modal-wrapper {
    height: auto;
    max-width: 500px;
    flex-direction: column;
  }

  .modal-form-side {
    padding: 40px 30px;
  }

  .modal-image-side {
    display: none;
  }

  .close-mobile {
    display: block;
    position: absolute;
    top: 20px;
    right: 20px;
    background: none;
    border: none;
    font-size: 32px;
    color: #a0aec0;
    cursor: pointer;
    line-height: 1;
  }

  .form-title {
    font-size: 22px;
  }

  .form-subtitle {
    margin-bottom: 25px;
  }
}
</style>