<!--  -->
<template>
  <div id="TopRouter">
    <TopRouterUI v-for="item in TOP_ROUTER_TITLE" :key="item.name" :name="item.name">{{ item.title }}</TopRouterUI>
  </div>
</template>

<script lang='ts' setup>
    import TopRouterUI from '@/components/UI/routerUI/TopRouterUI.vue';
    import { TOP_ROUTER_TITLE } from '@/constant/module/router/router'
</script>
<style scoped lang="scss">
    #TopRouter{
        display: flex;
        align-items: end;
        position: relative;
        width: 100%;
        height: 60px;
        &::before {
            content: '';
            position: absolute;
            width: 100%;
            height: 50px;
            border-bottom: $border-light;
        }
    }
</style>