<script setup lang="ts">
import { ref } from 'vue'
const price = ref(50000)
</script>
<template>
  <div class="money">
    <div class="min">0₽</div>
    <input type="range" v-model="price" min="0" max="100000">
    <div>{{ price }}₽</div>
  </div>
  <aside class="catalog-sidebar">
    <div class="filter-box accordion">
      <span class="filter-title">Тип полотна</span>
      <span class="arrow-icon">❯</span>
    </div>

    <!-- Качество -->
    <div class="filter-box expanded">
      <div class="filter-header">
        <span class="filter-title">Качество</span>
        <span class="arrow-icon down">❯</span>
      </div>
      <ul class="filter-list">
        <li><span>Кулинарная гладь</span><span class="radio-dot"></span></li>
        <li><span>Рибана</span><span class="radio-dot"></span></li>
        <li class="active"><span>Пике</span><span class="radio-dot active"></span></li>
        <li><span>Интерлок</span><span class="radio-dot"></span></li>
        <li><span>Футер 2-х нитка</span><span class="radio-dot"></span></li>
        <li><span>Футер 3-х нитка</span><span class="radio-dot"></span></li>
        <li><span>Кашкорсе к 2х нитке</span><span class="radio-dot"></span></li>
        <li><span>Кашкорсе к 3х нитке</span><span class="radio-dot"></span></li>
        <li><span>Double Face</span><span class="radio-dot"></span></li>
      </ul>
    </div>

    <!-- Цвет (Кружочки) -->
    <div class="filter-box expanded">
      <div class="filter-header">
        <span class="filter-title">Цвет</span>
        <span class="arrow-icon down">❯</span>
      </div>
      <div class="color-circles-grid">
        <span class="color-dot yellow"></span>
        <span class="color-dot teal"></span>
        <span class="color-dot navy"></span>
        <span class="color-dot blue"></span>
        <span class="color-dot red"></span>
        <span class="color-dot purple"></span>
        <span class="color-dot orange active"></span>
        <span class="color-dot gray"></span>
        <span class="color-dot light-purple"></span>
        <span class="color-dot orange-light"></span>
        <span class="color-dot gold"></span>
        <span class="color-dot yellow-bright"></span>
        <span class="color-dot emerald"></span>
        <span class="color-dot white"></span>
      </div>
    </div>

    <div class="filter-box expanded">
      <div class="filter-header">
        <span class="filter-title">Цвет</span>
        <span class="arrow-icon down">❯</span>
      </div>
      <ul class="checkbox-list">
        <li><span class="checkbox-dot yellow"></span> Желтый</li>
        <li><span class="checkbox-dot green"></span> Темно-зеленый</li>
        <li><span class="checkbox-dot navy"></span> Синий</li>
        <li><span class="checkbox-dot blue"></span> Темно-голубой</li>
        <li><span class="checkbox-dot red"></span> Красно-пурпурно-бордовый</li>
        <li><span class="checkbox-dot pink"></span> Нежненький</li>
      </ul>
    </div>
  </aside>
</template>

<style lang="scss">
.money {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--header-top-color);
  background-color: var(--grey-color);
  width: 210px;
  height: 50px;
  padding: 20px;
  border-radius: 16px;
  margin: 10px 0 10px 0;
}

input {
  width: 223px;
  height: 3px;
  -webkit-appearance: none;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 3px;
}

input::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--dark-gold);
  cursor: pointer;
}

.catalog-sidebar {
  width: 250px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  font-family: system-ui, -apple-system, sans-serif;
}

.filter-box {
  background-color: #f9f9f9;
  border-radius: 16px;
  padding: 16px;
  box-sizing: border-box;
}

.slider-header {
  text-align: center;
  font-size: 13px;
  color: #c4a482;
  font-weight: 600;
  margin-bottom: 10px;
}

.slider-track-wrapper {
  padding: 8px 0;
}

.slider-track {
  height: 2px;
  background-color: #e0e0e0;
  position: relative;
}

.slider-progress {
  position: absolute;
  left: 0;
  width: 35%;
  height: 100%;
  background-color: #c4a482;
}

.slider-handle {
  position: absolute;
  left: 35%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 14px;
  height: 14px;
  background-color: #c4a482;
  border-radius: 50%;
}

.slider-labels {
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  color: #999;
  margin-top: 8px;
}

.accordion {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}

.filter-title {
  font-size: 14px;
  font-weight: 600;
  color: #333;
}

.arrow-icon {
  font-size: 10px;
  color: #666;
  transition: transform 0.2s;
}

.arrow-icon.down {
  transform: rotate(90deg);
}

.filter-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;
}

.filter-list,
.checkbox-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.filter-list li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  color: #666;
}

.filter-list li.active {
  color: #c4a482;
  font-weight: 500;
}

.radio-dot {
  width: 12px;
  height: 12px;
  border: 1px solid #ddd;
  border-radius: 50%;
  background-color: #fff;
}

.radio-dot.active {
  background-color: #c4a482;
  border-color: #c4a482;
}

.color-circles-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 8px;
}

.color-dot {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  cursor: pointer;
  border: 1px solid transparent;
}

.color-dot.active {
  outline: 2px solid #333;
  outline-offset: 1px;
}

.yellow {
  background-color: #ffd859;
}

.teal {
  background-color: #1abc9c;
}

.navy {
  background-color: #2c3e50;
}

.blue {
  background-color: #3498db;
}

.red {
  background-color: #e74c3c;
}

.purple {
  background-color: #9b59b6;
}

.orange {
  background-color: #e67e22;
}

.gray {
  background-color: #bdc3c7;
}

.light-purple {
  background-color: #d6a2e8;
}

.orange-light {
  background-color: #ff9f43;
}

.gold {
  background-color: #ccae85;
}

.yellow-bright {
  background-color: #fff200;
}

.emerald {
  background-color: #2ecc71;
}

.white {
  background-color: #fff;
  border: 1px solid #ddd;
}

.checkbox-list li {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
  color: #555;
}

.checkbox-dot {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  display: inline-block;
}

.checkbox-dot.green {
  background-color: #1b4d3e;
}

.checkbox-dot.pink {
  background-color: #ffb6c1;
}
</style>