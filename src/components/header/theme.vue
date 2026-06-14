<script>
</script>
<template>
    <div class="theme">
        <button>DARK</button>
        <span>/</span>
        <button>LIGHT</button>
    </div>
</template>
<style lang="scss">
.theme{
    display: flex;
    gap: 5px;
}
.theme button{
    background-color: var(--header-top-color);
    color: var(--text-color);
    border: 0;
    cursor: pointer;
}
</style>