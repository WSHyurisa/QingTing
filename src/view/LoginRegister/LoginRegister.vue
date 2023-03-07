<!-- 登录总页面 -->
<template>
  <div id="LoginRegister">
    <div id="MainArea">
      <TransitionLTR appear>
          <Welcome/>
      </TransitionLTR>
      <TransitionRTL appear>
          <HomeForm/>
      </TransitionRTL>
    </div>
  </div>
</template>
<script setup lang="ts">
  import Welcome from '@/components/LoginRegister/Welcome/Welcome.vue';
  import HomeForm from '@/components/LoginRegister/LRForms/HomeForm.vue'
  import TransitionRTL from '@/design/transition/TransitionRTL.vue';
  import TransitionLTR from '@/design/transition/TransitionLTR.vue'
</script>
<style scoped lang="scss">
  #LoginRegister{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-width: $fullscreen-width-min;
    height: 100vh;

    #MainArea{
      display: flex;
      width: 1000px;
      height: 450px;
      gap: 50px;
      #Welcome {
        flex: 1;
      }

    }
  }
</style>