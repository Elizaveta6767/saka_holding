<script>
</script>

<template>
    <div class="choice">
        <div class="filtres">
        <span>ФИЛЬТРЫ</span>
        <div class="circle">3</div>
        </div>
        <span>СБРОСИТЬ<img src="../../assets/icons/x.svg" alt="x"></span>
        <span>СОРТИРОВКА:</span>
        <span class="black">По новизне<img src="../../assets/icons/down.svg" alt="down"></span>
    </div>
</template>

<style lang="scss">
.filtres{
    color: var(--header-top-color);
    display: flex;
    padding: 0 20px 0 0;
}
.circle{
    background-color: var(--gold-color);
    border-radius: 100%;
    width: 20px;
    height: 20px;
}
.choice{
    color: #a9a9a9;
    gap: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
}
.black{
    color: var(--header-top-color);
}

</style>