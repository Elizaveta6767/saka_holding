<script>
</script>

<template>
    <button class="sale">
        АКЦИИ
    </button>
    <div class="elem">
        <img src="../../assets/icons/purple.svg">
        <span>Кулинарная гладь</span>
    </div>
    <div class="elem">
        <img src="../../assets/icons/green.svg">
        <span>Футер</span>
    </div>
    <div class="elem">
        <img src="../../assets/icons/gold.svg">
        <span>Кулинарная гладь</span>
    </div>
    <div class="elem">
        <img src="../../assets/icons/orange.svg">
        <span>Пике</span>
    </div>
    <div class="elem">
        <img src="../../assets/icons/pink.svg">
        <span>Интерлок</span>
    </div>
    <div class="elem">
        <img src="../../assets/icons/turquoise.svg">
        <span>Капитоний</span>
    </div>
    <div class="elem">
        <img src="../../assets/icons/violet.svg">
        <span>Велюр</span>
    </div>
    <div class="elem">
        <img src="../../assets/icons/blue.svg">
        <span>Селаник</span>
    </div>
    <div class="elem">
        <img src="../../assets/icons/barbie.svg">
        <span>Вискоза</span>
    </div>
</template>


<style lang="scss">
.elem {
    gap: 5px;
    max-width: 150px;
    display: flex; 
    max-height: 100%;
    align-items: center;
    font-size: 14px;
    justify-content: center;
}

.sale {
    border: none;
    padding: 12px;
    background-color: var(--gold-color);
    font-weight: 700;
    clip-path: polygon(0 0, 100% 0, 100% calc(100% - 50px), calc(100% - 50px) 100%, 0 100%);
    width: 100%;
    height: 100%;
    max-width: 140px;
    padding-right: 80px;
}

</style>