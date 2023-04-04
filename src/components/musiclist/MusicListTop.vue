<!--
 * @Author: RiverHell
 * @Github: https://github.com/RiverHell-AI
 * @Date: 2023-04-04 17:52:32
 * @LastEditors: RiverHell
 * @LastEditTime: 2023-04-04 19:41:01
 * @Description: Please write the description of this file.
-->

<template>
  <img :src="playlist.coverImgUrl" class="bg">
  <div class="topNav">
    <div class="topLeft" @click="$router.go(-1)">
      <i class="fa-solid fa-chevron-left"></i>
    </div>
    <div class="topCenter">
      <span>歌单</span>
    </div>
    <div class="topRight">
      <i class="fa-solid fa-magnifying-glass"></i>
      <i class="fa-solid fa-ellipsis-vertical"></i>
    </div>
  </div>

  <div class="detail">
    <img :src="playlist.coverImgUrl" class="cover"/>
    <div class="detailRight">
      <div class="detailTitle">{{ playlist.name }}</div>
      <div class="creator">
        <!-- <img :src="playlist.creator.avatarUrl" class="avatar"/> -->
        <!-- <div class="name">{{ playlist.creator.nickname }}</div> -->
        <i class="fa-solid fa-chevron-right"></i>
      </div>
      <div class="detailContent">
        <div class="content">
          {{ playlist.description }}
        </div>
        <i class="fa-solid fa-chevron-right"></i>
      </div>
    </div>
  </div>

  <div class="buttonList">
    <div class="button">
      <i class="fa-solid fa-comments"></i>
      <div class="buttonType">{{ playlist.commentCount }}</div>
    </div>
    <div class="button">
      <i class="fa-solid fa-share-nodes"></i>
      <div class="buttonType">{{ playlist.shareCount }}</div>
    </div>
    <div class="button">
      <i class="fa-solid fa-cloud-arrow-down"></i>
      <div class="buttonType">下载</div>
    </div>
    <div class="button">
      <i class="fa-solid fa-circle-check"></i>
      <div class="buttonType">多选</div>
    </div>
  </div>
</template>

<script>
export default {
  setup(props) {
    console.log(props.playlist)
  },
  props: ['playlist']
}
</script>

<style lang="less">
.bg {
  width: 100%;
  object-fit: cover;
  position: fixed;
  z-index: -1;
  filter: blur(.5rem);
}

i {
  color: white;
}

.topNav {
  width: 100%;
  height: 1.2rem;
  padding: .4rem;
  display: flex;
  align-items: center;
  color: white;
  .topLeft {
    flex: 1;
  }
  .topCenter {
    flex: 1;
    text-align: center;
    font-size: .4rem;
    font-weight: bold;
  }
  .topRight {
    flex: 1;
    text-align: end;
    i {
      width: .5rem;
      margin-left: .2rem;
    }
  }
}

.detail {
  height: 3.2rem;
  padding: .4rem;
  display: flex;
  justify-content: space-between;
  
  .cover {
    height: 100%;
    object-fit: cover;
    border-radius: .2rem;
  }
  .detailRight {
    padding-left: .4rem;
    .detailTitle {
      color: white;
      font-size: .32rem;
      font-weight: bold;
    }
    .creator {
      display: flex;
      justify-content: space-between;
      align-items: center;
      i {
        color: rgba(255, 255, 255, 0.5);
        font-size: .1rem;
        margin-left: .1rem;
        margin-right: .1rem;
      }
    }
    .detailContent {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .content {
        color: rgba(255, 255, 255, 0.5);
        font-size: .2rem;
        height: 1rem;
        overflow: hidden;
      }
      i {
        color: rgba(255, 255, 255, 0.5);
        font-size: .1rem;
        margin-left: .1rem;
        margin-right: .1rem;
      }
    }
  }

  // .creator {
  //   display: flex;
  //   justify-content: flex-start;
  //   .avatar {
  //     height: .3rem;
  //   }
  // }
  
}

.buttonList {
  display: flex;
  align-items: center;
  padding: .2rem .4rem;
  .button {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    .buttonType {
      padding-top: .1rem;
      font-size: .25rem;
      color: white;
    }
  }
}

</style>