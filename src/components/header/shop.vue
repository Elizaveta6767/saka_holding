<script>
</script>
<template>
    <div class="shop">
        <img src="../../assets/icons/shop.svg" alt="shop">
        <div class="three">
            3
        </div>
    </div>
</template>
<style lang="scss">
.shop{
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    background-color: var(--opacity-5-color);
    margin-left: 80px;
    cursor: pointer;
    .three{
        border-radius: 50%;
        width: 16px;
        height: 16px;
        position: relative;
        top: -10px;
        left: 10px;
        background-color: var(--dark-gold);
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
.shop img{
    position: relative;
    left: 8px;
}

</style>