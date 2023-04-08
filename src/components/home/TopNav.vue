<!--
 * @Author: RiverHell
 * @Github: https://github.com/RiverHell-AI
 * @Date: 2023-04-04 00:03:21
 * @LastEditors: RiverHell
 * @LastEditTime: 2023-04-04 18:09:11
 * @Description: Top navigation
-->
<template>
  <div class="topNav">
    <div class="topLeft">
      <i class="fa-solid fa-bars"></i>
    </div>
    <div class="topBar">
      <span @click="$router.push('/userinfo')">我的</span>
      <span class="active">发现</span>
      <span>云村</span>
      <span>视频</span>
    </div>
    <div class="topRight">
      <i class="fa-solid fa-magnifying-glass" @click="$router.push('/search')">
      </i>
    </div>
  </div>
</template>

<style lang="less" scoped>
.topNav {
  width: 100%;
  height: 1.2rem;
  padding: .4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .topBar {
    width: 55%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: .32rem;
    .active {
      font-weight: bold
    }
  }
}
</style>