<template>
    <Transition name="modal">
        <div v-if="isOpen" class="modal-overlay" @click.self="emit('close')">
            <div class="modal-content">
                <button class="modal-close" @click="emit('close')" aria-label="Закрыть">
                    <UiIcon name="x" />
                </button>
                <h2 class="modal-title">Вход</h2>
                <form  class="login-form">
                    <div class="input-wrapper">
                        <UiIcon class="input-icon" name="user2" />
                        <input v-model="login" type="text" placeholder="Логин" required />
                    </div>

                    <div class="input-wrapper">
                        <UiIcon class="input-icon" name="eye" />
                        <input v-model="password" type="password" placeholder="Пароль" required />
                    </div>
                    <button type="submit" class="submit-btn">Войти</button>
                </form>
                <div class="modal-links">
                    <button class="link-forgot" @click.prevent="onForgotPassword">Забыли пароль?</button>
                    <button class="link-register" @click.prevent="onRegister">Зарегистрироваться</button>
                </div>

            </div>
        </div>
    </Transition>
</template>

<script setup lang="ts">
import { ref, } from 'vue'
import UiIcon from '../ui/UiIcon.vue';

const props = defineProps<{
    isOpen: boolean
}>()

const emit = defineEmits<{
    (e: 'close'): void
}>()

const login = ref<string>('')
const password = ref<string>('')

const onForgotPassword = (): void => {
    console.log()
}

const onRegister = (): void => {
    console.log()
}
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
    max-width: 420px;
    padding: 50px 35px 40px;
    border-radius: 28px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
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
    margin-bottom: 35px;
    text-align: center;
}

.login-form {
    width: 100%;
}

.input-wrapper {
    position: relative;
    margin-bottom: 20px;
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
        padding: 18px 20px 18px 55px;
        background-color: #ffffff;
        border: 1px solid #f2f2f2;
        border-radius: 18px;
        font-size: 16px;
        color: #1e2538;
        outline: none;
        box-sizing: border-box;

        &::placeholder {
            color: #b5b5b5;
        }

        &:focus {
            border-color: var(--gold-color);;
        }
    }
}

.submit-btn {
    width: 100%;
    padding: 18px;
    background-color: var(--gold-color);
    color: #1e2538;
    font-size: 18px;
    font-weight: 700;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    margin-top: 10px;
}

.modal-links {
    margin-top: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;

    .link-forgot {
        color: #1e2538;
        text-decoration: underline;
        background: none;
        border: 0;
        cursor: pointer;
    }

    .link-register {
        color: var(--gold-color);
        font-weight: 600;
        background: none;
        border: 0;
        cursor: pointer;
    }
}

</style>