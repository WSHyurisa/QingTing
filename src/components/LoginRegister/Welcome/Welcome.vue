<!-- 登录界面的欢迎 -->
<template>
  <div id="welcome">
    <h1>欢迎来到QingTing!</h1>
    <p>
        对于创作者、支持者和所有热爱创造的人来说,Qing就像一座城市。
    </p>
    <p>
        您可以尽情寻找自己喜欢的创作者和内容，创作自己想创作的内容。
    </p>
    <p>
        让我们一起拓展创作圈子。
    </p>
  </div>
</template>

<script lang='ts' setup>
</script>
<style scoped lang="scss">
    @import url('https://fonts.googleapis.com/css?family=Praise:400');
    #welcome{
        & > h1{
            font-family: 'Praise', cursive;
            font-weight: 400;
            line-height: 1.5;
        }

        & > p{
            line-height: 3.0;
            letter-spacing: 4px;
            color: $font-dark-color;
        }
    }
</style>