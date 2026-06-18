<script>
</script>
<template>
    <div class="sale">
        <div class="sale_text">
            <span>АКЦИИ</span>
        </div>
    </div>
</template>
<style lang="scss">
.sale{
    background-color: var(--header-top-color);
    min-width: 140px;
    max-width: 1440px;
  .sale_text{
    background-color: var(--gold-color);
    border: none;
    padding-left: 15px;
    display: flex;
    align-items: center;
    clip-path: polygon(0 0, 100% 0, 100% calc(100% - 50px), calc(100% - 50px) 100%, 0 100%);
    width: 100%;
    height: 50px;
    max-width: 140px;
    color: var(--header-top-color);
    font-weight: 700;
}  
}

</style>