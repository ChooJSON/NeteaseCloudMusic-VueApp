<!--
 * @Author: RiverHell
 * @Github: https://github.com/RiverHell-AI
 * @Date: 2023-04-04 01:58:08
 * @LastEditors: RiverHell
 * @LastEditTime: 2023-04-04 02:32:48
 * @Description: Please write the description of this file.
-->
<template>
  <div class="channelList">
    <div class="channel">
      <div>
        <i class="fa-solid fa-calendar-days"></i>
      </div>
      <span>每日推荐</span>
    </div>
    <div class="channel">
      <div>
        <i class="fa-solid fa-radio"></i>
      </div>
      <span>私人FM</span>
    </div>
    <div class="channel">
      <div>
        <i class="fa-solid fa-music"></i>
      </div>
      <span>歌单</span>
    </div>
    <div class="channel">
      <div>
        <i class="fa-solid fa-ranking-star"></i>
      </div>
      <span>排行榜</span>
    </div>
  </div>
</template>

<style lang="less">
  .channelList {
    padding: .3rem .6rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .channel {
      width: 25%;
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: .28rem;
      i {
        padding-bottom: .2rem;
      }
    }
  }

</style>