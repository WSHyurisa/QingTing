<!-- 侧边栏路由 -->
<template>
    <div class="AsideRouterUI">
        <RouterLink :to={name} class="item" active-class="item-active">
            <slot></slot>
        </RouterLink>
    </div>

</template>
<script lang="ts" setup>
    const props = defineProps({
        name: {type: String, default: '路由错误'}
    })
</script>
<style scoped lang="scss">
    .AsideRouterUI{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 50px;
        
        .item{
            display: flex;
            align-items: center;
            width: 80%;
            height: 35px;
            border-radius: 5px;
            padding: 0 5%;
            text-decoration: none;
            font-size: $font-small-size;
            color: $font-dark-color;
            &:hover{
                background-color: #F5F8FA;
            }
        }
        
        .item-active{
            @extend .item;
            color: #08131A;
        }
    }
</style>