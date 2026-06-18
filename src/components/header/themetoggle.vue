<template>
    <button class="theme-toggle" @click="toggleTheme">
        {{ isDark ? '☀️ Светлая' : '🌙 Тёмная' }}
    </button>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isDark = ref(false)

const toggleTheme = () => {
    isDark.value = !isDark.value
    updateTheme()
}

const updateTheme = () => {
    if (isDark.value) {
        document.documentElement.setAttribute('data-theme', 'dark')
        localStorage.setItem('theme', 'dark')
    } else {
        document.documentElement.removeAttribute('data-theme')
        localStorage.setItem('theme', 'light')
    }
}

onMounted(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') {
        isDark.value = true
        document.documentElement.setAttribute('data-theme', 'dark')
    }
})
</script>

<style scoped lang="scss">
.theme-toggle {
    background: transparent;
    border: 1px solid var(--dark-gold);
    border-radius: 30px;
    padding: 8px 16px;
    cursor: pointer;
    color: var(--text-color);
    font-family: var(--font-family);
    font-size: 14px;
    transition: all 0.3s ease;

    &:hover {
        background: var(--dark-gold);
        color: var(--text-color);
        transform: scale(1.05);
    }
}
</style>