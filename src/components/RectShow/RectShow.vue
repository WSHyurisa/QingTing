<!-- 展示区 -->
<template>
  <div id="RectShow">
    <div id="content">
        <img :src="showRectURl.image"/>
    </div>
  </div>
</template>

<script lang='ts' setup>
    import { getShowImage } from '@/request/api/other';
    const showRectURl = ref({
        image: ''
    })
    showRectURl.value = (await getShowImage()).data
</script>
<style scoped lang="scss">
    #RectShow{
        position: relative;
        width: 79%;
        height: 170px;
        padding-left: 1.5%;
        padding-right: 0.5%;



        #content{
            width: 100%;
            height: 100%;
            border-radius: 5px;
            
            img{
                width: 100%;
                height: 100%;
                border-radius: 5px;
                cursor: pointer;
            }
        }
    }
</style>