<!-- 侧边路由 -->
<template>
  <div id="AsideRouter">
    <div id="RouterArea">
      <AsideRouterTree
      v-for="item in ASIDE_ROUTER_TITLE" 
      :key="item.firstTitle" 
      :firstTitle="item.firstTitle"
      :secondRouter="item.secondRouter"
      ></AsideRouterTree>
    </div>
  </div>
</template>

<script lang='ts' setup>
  import AsideRouterTree from '../UI/routerUI/AsideRouterTree.vue';
  import {ASIDE_ROUTER_TITLE} from '@/constant/module/router/router'
</script>
<style scoped lang="scss">
    #AsideRouter{
        width: 100%;
        height: 100%;
        border-right: $border-light;
    }
    #RouterArea{
      position: sticky;
      top: 0;
      height: 100vh;
      overflow-y: auto;
    }
</style>