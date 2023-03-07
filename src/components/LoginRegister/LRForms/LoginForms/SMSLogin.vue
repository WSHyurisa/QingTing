<!-- 短信登录 -->
<template>
  <div id="SMSLogin">
    <InputUI
    title="输入手机号"
    placeholder="手机号码"
    :message="phoneVerification.message"
    :showMessage="phoneVerification.showMessage"
    ref="phoneInput"
    @handleBlur="checkPhone"
    />
    <InputUI
    title="验证码"
    placeholder="验证码"
    :vcode="true"
    :message="codeVerification.message"
    :showMessage="codeVerification.showMessage"
    @handleBlur="checkCode"
    ref="codeInput"
    />
    <LoginBtn/>
    <div id="Return">
      <ReturnGeneralBtn  @click="returnGeneral()"/>
    </div>
  </div>
</template>

<script lang='ts' setup>
  import LoginBtn from '../SignBtns/LoginBtn.vue';
  import ReturnGeneralBtn from '../SignBtns/ReturnGeneralBtn.vue';
  import InputUI from '@/components/UI/InputUI/InputUI.vue';
  import { verifyPhone, verifyCode } from '@/constant/Reg';

  const phoneInput:Ref<Nullable> = ref(null)
  const phoneVerification = reactive({
    message: '',
    showMessage: false
  })

  const codeInput:Ref<Nullable> = ref(null)
  const codeVerification = reactive({
    message: '',
    showMessage: false
  })

  const checkPhone = () => {
    const phoneValue = phoneInput.value.inputValue
    if(!phoneValue) {
      phoneVerification.message = '请输入手机号'
      phoneVerification.showMessage = true
      return
    }
    if(!verifyPhone(phoneValue)) {
      phoneVerification.message = '手机号格式不正确'
      phoneVerification.showMessage = true
      return
    }
    phoneVerification.showMessage = false
  }

  const checkCode = () => {
    const codeValue = codeInput.value.inputValue
    if(!codeValue) {
      codeVerification.message = '请输入验证码'
      codeVerification.showMessage = true
      return
    }
    if(!verifyCode(codeValue)) {
      codeVerification.message = '验证码格式不正确'
      codeVerification.showMessage = true
      return
    }
    codeVerification.showMessage = false
  }


  const props = defineProps({
    returnGeneral: {
      type: Function,
      required: true
    }
  })
</script>
<style scoped lang="scss">
  #SMSLogin{
    position: absolute;
    @include SignUpFormBox;

    #Return{
      position: absolute;
      right: 10%;
      top: 5%;
    }
  }
</style>