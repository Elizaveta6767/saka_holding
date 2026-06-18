<template>
  <Transition name="modal">
    <div v-if="isOpen" class="modal-overlay" @click.self="emit('close')">
      <div class="modal-content">

        <button class="modal-close" @click="emit('close')">
          <UiIcon name="x"/>
        </button>

        <h2 class="modal-title">Корзина</h2>
        <div class="cart-items-list">
          <div class="cart-item">
            <div class="item-image-fallback"></div>
            <div class="item-details">
              <h4 class="item-name">Футер 2-х нитка диагональ</h4>
              <div class="item-counter">
                <button class="counter-btn">−</button>
                <span class="counter-val">3</span>
                <button class="counter-btn">+</button>
              </div>
            </div>
            <div class="item-actions">
              <span class="item-price">450P</span>
              <button class="item-remove-btn">
                <UiIcon name="x"/>
              </button>
            </div>
          </div>

          <div class="cart-item">
            <div class="item-image-fallback"></div>
            <div class="item-details">
              <h4 class="item-name">Футер 2-х нитка диагональ</h4>
              <div class="item-counter">
                <button class="counter-btn">−</button>
                <span class="counter-val">16</span>
                <button class="counter-btn">+</button>
              </div>
            </div>
            <div class="item-actions">
              <span class="item-price">4 650P</span>
              <button class="item-remove-btn">
                <UiIcon name="x"/>
              </button>
            </div>
          </div>

          <div class="cart-item">
            <div class="item-image-fallback"></div>
            <div class="item-details">
              <h4 class="item-name">Футер 2-х нитка диагональ</h4>
              <div class="item-counter">
                <button class="counter-btn">−</button>
                <span class="counter-val">1</span>
                <button class="counter-btn">+</button>
              </div>
            </div>
            <div class="item-actions">
              <span class="item-price">305 005P</span>
              <button class="item-remove-btn">
                <UiIcon name="x"/>
              </button>
            </div>
          </div>
        </div>

        <form class="checkout-form" @submit.prevent>
          <div class="input-wrapper">    
            <UiIcon class="input-icon" name="mail"/>
            <input type="email" placeholder="E-Mail" />
          </div>

          <div class="input-wrapper">
            <UiIcon class="input-icon" name="number"/>
            <input type="tel" placeholder="+7 (___) ___-__-__" />
          </div>

          <button type="submit" class="submit-btn">
            <span>Оформить заказ</span>  
                <UiIcon class="btn-cart-icon" name="shop"/>
          </button>
        </form>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import UiIcon from '../ui/UiIcon.vue';

defineProps<{
  isOpen: boolean
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()
</script>

<style scoped lang="scss">
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(30, 37, 56, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.modal-content {
  background-color: #fcfcfc;
  width: 100%;
  max-width: 480px;
  padding: 40px 30px;
  border-radius: 28px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
  position: relative;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}

.modal-close {
  position: absolute;
  top: 25px;
  right: 25px;
  background: none;
  border: none;
  color: #cccccc;
  cursor: pointer;
  padding: 0;
}

.modal-title {
  font-size: 32px;
  font-weight: 700;
  color: #1e2538;
  margin: 0 0 25px 0;
}

.cart-items-list {
  max-height: 280px;
  overflow-y: auto;
  margin-bottom: 25px;
}

.cart-item {
  display: flex;
  align-items: center;
  background-color: #f5f6f8;
  border-radius: 18px;
  padding: 12px 15px;
  margin-bottom: 12px;
  gap: 12px;
}

.item-image-fallback {
  width: 60px;
  height: 60px;
  border-radius: 14px;
  background: url(../../assets/images/blue-bg.png);
}

.item-details {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.item-name {
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  color: #1e2538;
}

.item-counter {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.counter-btn {
  background: none;
  border: none;
  font-size: 16px;
  color: #a6b1bd;
  cursor: pointer;
}

.counter-val {
  font-size: 13px;
  font-weight: 600;
  color: #1e2538;
}

.item-actions {
  display: flex;
  align-items: center;
  gap: 15px;
}

.item-price {
  font-size: 16px;
  font-weight: 700;
  color: #1e2538;
}

.item-remove-btn {
  background: none;
  border: none;
  color: #cccccc;
  cursor: pointer;
  display: flex;
}

.checkout-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.input-wrapper {
  position: relative;

  .input-icon {
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
    color: #b5b5b5;
    display: flex;
  }

  input {
    width: 100%;
    padding: 18px 20px 18px 55px;
    background-color: #ffffff;
    border: 1px solid #f2f2f2;
    border-radius: 18px;
    font-size: 16px;
    outline: none;
    box-sizing: border-box;
  }
}

.submit-btn {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 18px 25px;
  background-color: var(--gold-color);
  color: #1e2538;
  font-size: 18px;
  font-weight: 700;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  margin-top: 10px;
  box-sizing: border-box;
}

.btn-cart-icon {
  display: flex;
}

</style>