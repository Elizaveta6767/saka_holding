<script setup lang="ts">

</script>

<template>
    <div class="choice">
        <div class="filtres">
        <span>ФИЛЬТРЫ</span>
        <div class="circle_filter">3</div>
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
.circle_filter{
    background-color: var(--gold-color);
    border-radius: 100%;
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
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

@include tablet {
    .choice {
        gap: 12px;
        flex-wrap: wrap;
        padding: 0 15px;
        justify-content: flex-start;
    }
    
    .filtres {
        padding: 0 10px 0 0;
        order: 1;
    }
    
    .circle_filter {
        width: 18px;
        height: 18px;
        font-size: 11px;
        margin-left: 5px;
    }
    
    .choice span {
        font-size: 13px;
    }

    .choice span:not(.filtres):nth-child(2) {
        display: none;
    }
    
    .choice span:nth-child(3) {
        order: 2;
        font-size: 13px;
    }
    
    .black {
        order: 3;
        font-size: 13px;
        display: flex;
        align-items: center;
        gap: 5px;
    }
    
    .choice span img {
        width: 12px;
        height: 12px;
        margin-left: 4px;
    }
}

@include mobile {
    .choice {
        gap: 10px;
        padding: 0 10px;
        flex-direction: column;
        align-items: flex-start;
    }
    
    .filtres {
        padding: 0;
        width: 100%;
        justify-content: space-between;
    }
    
    .circle_filter {
        width: 16px;
        height: 16px;
        font-size: 10px;
    }
    
    .choice span {
        font-size: 12px;
    }
    
    .choice span:nth-child(3) {
        font-size: 12px;
    }
    
    .black {
        font-size: 12px;
    }
    
    .choice span img {
        width: 10px;
        height: 10px;
    }
}
</style>