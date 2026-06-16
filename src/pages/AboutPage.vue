<script setup lang="ts">
import Cards from '../components/about/cards.vue';
import Choice from '../components/about/choice.vue';
import Filter from '../components/about/filter.vue';
import Head from '../components/about/head.vue';
import Type from '../components/about/type.vue';
import Recently from '../components/recently-viewed/Recently.vue';
</script>

<template>
  <div class="head">
    <Head/>
  </div>
  <div class="choice">
    <Choice/>
  </div>
  <div class="flex">
  <div class="many">
  <div class="filter">
    <Filter/>
  </div>
  <div class="type">
    <Type/>
  </div>
</div>
  <div class="cards">
    <Cards/>
  </div>
  </div>
  <div class="recency">
    <Recently/>
  </div>
</template>
<style lang="scss">
.head{
  padding: 0 200px; 
  line-height: 30px;
}
.choice{
  padding: 15px 100px;
}
.many{
  display: flex;
  gap: 8px;
  flex-direction: column;
  padding: 0 100px 0 200px;

}
.flex{
  display: flex;
  flex-direction: row;
}
</style>