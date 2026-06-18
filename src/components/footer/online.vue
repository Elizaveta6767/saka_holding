
<template>
  <div class="footer-socials">
    <span class="label">Напишите нам, мы онлайн:</span>
    <div class="icons-online">
      <UiIcon class="social-link"  name="vk"/>
      <UiIcon class="social-link" name="watsap"/>
      <img src="../../assets/icons/telegram.svg" alt="">
      <UiIcon class="social-link" name="inst"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import UiIcon from '../ui/UiIcon.vue';

</script>
<style scoped lang="scss">
.footer-socials {
  display: flex;
  align-items: center;
  gap: 20px;

  .label {
    font-size: 15px;
    font-weight: 600;
    color: var(--white-color);
  }

  .icons-online {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .social-link {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    color: #ffffff;
  }
}

@include tablet{
  .footer-socials {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
}
</style>