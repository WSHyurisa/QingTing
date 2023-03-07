<!-- 初始内容 -->
<template>
  <div id="ContentArea">

    <ArticleList 
    v-for="item in REQ_PARAMS_LIST" 
    :key="item.title" 
    :title="item.title" 
    :articleNumber="item.articleNumber" 
    :articleClass="item.articleClass"
    />
    <!-- 这里放一些展示内容 -->
  </div>
</template>

<script lang='ts' setup>
    import ArticleList from '@/components/UI/articleListUI/ArticleList.vue';
    import {REQ_PARAMS_LIST} from '@/constant/module/articleList/defaultContent'
</script>
<style scoped lang="scss">
</style>