<script>
</script>

<template>
    <RouterLink to="/" class="logo">
        <img src="./../../assets/icons/logo.svg" alt="saka">
    </RouterLink>  
</template>

<style lang="scss">
@use '../../assets/styles/mixins.scss';

.logo{
    cursor: pointer;
    > img {
        @include mobile{
            width: 86px;
        }
    }
}
</style>