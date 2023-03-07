<!-- 登录选项 -->
<template>
  <div id="SignForm">
    <h3>QingTing登录注册</h3>
    <div id="ShowBox">
        <TransitionRTL>
            <GeneralForm 
            :switchLoginMethod="switchLoginMethod"
            v-if="showWhich === 0"
            />
        </TransitionRTL>
        <TransitionLTR>
            <SMSLogin  
            v-if="showWhich === 1"
            :returnGeneral="switchGeneralForm"
            />
        </TransitionLTR>
        <TransitionLTR>
            <PWLogin  
            v-if="showWhich === 2"
            :returnGeneral="switchGeneralForm"
            />
        </TransitionLTR>
    </div>
  </div>
</template>

<script lang='ts' setup>
    import GeneralForm from './GeneralForm/GeneralForm.vue'
    import SMSLogin from './LoginForms/SMSLogin.vue';
    import PWLogin from './LoginForms/PWLogin.vue';
    import TransitionLTR from '@/design/transition/TransitionLTR.vue';
    import TransitionRTL from '@/design/transition/TransitionRTL.vue';

    const showWhich = ref(0)
    const switchLoginMethod = (switchValue: number) => {
        showWhich.value = switchValue
    }
    const switchGeneralForm = () => {
        showWhich.value = 0
    }
</script>
<style scoped lang="scss">
    #SignForm{
        width: 450px;
        height: 450px;
        & > h3{
            font-family: 'Praise', cursive;
            font-weight: normal;
            line-height: 1.5;
            font-size: 20px;
            margin-left: 45px;
        }
        #ShowBox{
            position: relative;
            width: 450px;
            height: 450px;
            overflow: hidden;
        }
    }
</style>