<!-- 初始内容 -->
<template>
  <Suspense>
    <div id="ContentArea">
      <ArticleList 
      title="今日热门" 
      :articleNumber="8" 
      :articleClass="0"
      />
      <RectShow/>
      <ArticleList 
      v-for="item in REQ_PARAMS_LIST" 
      :key="item.title" 
      :title="item.title" 
      :articleNumber="item.articleNumber" 
      :articleClass="item.articleClass"
      />
    </div>
    <template #fallback>
      <Skeleton/>
    </template>
  </Suspense>

</template>

<script lang='ts' setup>
    import ArticleList from '@/components/UI/articleListUI/ArticleList.vue';
    import {REQ_PARAMS_LIST} from '@/constant/module/articleList/defaultContent'
    import Skeleton from '@/components/Skeleton/Skeleton.vue';
    import RectShow from '@/components/RectShow/RectShow.vue';
</script>
<style scoped lang="scss">
</style>