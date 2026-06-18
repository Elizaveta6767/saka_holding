<template>
    <div class="comp-emblems">
        <div class="emblem ">
            <img src="../../assets/icons/saka.svg" alt="">
        </div>
        <div class="emblem">
            <img src="../../assets/icons/eros.svg" alt="">
        </div>
        <div class="emblem">
            <img src="../../assets/icons/tor.svg" alt="">
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style setup lang="scss">
@use '../../assets/styles/mixins.scss';

.comp-emblems {
    display: flex;
    gap: 20px;
    align-items: center;

    @include tablet {
      gap: 8px;
    }
}

.emblem {
    align-items: center;
    justify-content: center;
}


</style>