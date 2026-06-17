<script setup lang="ts">
</script>

<template>
    <div class="view">
        <div class="heading">
            <p>Saka Tekstil работает с трикотажными<br>полотнами разного качества:</p>
        </div>
        <div class="cloth_card">
        <div class="cloth">
            <img src="../../assets/images/first.png" alt="first">
            <span>Open end</span>
            <p>Бюджетный трикотаж, имеет ворсистую и<br>шероховатую поверхность из-за коротких<br>волокон.</p>
        </div>
         <div class="cloth">
            <img src="../../assets/images/second.png" alt="first">
            <span>Пенье компакт</span>
            <p>Высшее качество трикотажной ткани,<br>имееют гладкую поверхность без<br>ворсинок </p>
        </div>
         <div class="cloth">
            <img src="../../assets/images/third.png" alt="first">
            <span>Пенье компакт Плюс-EXCLUSIVE</span>
            <p>полотно вяжется американскими нитками<br>и окрашено немецкими красками высшего<br>качества</p>
        </div>
        </div>
    </div>  
    
</template>

<style lang="scss">
.view {
    padding: 40px 100px;
}

.heading{
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 40px;
}
.cloth span{
    font-weight: bold;
}
.cloth{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    
    img {
        width: 100%;
        height: auto;
        margin-bottom: 15px;
    }
}
.cloth_card{
    display: flex;
    justify-content: center;
    gap: 30px;
}

/* Адаптив для планшета */
@media (max-width: 1024px) {
    .view {
        padding: 30px 40px;
    }
    
    .heading {
        font-size: 20px;
        margin-bottom: 30px;
        text-align: center;
    }
    
    .cloth_card {
        gap: 25px;
        flex-wrap: wrap;
        justify-content: center;
    }
    
    .cloth {
        flex: 0 0 calc(50% - 13px);
        max-width: calc(50% - 13px);
        min-width: calc(50% - 13px);
        align-items: flex-start;
        text-align: left;
    }
    
    .cloth span {
        font-size: 17px;
    }
    
    .cloth p {
        font-size: 14px;
        line-height: 1.5;
    }
}

/* Адаптив для телефона */
@media (max-width: 768px) {
    .view {
        padding: 20px 20px;
    }
    
    .heading {
        font-size: 18px;
        margin-bottom: 25px;
        text-align: center;
    }
    
    .cloth_card {
        gap: 30px;
        flex-direction: column;
        align-items: center;
    }
    
    .cloth {
        flex: none;
        max-width: 100%;
        width: 100%;
        max-width: 450px;
        align-items: flex-start;
        text-align: left;
    }
    
    .cloth span {
        font-size: 17px;
    }
    
    .cloth p {
        font-size: 14px;
        line-height: 1.5;
    }
}

/* Адаптив для маленьких телефонов */
@media (max-width: 480px) {
    .view {
        padding: 15px 15px;
    }
    
    .heading {
        font-size: 16px;
        margin-bottom: 20px;
    }
    
    .heading br {
        display: none;
    }
    
    .cloth_card {
        gap: 25px;
    }
    
    .cloth {
        max-width: 100%;
        align-items: flex-start;
        text-align: left;
    }
    
    .cloth span {
        font-size: 16px;
    }
    
    .cloth p {
        font-size: 13px;
        line-height: 1.4;
    }
    
    .cloth p br {
        display: none;
    }
}
</style>