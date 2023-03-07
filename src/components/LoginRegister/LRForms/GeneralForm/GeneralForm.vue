<!-- 初始总界面 -->
<template>
  <div id="GeneralForm">
    <div class="OptionBox" @click="switchLoginMethod(1)">
        <div class="ContentBox">
            <img src="@/assets/image/SignUp/xinxi.png"/>
            <span class="method method_odd">短信登录/注册</span>
        </div>
    </div>
    <div class="OptionBox" @click="switchLoginMethod(2)">
        <div class="ContentBox">
            <img src="@/assets/image/SignUp/mima.png"/>
            <span class="method method_even">密码登录</span>
        </div>
    </div>
    <div id="switch">
        
    </div>
  </div>
</template>

<script lang='ts' setup>
    const props = defineProps({
        switchLoginMethod: {
            type: Function,
            required: true
        }
    })
</script>
<style scoped lang="scss">
    #GeneralForm{
        position: absolute;
        padding-top: 5%;
        @include SignUpFormBox;

        .OptionBox{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 80%;
            height: 50px;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s linear;
            

            &:nth-child(1){
                background-color: #238F76;
                &:hover{
                    background-color: #1E7B65;
                }
            }
            &:nth-child(2) {
                &:hover{
                    background-color: #f2f2f2;
                }
            }
            &:nth-child(3){
                background-color: #55ACEE;
                &:hover{
                    background-color: #4e9ad4;
                }
            }

            & > .ContentBox{
                
                img{
                    width: 35px;
                    vertical-align: middle;
                    margin-right: 5px;
                }

                .method{
                    font-size: 18px;
                    font-weight: bold;
                    letter-spacing: 5px;
                }
                .method_odd{
                    color: white;
                }
                .method_even{
                    color: #000;
                }
                
            }
            
        }

        .OptionBox:nth-child(2n){
            border: $border-dark;
        }
        #switch{
            width: 100%;
            height: 50px;
            
        }
    }
</style>