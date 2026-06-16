<template>
    <div class="block-top">
        <Tshirt
            image="/src/assets/images/dark-grey-t.png"
            title="A-104 Dark Grey"/>
        <Tshirt
            image="/src/assets/images/grey-t.png"
            title="A-101 Grey"/>
        <Tshirt
            image="/src/assets/images/white-t.png"
            title="A-115 White"/>
        <Tshirt
            image="/src/assets/images/black-t.png"
            title="A-123 Black"/>
        <Tshirt
            image="/src/assets/images/dark-blue-t.png"
            title="A-106 Dark Blue"/>
        <Tshirt
            image="/src/assets/images/blue-t.png"
            title="A-107 Blue"/>
    </div>
    <div class="block-down">
        <Tshirt
            image="/src/assets/images/light-blue-t.png"
            title="A-118 Light Blue"/>
        <Tshirt
            image="/src/assets/images/orange-t.png"
            title="A-135 Orange"/>
        <Tshirt
            image="/src/assets/images/green-t.png"
            title="A-136 Green"/>
        <Tshirt
            image="/src/assets/images/yellow-t.png"
            title="A-125 Yellow"/>
        <Tshirt
            image="/src/assets/images/purple-t.png"
            title="A-201 Purple"/>
        <Tshirt
            image="/src/assets/images/red-t.png"
            title="A-100 Red"/>
    </div>
</template>

<script setup lang="ts">
import Tshirt from '@/components/tshirt/PaletteItem.vue'
</script>

<style scoped>
.block-top {
    display: flex;
    gap: 100px;
    justify-content: center;
}
.block-down{
    display: flex;
    gap: 100px;
    justify-content: center;
    margin-top: 80px;   
}
</style>