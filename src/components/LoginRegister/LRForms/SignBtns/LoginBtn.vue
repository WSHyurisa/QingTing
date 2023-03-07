<!-- 登录按钮 -->
<template>
  <div id="LoginBtn">
    <span>登录</span>
  </div>
</template>

<script lang='ts' setup>
</script>
<style scoped lang="scss">
    #LoginBtn{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 80%;
        height: 35px;
        border-radius: 5px;
        background-color: #238F76;
        color: #fff;
        transition: all 0.3s;
        cursor: pointer;
        font-weight: bold;
        

        &:hover{
            background-color: #1E7B65;
        }
    }
</style>