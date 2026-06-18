<script>
</script>

<template>
    <div class="img">
        <img src="../../assets/images/flag.png" alt="flag">
    </div>  
    <div class="text_info">
        <p class="big">Saka Tekstil - производство и продажа<br> турецкого трикотажного полотна</p>
        <p>Мы осуществляем продажу ткани от рулона<br> и нарезку кашкорсе от 5%-20%</p>
        <p>Наша команда следит за трендами в мире<br> трикотажа, мы постоянно обновляем наш<br>ассортимент и регулярно контролируем<br>наличие ткани на складе</p>
        <p>Мы предлагаем клиентам различные виды<br>трикотажных полотен высокого качества<br>более, чем в 45 цветовых вариациях</p>
        <div class="row">
        <div class="circle">
            <img src="../../assets/icons/cron.svg" alt="crown" width="19px" height="14px">
            <span>30</span>
            <p class="text_circle">Лет на рынке<br>текстиля</p>
        </div>
        <div class="circle">
            <img src="../../assets/icons/cron.svg" alt="crown" width="19px" height="14px">
            <span>40+</span>
            <p class="text_circle">Ассортимент<br>товаров<br>в наличии</p>
        </div>
        <div class="circle">
            <img src="../../assets/icons/cron.svg" alt="crown" width="19px" height="14px">
            <span>10 000+</span>
            <p class="text_circle">Клиентов<br>выбирают нашу<br>компанию</p>
        </div>
        </div>
    </div>
</template>

<style lang="scss">
/* ===== ОБЩИЙ КОНТЕЙНЕР ===== */
.about-container {
    display: flex;
    gap: 40px;
    align-items: flex-start;
    position: relative;
}

.text_info{
    color: var(--header-top-color);
    font-size: 18px;
    flex: 1;
    position: relative;
    z-index: 2;
}
.big{
    font-size: 26px;
}
.circle{
    width: 180px;
    height: 180px;
    border-radius: 100%;
    background-color: var(--grey-color);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 3;
}
.circle span{
    color: var(--gold-color);
    font-size: 40px;
    font-weight: bold;
}
.text_circle{
    text-align: center;
}
.row{
    display: flex;
    flex-direction: row;
    gap: 30px;
    padding: 100px 0 0 0;
    position: relative;
    z-index: 3;
}

/* ===== НОУТБУК (1025px и выше) ===== */
.img {
    width: 520px;
    height: 640px;
    flex-shrink: 0;
    position: relative;
    z-index: 1;
}

.img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* ===== ПЛАНШЕТ (768px - 1024px) ===== */
@media (max-width: 1024px) and (min-width: 768px) {
    .about-container {
        gap: 20px;
        align-items: flex-start;
    }

    .img {
        width: 339px;
        height: 576px;
        flex-shrink: 0;
    }

    .text_info {
        font-size: 16px;
        flex: 1;
        min-width: 0;
    }

    .big {
        font-size: 22px;
    }

    .row {
        flex-wrap: nowrap;
        justify-content: flex-start;
        gap: 15px;
        padding: 180px 0 0 0;
        margin-left: -60px; /* Кружки заходят на картинку */
        position: relative;
        z-index: 3;
    }

    .circle {
        width: 130px;
        height: 130px;
        flex-shrink: 0;
    }

    .circle span {
        font-size: 28px;
    }

    .text_circle {
        font-size: 12px;
    }

    .text_info p {
        margin: 8px 0;
    }
}

/* ===== МАЛЕНЬКИЙ ПЛАНШЕТ / БОЛЬШОЙ ТЕЛЕФОН (до 768px) ===== */
@media (max-width: 767px) {
    .about-container {
        flex-direction: column;
        align-items: center;
    }

    .img {
        width: 100%;
        height: auto;
    }

    .img img {
        height: auto;
        object-fit: contain;
    }

    .text_info {
        font-size: 14px;
        padding: 0 15px;
    }

    .big {
        font-size: 18px;
    }

    .row {
        flex-direction: column;
        gap: 20px;
        padding: 40px 0 0 0;
        margin-left: 0;
    }

    .circle {
        width: 140px;
        height: 140px;
    }

    .circle span {
        font-size: 28px;
    }

    .text_circle {
        font-size: 13px;
    }
}
</style>