<!-- 输入框样式 -->
<template>
    <div class="InputUI">
        <div class="FormItemTitle">
            <h3>{{ title }}</h3>
        </div>
        <input class="InputClass" 
        :placeholder="placeholder"
        v-model="inputValue"
        @blur="emits('handleBlur')"
        />
        <div id="getVCode" v-if="vcode">
            <span>获取验证码</span>
        </div>
        <div id="message" v-if="showMessage">
            <span>{{ message }}</span>
        </div>
    </div>
</template>

<script lang='ts' setup>
    const props = defineProps({
        title: {
            type: String,
            required: true
        },
        placeholder: {
            type: String,
            required: true
        },
        vcode: {
            type: Boolean,
            required: false,
            default: false
        },
        message: {
            type: String,
            required: false,
            default: ''
        },
        showMessage: {
            type: Boolean,
            required: false,
            default: false
        }
    })

    const emits = defineEmits(['handleBlur'])

    const inputValue = ref()

    defineExpose({
        inputValue
    })
    
</script>
<style scoped lang="scss">
    .InputUI{
        position: relative;
        display: flex;
        flex-direction: column;
        width: 80%;
        .FormItemTitle{
            font-size: 13px;
            margin-bottom: 10px;
        }

        .InputClass{
            width: 100%;
            height: 35px;
            border-radius: 5px;
            padding-left: 8px;
            outline: none;
            border: $border-light;
            font-size: 14px;

        &:focus{
            border: $border-dark;
        }

        &::placeholder{
            color: $font-light-color;
        }
        }
        #getVCode{
            position: absolute;
            display: flex;
            align-items: center;
            height: 35px;
            right: 10px;
            bottom: 0px;
            color: #02A2D6;
            font-size: 14px;
            span{
                cursor: pointer;
            }
        }

        #message{
            position: absolute;
            bottom: -20px;
            left: 8px;
            font-size: 13px;
            color: red;
        }
    }
</style>