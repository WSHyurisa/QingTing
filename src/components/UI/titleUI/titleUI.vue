<!-- titleUI -->
<template>
  <div id="titleUI">
    <span>
        <slot></slot>
    </span>
  </div>
</template>

<script lang='ts' setup>
</script>
<style scoped lang="scss">
    #titleUI{
        position: relative;
        width: 100%;
        padding: 20px;
        
        span{
          font-size: 18px;
          font-weight: 600;
          letter-spacing: 1px;
        }
        
    }
</style>