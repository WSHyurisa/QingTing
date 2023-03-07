<!-- 二级路由 -->
<template>
  <div id="SecondRouter">
    <div class="FirstTitle" @click="changeHandler">
        <div :class="titleAreaClass">
            {{ firstTitle }}
        </div>
    </div>
    <div class="SecondTitle" v-if="showExtend">
        <AsideRouterUI
        v-for="item in secondRouter"
        :key="item.url"
        :name="item.name"
        >{{ item.secondTitle }}</AsideRouterUI>
    </div>
  </div>
</template>

<script lang='ts' setup>
    import AsideRouterUI from './AsideRouterUI.vue';

    const props = defineProps({
        firstTitle: {type: String, default: '第一路由'},
        secondRouter: {
            type: Object,
            default: null
        }
    })

    const showExtend = ref(false)

    const titleAreaClass = reactive({
        'firstTitleArea-default': true,
        'firstTitleArea-checked': false
    })

    const changeHandler = () => {
        showExtend.value = !showExtend.value
        titleAreaClass['firstTitleArea-default'] 
        ? titleAreaClass['firstTitleArea-default'] = false 
        :titleAreaClass['firstTitleArea-default'] = true

        titleAreaClass['firstTitleArea-checked'] 
        ? titleAreaClass['firstTitleArea-checked'] = false 
        :titleAreaClass['firstTitleArea-checked'] = true
    }

</script>
<style scoped lang="scss">
    #SecondRouter{
        .FirstTitle{
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: relative;
            width: 100%;
            height: 50px;
            padding: 0 7%;
            user-select: none;

            .firstTitleArea-default {
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: 100%;
                height: 30px;
                font-size: $font-small-size;
                font-weight: bold;
                color: #5C6468;
                cursor: pointer;

                &:hover{
                    color: #08131A;
                }

                &::after{
                    position: absolute;
                    content: '';
                    width: 6px;
                    height: 6px;
                    border-top: 3px #CCCED0 solid;
                    border-right: 3px #CCCED0 solid;
                    transform: rotate(45deg);
                    -webkit-transform: rotate(45deg);
                    right: 20%;
                }

                &:hover::after{
                    border-top: 3px #08131A solid;
                    border-right: 3px #08131A solid;
                }
            }

            .firstTitleArea-checked {
                @extend .firstTitleArea-default;
                color: #08131A;
                &::after{
                    border-top: 3px #08131A solid;
                    border-right: 3px #08131A solid;
                    transform: rotate(135deg);
                    -webkit-transform: rotate(135deg);
                }
            }
        }
    }
</style>