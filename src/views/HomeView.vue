<!--
 * @Author: RiverHell
 * @Github: https://github.com/RiverHell-AI
 * @Date: 2023-04-03 22:25:27
 * @LastEditors: RiverHell
 * @LastEditTime: 2023-04-03 23:46:07
 * @Description: Please write the description of this file.
-->
<template>
  <div class="home">
    <TopNav/>
    <Swipe/>
    <Channels/>
    <Discover/>
  </div>
</template>

<script>
// @ is an alias to /src

import TopNav from "@/components/home/TopNav.vue"
import Swipe from "@/components/home/Swipe.vue"
import Channels from "@/components/home/Channels.vue"
import Discover from "@/components/home/Discover.vue"

export default {
  name: 'HomeView',
  components: {
    TopNav,
    Swipe,
    Channels,
    Discover
  }
}
</script>
