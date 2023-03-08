<!-- 展示卡片 -->
<template>
  <div id="Card">
    <div class="Content">
        <LoadingImage
        class="Exhibit"
        :imgSrc="image"
        :title="title"
        />
        <!-- <img class="Exhibit" :src="image" :title="title"/> -->
        <div class="articleSummary" :title="title">
            {{ title }}
        </div>
        <div class="authorArea">
            <img :src="avatar"/>
            <span>{{ userName }}</span>
            <span>3日前</span>
        </div>
        <div class="articleData">
            <div class="dateArea">
                <img src="@/assets/image/UserOperate/zan.png" title="点赞"/>
                <span>{{ signNumber }}</span>
            </div>
            <div class="dateArea">
                <img src="@/assets/image/UserOperate/collect1.png" title="收藏"/>
            </div>
        </div>
    </div>
  </div>
</template>

<script lang='ts' setup>
    import LoadingImage from '@/components/LoadingImage/LoadingImage.vue';
    const props = defineProps({
        userName: {
            type: String,
            required: true
        },
        signNumber: {
            type: Number,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        avatar: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        }
    })
</script>
<style scoped lang="scss">
    #Card{
        position: relative;
        display: flex;
        justify-content: center;
        width: 23%;
        height: 250px;
        // border: $border-light;

        .Content{
            width: 100%;
            height: 100%;

            .Exhibit{
                width: 100%;
                height: 50%;
                border-radius: 10px;
                cursor: pointer;
                transition: filter 0.5s;

                &:hover{
                    filter: brightness(1.1);
                }
            }

            .articleSummary{
                margin-top: 10px;
                font-size: $font-medium-size;
                font-weight: bold;
                cursor: pointer;
            }

            .authorArea{
                margin-top: 10px;
                img{
                    width: 20px;
                    border-radius: 50%;
                    vertical-align: middle;
                }
                span{
                    font-size: 13px;
                    letter-spacing: 0.5px;
                    color: $font-dark-color;
                    margin-left: 5px;
                }
            }
            .articleData{
                display: flex;
                align-items: center;
                margin-top: 5px;
                gap: 10px;

                .dateArea{
                    img{
                        vertical-align: middle;
                        width: 18px;
                        cursor: pointer;
                    }
                    span{
                        font-size: 13px;
                        color: #c3c3c3;
                        margin-left: 3px;
                    }
                }
            }
        }
    }
</style>