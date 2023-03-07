<template>
    <Transition name="ltr">
        <slot></slot>
    </Transition>
</template>

<style scoped>
.ltr-leave-to,
.ltr-enter-from{
    translate: -50% 0;
    opacity: 0.1;
}



.ltr-enter-active{
    transition-property: translate opacity;
    transition-duration: 0.6s;
    transition-timing-function: ease-out;
}
.ltr-leave-active{
    transition-property: translate opacity;
    transition-duration: 0.6s;
    transition-timing-function: ease-out;
}

</style>