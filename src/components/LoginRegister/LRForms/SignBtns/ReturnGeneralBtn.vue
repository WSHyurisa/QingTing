<!-- 返回主界面 -->
<template>
  <div id="ReturnGeneral">
    <span>返回</span>
    <img src="@/assets/image/SignUp/return.png">
  </div>
</template>

<script lang='ts' setup>
</script>
<style scoped lang="scss">
    #ReturnGeneral{
        display: flex;
        font-size: 13px;
        color: $font-light-color;
        cursor: pointer;
        user-select: none;
        img{
            width: 20px;
            vertical-align: middle;
        }
    }
</style>