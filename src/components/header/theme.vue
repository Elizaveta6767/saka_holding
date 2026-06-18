<template>
    <header class="header">
        <div class="header-top">
            <Logo />
            <ThemeToggle />  <!-- ← добавь сюда -->
        </div>
        <!-- остальное -->
    </header>
</template>

<script setup>
import ThemeToggle from '@/components/header/ThemeToggle.vue'
</script>