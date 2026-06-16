<template>
  <article class="card">
    <div class="img-wrapper">
      <img :src="image" :alt="title" />
      <div class="overlay"></div>
      
      <RouterLink  class="arrow-btn">
        <img src="/src/assets/icons/strela.svg" alt="" >
      </RouterLink>
      
      <h3 class="title">{{ title }}</h3>
    </div>
    
    <div class="body">
      <p class="desc">{{ description }}</p>
      <time class="date">{{ date }}</time>
    </div>
  </article>
</template>

<script setup>
defineProps({
  image: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: String, required: true },
  link: { type: String, default: '#' }
})
</script>

<style scoped>
.card {
  background: var(--header-top-color);
  border-radius: 18px;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.img-wrapper{ 
    position: relative; 
    height: 220px; 
}
.img-wrapper img{ 
    width: 100%; 
    height: 100%; 
}
.overlay{ 
    position: absolute; 
    background: linear-gradient(0deg, #242f3d 0%, rgba(36,47,61,0.4) 60%, transparent 100%);
}
.arrow-btn{
  position: absolute; 
  top: 15px; 
  right: 15px; 
  width: 40px; 
  height: 40px;
  background: var(--gold-color); 
  border-radius: 50%; 
  display: flex; 
  align-items: center;
  justify-content: center; 
  color: var(--header-top-color); 
}
.arrow-btn img{ 
    width: 24px; 
    height: 24px; 
}
.title{
  position: absolute; 
  bottom: 15px; 
  left: 20px; 
  right: 20px; 
  margin: 0;
  font-family: sans-serif; 
  font-size: 18px; 
  font-weight: 700; 
  line-height: 1.3; 
  color: #ffffff;
}
.body{ 
    padding: 24px 20px; 
    display: flex; 
    flex-direction: column; 
    flex-grow: 1; 
    justify-content: space-between; 
}
.desc{ 
    margin: 0 0 20px 0; 
    font-family: var(--font-family); 
    font-size: 16px; 
    color: #a0aec0; 
}
.date{ 
    font-family: sans-serif; 
    font-size: 13px; 
    font-weight: 600; 
    color: #718096; 
}
</style>