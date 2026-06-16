<script>
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
.heading{
    font-size: 22px;
    font-weight: bold;
}
.cloth span{
    font-weight: bold;
}
.cloth{
    display: flex;
    flex-direction: column;
}
.cloth_card{
    display: flex;
    justify-content: center;
    gap: 20px;
}
</style>