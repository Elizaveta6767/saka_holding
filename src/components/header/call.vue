<script>
</script>
<template>
    <div class="call">
        <div class="call_top">
            <img src="../../assets/icons/call.svg" alt="call">
            <span>+90 212 547 08 26</span>
        </div>
        <div class="call_down">
            <span><u>Заказать звонок</u></span>
        </div>
    </div>
</template>
<style lang="scss">
.call{
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 15px;
    .call_top{
        display: flex;
        align-items: center;
        gap: 6px;
        font-size: 18px;
    }
    .call_down{
        display: flex;
        justify-content: end;
        font-size: 12px;
        margin-left: 70px;
        cursor: pointer;
        
    }
}

</style>