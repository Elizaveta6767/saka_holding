<template>
    <div class="logo">
        <UiIcon name="logo" />
    </div>
</template>

<script setup lang="ts">
import UiIcon from '../ui/UiIcon.vue';
</script>

<style scoped lang="scss">
.logo {
    padding-right: 20px;
    @include tablet {
        .logo {
            margin-right: 20px;
            max-width: 82px;
        }
    }
}
</style>