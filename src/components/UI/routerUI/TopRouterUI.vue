<!--  -->
<template>
    <RouterLink :to={name} class="item" active-class="item-active">
        <slot></slot>
    </RouterLink>
</template>
<script lang="ts" setup>
    const props = defineProps({
        name: {type: String, default: '空'}
    })
</script>
<style scoped lang="scss">
    .item{
        display: flex;
        justify-content: center;
        position: relative;
        bottom: 0px;
        width: 100px;
        height: 30px;
        font-size: $font-small-size;
        color: #5C6468;
        cursor: pointer;
        transition-property: color;
        transition-duration: 0.3s;
        text-decoration: none;

        &:hover{
            color: black;
            border-bottom: 2px solid black;
        }
    }

    .item-active{
        @extend .item;
        border-bottom: 2px solid black;
        

    }
</style>