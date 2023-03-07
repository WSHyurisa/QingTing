<!-- Banner  -->
<template>
  <div id="Banner">
    <div class="banner_left">
      <Logo/>
    </div>
    <div class="banner_right">
      <Search/>
      <WriteBtn/>
      <LoginBtn/>
    </div>
  </div>
</template>

<script lang='ts' setup>
    import Logo from './Logo/Logo.vue'
    import Search from './Search/Search.vue'
    import WriteBtn from './WriteBtn/WriteBtn.vue';
    import LoginBtn from './LoginBtn/SwitchLoginBtn.vue'
</script>
<style scoped lang="scss">
  #Banner{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding-top: 5px;
    padding-left: 30px;
    .banner_right{
      display: flex;
      margin-right: 15px;
    }
  }
</style>