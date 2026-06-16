<template>
    <div class="order-section">
        <div class="order-card">
            <!-- Заголовки -->
            <h2 class="order-title">
                Фабрика «Saka Tekstil» осуществляет прокрас текстиля на заказ на самых выгодных условиях
            </h2>
            <p class="order-subtitle">
                Просто оставьте заявку на сайте и мы свяжемся с вами в ближайшее время
            </p>

            <!-- Форма -->
            <form @submit.prevent="handleSubmit" class="order-form">
                <div class="input-wrapper">
                    <input type="text" v-model="formData.name" placeholder="Ваше имя" required class="form-input" />
                </div>

                <div class="input-wrapper">
                    <!-- Простая маска для ввода телефона -->
                    <input type="tel" v-model="formData.phone" @input="handlePhoneInput"
                        placeholder="+7 (___) ___-__-__" required class="form-input" />
                </div>

                <div class="input-wrapper">
                    <input type="email" v-model="formData.email" placeholder="Ваш E-mail" required class="form-input" />
                </div>

                <!-- Кнопка отправки -->
                <button type="submit" class="submit-btn">
                    <span>Отправить</span>
                    <svg class="arrow-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
            </form>
            <p class="disclaimer">
                Нажимая на кнопку вы даете свое согласие на обработку персональных данных. Гарантируем! Спама не будет!
            </p>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const formData = ref({
    name: '',
    phone: '',
    email: ''
})
</script>

<style scoped>
/* Фоновый контейнер блока */
.order-section {
    width: 100%;
    padding: 40px 20px;
    box-sizing: border-box;
    background-color: #ffffff;
}

.order-card {
    max-width: 1200px;
    margin: 0 auto;
    background-color: #1c252c;
    /* Темный графитовый цвет */
    border-radius: 20px;
    padding: 50px 60px;
    box-sizing: border-box;
    text-align: center;
}

/* Заголовок */
.order-title {
    display: flex;
    justify-content: center;
    font-family: var(--font-famaly);
    color: #ffffff;
    font-size: 28px;
    font-weight: 600;
    line-height: 1.4;
    margin: 0 230px 15px 230px;
    letter-spacing: -0.3px;
    max-width: 600px;

}

.order-subtitle {
    font-family: var(--font-famaly);
    color: #a5b1bc;
    font-size: 20px;
    margin: 0 0 35px 0;
}


.order-form {
    display: flex;
    gap: 15px;
    justify-content: center;
    align-items: center;
    margin-bottom: 25px;
    width: 100%;
}

.input-wrapper {
    flex: 1;
    max-width: 260px;
}


.form-input {
    width: 100%;
    height: 52px;
    background-color: var(--header-medium-color);

    border: 1px solid transparent;
    border-radius: 12px;
    padding: 0 20px;
    color: #ffffff;
    font-family: var(--font-famaly);
    font-size: 14px;
    box-sizing: border-box;
}

.form-input:focus {
    outline: none;
    border-color: var(--dark-gold);
    background-color: var(--header-top-color);
}

.submit-btn {
    flex: 1;
    max-width: 260px;
    height: 52px;
    background-color: var(--gold-color);
    color: #1c252c;
    border: none;
    border-radius: 30px;
    font-family: var(--font-famaly);
    font-weight: 600;
    font-size: 15px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 25px;
    box-sizing: border-box;
}

.submit-btn:hover {
    background-color: var(--gold-color);
}


.disclaimer {
    font-family: var(--font-famaly);
    font-size: 16px;
    color: #55626f;
    margin: 0;
}

@media (max-width: 992px) {
    .order-card {
        padding: 40px 30px;
    }

    .order-form {
        flex-direction: column;
        gap: 15px;
    }

    .input-wrapper,
    .submit-btn {
        max-width: 100%;
        width: 100%;
    }
}

@media (max-width: 576px) {
    .order-title {
        font-size: 18px;
    }

    .order-subtitle {
        font-size: 13px;
    }
}
</style>