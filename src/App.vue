<!--
 * @Author: RiverHell
 * @Github: https://github.com/RiverHell-AI
 * @Date: 2023-04-03 22:25:27
 * @LastEditors: RiverHell
 * @LastEditTime: 2023-04-04 16:29:11
 * @Description: Main vue file.
-->
<template>
  <router-view/>
  <!-- In login page, this component won't be shown. -->
  <FooterPlay v-show="$store.state.isFooterPlayShow"/>
</template>

<script>
import FooterPlay from "@/components/FooterPlay.vue";
export default {
  components: {
    FooterPlay,
  }
}
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Noto Sans SC', sans-serif;
}

a {
  color: black;
}

// set icon size
i {
  font-size: .5rem;
}

</style>
