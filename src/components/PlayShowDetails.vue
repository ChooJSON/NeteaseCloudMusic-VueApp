<!--
 * @Author: RiverHell
 * @Github: https://github.com/RiverHell-AI
 * @Date: 2023-04-07 05:00:00
 * @LastEditors: RiverHell
 * @LastEditTime: 2023-04-07 06:06:55
 * @Description: Current music details.
-->
<template>
  <img :src="currentMusic.al.picUrl" class="bgDetails">

  <div class="detailsTop">
    <div class="topLeft" @click="$router.go(-1)">
      <i class="fa-solid fa-arrow-left"></i>
    </div>
    <div class="topCenter">
      <div class="musicTitle">{{ currentMusic.name }}</div>
      <div class="author">{{ formatAuthors(currentMusic.ar) }}</div>
    </div>
    <div class="topRight">
      <i class="fa-solid fa-share-nodes"></i>
    </div>
  </div>




  <div class="detailsButtons">
    <i class="fa-regular fa-heart"></i>
    <i class="fa-solid fa-circle-down"></i>
    <i class="fa-solid fa-comments"></i>
    <i class="fa-solid fa-ellipsis-vertical"></i>
  </div>

  <div class="playButtons">
    <i class="fa-solid fa-repeat"></i>
    <i class="fa-solid fa-backward-step"></i>
    <i class="fa-solid fa-circle-play"></i>
    <i class="fa-solid fa-forward-step"></i>
    <i class="fa-solid fa-bars"></i>
  </div>

</template>

<script>
export default {
  props: ['currentMusic'],
  mounted() {
    console.log(this.currentMusic)
  },
  methods: {
    formatAuthors: function (arr) {
      let authors = []
      arr.forEach(item => {
        authors.push(item.name)
      })
      return authors.join('/')
    },
  }
}
</script>

<style lang="less">
.bgDetails {
  object-fit: cover;
  position: fixed;
  z-index: -1;
  filter: blur(.5rem) brightness(0.5);
}

/* 横屏样式 */
@media screen and (orientation: landscape) {
  .bgDetails {
    width: 100%;
    height: auto;
  }
}

/* 竖屏样式 */
@media screen and (orientation: portrait) {
  .bgDetails {
    width: auto;
    height: 100%;
  }
}


.detailsTop {
  i {
    color: rgb(255, 255, 255);
  }
  width: 100%;
  padding: .4rem;
  display: flex;
  align-items: center;
  color: rgb(255, 255, 255);
  .topLeft {
    flex: 1;
  }
  .topCenter {
    flex: 1;
    text-align: center;
    .musicTitle {
      font-size: .35rem;
      font-weight: bold;
    }
    .author {
      font-size: .2rem;
    }
  }
  .topRight {
    flex: 1;
    text-align: end;
  }
}


.detailsButtons {
  i {
    color: rgb(255, 255, 255);
  }
  width: 100%;
  padding: .4rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.playButtons {
  i {
    color: rgb(255, 255, 255);
  }
  width: 100%;
  padding: .6rem .4rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  bottom: 0;
  .fa-circle-play {
    font-size: .8rem;
  }
}
</style>