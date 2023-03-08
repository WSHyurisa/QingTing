<!-- 图片加载动画 -->
<template>
  <div :class="[loading ? 'loading' : '' ]">
    <img
    class="img"
    :src="imgSrc"
    @load="imgLoad"
    />
  </div>

</template>

<script lang='ts' setup>
    const props = defineProps({
        imgSrc: {
            type: String,
            required: true,
            default: ''
        },
        imgAlt: {
            type: String,
            required: true,
            default: '图片加载出错'
        }
    })

    const loading = ref(true)
    watch(props,(c, v) => {
        loading.value = true
    })

    const imgLoad = () => {
        loading.value = false
    }


</script>
<style scoped lang="scss">
    .img{
        width: 100%;
        height: 100%;
        border-radius: 10px;
    }
    .loading{
        position: relative;
        background-color: rgb(225, 225, 225);
        overflow: hidden;

        &::after{
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            background-image: linear-gradient(135deg, transparent 40%, #ffffff58 50%, transparent 55%);
            background-size: 100% 100%;
            animation: au 1.5s 1s linear infinite;
        }
    }

    @keyframes au {
        0% {
            left: -100%;
        }
        100% {
            left: 200%;
        }
    }
</style>