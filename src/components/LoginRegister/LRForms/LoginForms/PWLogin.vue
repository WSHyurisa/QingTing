<!-- 密码登录 -->
<template>
  <div id="PWLogin">
    <InputUI
    title="输入手机号"
    placeholder="手机号码"
    :message="phoneVerification.message"
    :showMessage="phoneVerification.showMessage"
    ref="phoneInput"
    @handleBlur="checkPhone"
    />
    <InputUI
    title="请输入密码"
    placeholder="密码"
    :message="passwordVerification.message"
    :showMessage="passwordVerification.showMessage"
    ref="passwordInput"
    @handleBlur="checkPW"
    />
    <LoginBtn/>
    <div id="Return">
      <ReturnGeneralBtn  @click="returnGeneral()"/>
    </div>
  </div>
</template>

<script lang='ts' setup>
    import InputUI from '@/components/UI/InputUI/InputUI.vue';
    import { verifyPhone, verifyPW } from '@/constant/Reg';

    const phoneInput:Ref<Nullable> = ref(null)
    const phoneVerification = reactive({
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

    const passwordInput: Ref<Nullable> = ref(null)
    const passwordVerification = reactive({
      message: '',
      showMessage: false
    })

    const checkPW = () => {
      const passwordValue = passwordInput.value.inputValue
      if(!passwordValue) {
        passwordVerification.message = '请输入密码'
        passwordVerification.showMessage = true
        return
      }
      if(!verifyPW(passwordValue)) {
        passwordVerification.message = '手机号格式不正确'
        passwordVerification.showMessage = true
        return
      }
      passwordVerification.showMessage = false
    }


    const props = defineProps({
        returnGeneral: {
        type: Function,
        required: true
        }
    })
</script>
<style scoped lang="scss">
  #PWLogin{
    position: absolute;
    @include SignUpFormBox;

    #Return{
      position: absolute;
      right: 10%;
      top: 5%;
    }
  }
</style>