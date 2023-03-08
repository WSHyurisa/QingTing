<!-- 热点 -->
<template>
    <div id="Popular">
      <titleUI>{{ title }}</titleUI>
      <div id="ContentArea">
        <cardUI
        v-for="item in articleDataList"
        :key="item.id"
        :signNumber="item.signNumber"
        :userName="item.userName"
        :title="item.title"
        :image="item.image"
        :avatar="item.avatar"
        />
      </div>
    </div>
  </template>
  
  <script lang='ts' setup>
    import titleUI from '@/components/UI/titleUI/titleUI.vue'
    import cardUI from '@/components/UI/cardUI/cardUI.vue';
    import { abbrArticleList } from '@/request/api/article';
    import {abbrArticle} from '@/request/module/articleModule'
  
    const props = defineProps({
        title: String,
        articleNumber: Number,
        articleClass: Number
    })  
  
    const articleDataList = ref<abbrArticle[]>([])
    articleDataList.value = (await abbrArticleList({articleNumber: props.articleNumber as number, articleClass: props.articleClass as number})).data
    
  
  </script>
  <style scoped lang="scss">
      #Popular{
          width: 100%;
  
          #ContentArea{
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            align-content: start;
            gap:  4% 0;
            width: 100%;
            height: 100%;
            padding: 10px;
          }
  
      }
  </style>