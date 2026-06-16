<script>
</script>

<template>
    <div class="news">
        <h4>Следите за новостями</h4>
        <form class="news_form" @submit.prevent="handleSubscribe">
      <div class="group">
        <input 
          type="email" 
          v-model="email"
          placeholder="Ваш E-mail"
          required
          class="email"/>
        <button type="submit" class="btn" :disabled="isSubmitting">
          {{ isSubmitting ? 'Отправка...' : 'Отправить' }}
        </button>
      </div>
    </form>
    <div class="phone">
        <img src="../../assets/icons/call.svg" alt="call">
        <span>+90 212 547 08 26</span>
    </div>
    </div>  
</template>
<style lang="scss">
.news{
    cursor: pointer;
    color: var(--text-color);
}
.news_form {
  margin-bottom: 20px;
}
.group {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
}
.email{
  flex: 1;
  min-width: 200px;
  padding: 12px 16px;
  font-size: 16px;
  border: none;
  border-radius: 100px;
  outline: none;
  transition: box-shadow 0.3s ease;
}
.btn{
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  color: var(--header-top-color);
  background: var(--gold-color);
  border: none;
  border-radius: 100px;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
</style>