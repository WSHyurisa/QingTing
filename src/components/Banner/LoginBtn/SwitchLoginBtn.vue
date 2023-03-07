<!-- 登录注册按钮 -->
<template>
  <div id="LoginBtn" @click="switchToSignUp">登录</div>
</template>

<script setup lang="ts">
    import { switchToSignUp } from '@/hooks/useSwitchRouter';
</script>

<style scoped lang="scss">
    #LoginBtn{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 80px;
        height: 30px;
        border-radius: 5px;
        color: white;
        background-color: #238F76;
        font-size: $font-small-size;
        cursor: pointer;
        transition: background-color 0.3s;
        &:hover{
            background-color: #1E7B65;
        }
    }
</style>