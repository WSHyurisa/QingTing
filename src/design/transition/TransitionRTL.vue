<template>
    <Transition name="rtl">
        <slot></slot>
    </Transition>
</template>

<style scoped>
.rtl-enter-from,
.rtl-leave-to{
    translate: 50% 0;
    opacity: 0.1;
}

.rtl-enter-active{
    transition-property: translate opacity;
    transition-duration: 0.6s;
    transition-timing-function: ease-out;
}
.rtl-leave-active{
    transition-property: translate opacity;
    transition-duration: 0.6s;
    transition-timing-function: ease-out;
}

</style>