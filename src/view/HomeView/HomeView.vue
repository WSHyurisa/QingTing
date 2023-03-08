<!--  -->
<template>
    <div id="HomeView">
        <header>
            <Banner/>
            <TopRouter/>
        </header>
        <div id="main">
            <aside>
                <AsideRouter/>
            </aside>
            <Suspense>
                <div id="ContentArea">
                    <RouterView></RouterView>
                </div>
            </Suspense>

        </div>
    </div>
</template>

<script lang="ts" setup>
    import Banner from '@/components/Banner/Banner.vue'
    import TopRouter from "@/components/TopRouter/TopRouter.vue";
    import AsideRouter from '@/components/AsideRouter/AsideRouter.vue';
    import Skeleton from '@/components/Skeleton/Skeleton.vue';
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
                width: 200px;
            }

            #ContentArea {
                position: relative;
                flex: 1;
            }
        }
    }
</style>