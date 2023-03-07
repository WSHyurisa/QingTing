// 手机号正则
const phoneReg = /^((\+|00)86)?1\d{10}$/
const verifyPhone = (phone: string): number => {
    return phoneReg.test(phone) ? 1 : 0
}

// 验证码
const codeReg = /^\d{4}$/
const verifyCode = (code: string): number => {
    return codeReg.test(code) ? 1 : 0
}

// 密码
const strongPWReg = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/
const normalPWReg = /^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*]+$)[a-zA-Z\d!@#$%^&*]+$/
const weakPWReg = /^(?:\d+|[a-zA-Z]+|[!@#$%^&*]+)$/

const verifyPW = (pw: string): number => {
    return weakPWReg.test(pw) ? 1 : 0
}



export {
    verifyPhone,
    verifyCode,
    verifyPW
}

