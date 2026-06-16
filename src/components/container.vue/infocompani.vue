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
.text_info{
    color: var(--header-top-color);
    font-size: 18px;
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
}
.circle span{
    color: var(--gold-color);
    font-size: 40px;
    font-weight: bold;
}
.text_circle{
    align-items: center;
}
.row{
    display: flex;
    flex-direction: row;
    gap: 30px;
    padding: 100px 0 0 0;
}


</style>