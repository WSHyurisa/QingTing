<!--  -->
<template>
  <div id="Search">
    <input v-model="searchContent" type="text" placeholder="按关键字或作者姓名搜索"/>
    <img src="@/assets/image/Search/search.png"/>
  </div>
</template>

<script setup lang='ts'>
  const searchContent = ref('')
</script>
<style scoped lang="scss">
  $input-width: 250px;
  #Search {
    display: flex;
    position: relative;
    align-items: center;
    width: $input-width;
    & > input {
      width: $input-width;
      height: 35px;
      font-size: 14px;
      font-weight: lighter;
      border: $border-light;
      border-radius: 5px;
      padding-right: 30px;
      padding-left: 6px;
      transition: border 0.3s;
      &:focus{
        font-weight: lighter;
        outline: none;
        border: $border-dark;
        border-radius: 5px;
      }
    }

    & > img {
      position: absolute;
      right: 5px;
      width: 22px;
      height: 22px;
      transition: all 0.3s;
      cursor: pointer;
      &:hover{
        filter: brightness(0.5);
      }
    }
  }
</style>