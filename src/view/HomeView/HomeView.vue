<!--  -->
<template>
    <div id="HomeView">
        <header>
            <Banner/>
            <TopRouter/>
        </header>
        <div id="main">
            <aside id="Router">
                <AsideRouter/>
            </aside>
            <div id="ContentArea">
                <RouterView></RouterView>
            </div>
            <aside id="Other">
                测试??????????????
            </aside>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import Banner from '@/components/Banner/Banner.vue'
    import TopRouter from "@/components/TopRouter/TopRouter.vue";
    import AsideRouter from '@/components/AsideRouter/AsideRouter.vue';
</script>
<style scoped lang="scss">
    #HomeView{
        min-width: $fullscreen-width-min;
        min-height: $fullscreen-height-min;

        #main{
            position: relative;
            display: flex;

            aside {
                position: relative;
            }

            #Router{
                width: 200px;
            }

            #Other{
                width: 280px;
            }
            #ContentArea {
                position: relative;
                flex: 1;
            }
        }
    }
</style>