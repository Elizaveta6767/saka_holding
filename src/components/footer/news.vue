<script>
</script>

<template>
  <div class="footer-subscribe">
    <h4 class="title">Следите за новостями</h4>
    
    <form class="subscribe-form" @submit.prevent>
      <input type="email" placeholder="Ваш E-mail" class="subscribe-input" required />
      <button type="submit" class="subscribe-btn">Отправить</button>
    </form>

    <div class="phone-block">
      <img src="../../assets/icons/call.svg" alt="call">
      <span class="phone-link">+90 212 547 08 26</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.footer-subscribe {
  display: flex;
  flex-direction: column;

  .title {
    font-size: 16px;
    font-weight: 600;
    color: #ffffff;
    margin: 0 0 20px 0;
  }

  .subscribe-form {
    display: flex;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 30px;
    padding: 4px;
    max-width: 420px;
    width: 100%;
    box-sizing: border-box;
    border: 1px  rgba(255, 255, 255, 0.08);
  
  }

  .subscribe-input {
    flex-grow: 1;
    background: none;
    border: none;
    outline: none;
    padding: 13px 25px;
    color: #ffffff;
    font-size: 14px;
  }

  .subscribe-btn {
    background-color: var(--gold-color);
    color: #1e2633;
    border: none;
    outline: none;
    padding: 17px 30px;
    border-radius: 25px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    
  }

  .phone-block {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 35px;
    align-self: center; 
  }

  .phone-link {
    font-size: 18px;
    font-weight: 700;
    color: #ffffff;
    text-decoration: none;
    
  }
}

@include tablet{
  .footer-subscribe {
    .phone-block {
      align-self: flex-start; 
      margin-top: 25px;
    }
  }
}
</style>