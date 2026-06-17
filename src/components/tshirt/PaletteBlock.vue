<template>
    <div class="palette-container">
        <!-- Объединили в одну сетку -->
        <div class="palette-grid">
            <Tshirt image="/src/assets/images/dark-grey-t.png" title="A-104 Dark Grey"/>
            <Tshirt image="/src/assets/images/grey-t.png" title="A-101 Grey"/>
            <Tshirt image="/src/assets/images/white-t.png" title="A-115 White"/>
            <Tshirt image="/src/assets/images/black-t.png" title="A-123 Black"/>
            <Tshirt image="/src/assets/images/dark-blue-t.png" title="A-106 Dark Blue"/>
            <Tshirt image="/src/assets/images/blue-t.png" title="A-107 Blue"/>
            <Tshirt image="/src/assets/images/light-blue-t.png" title="A-118 Light Blue"/>
            <Tshirt image="/src/assets/images/orange-t.png" title="A-135 Orange"/>
            <Tshirt image="/src/assets/images/green-t.png" title="A-136 Green"/>
            <Tshirt image="/src/assets/images/yellow-t.png" title="A-125 Yellow"/>
            <Tshirt image="/src/assets/images/purple-t.png" title="A-201 Purple"/>
            <Tshirt image="/src/assets/images/red-t.png" title="A-100 Red"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import Tshirt from '@/components/tshirt/PaletteItem.vue'
</script>

<style lang="scss" scoped>
.palette-container {
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 20px;
    box-sizing: border-box;
}

.palette-grid {
    display: grid;
    grid-template-columns: repeat(6, auto); 
    gap: 80px 100px; 
    justify-content: center;
}

@include tablet {
    .palette-grid {
        grid-template-columns: repeat(3, auto); 
        gap: 50px 40px; 
    }
}

@include mobile {
    .palette-grid {
        grid-template-columns: repeat(2, auto); 
        gap: 40px 20px; 
    }
}
</style>
