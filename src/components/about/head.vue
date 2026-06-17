<script>
</script>

<template>
    <div class="text">
        <span>Главная</span>
        <span>></span>
        <span class="dark">Каталог</span>
    </div>  
    <div class="bold">
        <span>Позаботьтесь о себе и своих близких,<br>выбирайте качественные ткани</span>
    </div>
</template>

<style lang="scss">
.text{
    color: #a9a9a9;
    gap: 10px;
    display: flex;
}
.dark{
    color: var(--header-top-color);
}
.bold{
    font-size: 32px;
}

/* Адаптив для планшета */
@media (max-width: 1024px) {
    .text {
        gap: 8px;
        font-size: 14px;
        padding: 0 30px;
    }
    
    .bold {
        font-size: 26px;
        padding: 0 30px;
        line-height: 1.3;
    }
    
    .bold br {
        display: none;
    }
}

/* Адаптив для телефона - как на референсе */
@media (max-width: 768px) {
    .text {
        gap: 6px;
        font-size: 13px;
        padding: 0 20px;
        flex-wrap: wrap;
    }
    
    .bold {
        font-size: 22px;
        padding: 0 20px;
        line-height: 1.3;
    }
    
    .bold br {
        display: none;
    }
    
    /* Разбиваем текст на отдельные строки как на референсе */
    .bold span {
        display: block;
        max-width: 280px;
    }
}

/* Адаптив для маленьких телефонов */
@media (max-width: 480px) {
    .text {
        gap: 5px;
        font-size: 12px;
        padding: 0 15px;
    }
    
    .bold {
        font-size: 18px;
        padding: 0 15px;
        line-height: 1.4;
    }
    
    .bold span {
        max-width: 220px;
    }
}
</style>