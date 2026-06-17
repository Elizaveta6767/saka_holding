<script setup lang="ts">
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

@include tablet{
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

    .bold span {
        display: block;
        max-width: 280px;
    }
}

@include mobile{
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