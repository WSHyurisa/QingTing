import router from "@/routes"

export const switchToSignUp = () => {
    router.push({path:'/LoginRegister', name: 'LoginRegister'})
}