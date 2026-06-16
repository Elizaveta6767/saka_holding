<script setup lang="ts">
defineProps<{
    image: string
    title: string
}>()
</script>

<template>
    <div class="image-card">
        <div class="card-image" >
            <img :src="image" :alt="title">
        </div>
        <p class="card-title">{{ title }}</p>
    </div>
</template>

<style scoped lang="scss">
.image-card {
    display: flex;
    flex-direction: column;
    .card-image {
        width: 100%;
        overflow: hidden;
        border-radius: 8px;
        img {
            width: 100%;
            height: 100%;
        }
    }
    .card-title {
        margin-top: 12px;
        text-align: center;
    }
}
</style>