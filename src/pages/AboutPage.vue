<script setup lang="ts">
import Cards from '../components/about/cards.vue';
import Choice from '../components/about/choice.vue';

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
.type{
  @include tablet{
    display: none;
  }
}
.cards{
  @include tablet{
    display: flex;
    justify-content: right;
  }
}
.head{
  padding: 0 200px; 
  line-height: 30px;
  @include tablet{
    padding: 0;
  }
}
.choice{
  padding: 15px 100px;
  @include tablet{
    padding: 0 10px;
  }
}
.many{
  display: flex;
  gap: 8px;
  flex-direction: column;
  padding: 0 100px 0 200px;
  @include tablet{
    display: none;
  }

}
.flex{
  display: flex;
  flex-direction: row;
}
</style>