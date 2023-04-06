<!--
 * @Author: RiverHell
 * @Github: https://github.com/RiverHell-AI
 * @Date: 2023-04-04 17:52:32
 * @LastEditors: RiverHell
 * @LastEditTime: 2023-04-06 21:35:07
 * @Description: Top part of music list details page.
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
    <div class="detailCover">
      <img :src="playlist.coverImgUrl" class="cover"/>
      <span class="playCount">
        {{ changeCount(playlist.playCount) }}
        <i class="fa-solid fa-headphones"></i>
      </span>
    </div>
    
    <div class="detailRight">
      <div class="detailTitle">{{ playlist.name }}</div>
      <div class="creator">
        <img :src="playlist.creator.avatarUrl" class="avatar"/>
        <div class="name">{{ playlist.creator.nickname }}</div>
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
      <div class="buttonType">{{ changeCount(playlist.commentCount) }}</div>
    </div>
    <div class="button">
      <i class="fa-solid fa-share-nodes"></i>
      <div class="buttonType">{{ changeCount(playlist.shareCount) }}</div>
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
    if (props.playlist.creator = "") {
      props.playlist.creator = JSON.parse(sessionStorage.getItem().playlist).creator
    }
    function changeCount(num) {
      if (num >= 100000000) {
        return (num / 100000000).toFixed(1) + '亿'
      } else if (num >= 10000) {
        return (num / 10000).toFixed(1) + '万'
      }
      return num
    }
    return { changeCount }
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
  filter: blur(.5rem) brightness(0.8);
}

.topNav {
  i {
    color: white;
  }
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
  i {
    color: white;
  }
  height: 3.2rem;
  padding: .4rem;
  display: flex;
  justify-content: space-between;

  .detailCover {
    position: relative;
    .cover {
      height: 100%;
      object-fit: cover;
      border-radius: .2rem;
    }
    .playCount {
      i {
        font-size: .08rem;
        margin-left: .05rem;
        text-shadow: black .01rem .01rem .05rem;
      }
      font-size: .08rem;
      text-shadow: black .01rem .01rem .05rem;
      align-items: center;
      color: white;
      position: absolute;
      top: .05rem;
      right: .16rem;
    }
  }
  
  .detailRight {
    padding-left: .4rem;
    display: flex;
    flex-direction: column;
    .detailTitle {
      color: white;
      font-size: .3rem;
      font-weight: bold;
      flex: none;
      // When number of lines > -webkit-line-clamp, the subsequent content is hidden and the ellipsis is displayed.
      word-break: break-all;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
    }
    .creator {
      flex: none;
      display: flex;
      justify-content: flex-start;
      margin-top: .15rem;
      margin-bottom: .15rem;
      align-items: center;
      font-size: .25rem;
      color: rgba(255, 255, 255, 0.5);
      img {
        height: .5rem;
        border-radius: 50%;
      }
      .name {
        margin-left: .2rem;
        margin-right: .1rem;
      }
      i {
        color: rgba(255, 255, 255, 0.5);
        font-size: .1rem;
        margin-left: .1rem;
        margin-right: .1rem;
      }
    }
    .detailContent {
      flex: 1;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .content {
        color: rgba(255, 255, 255, 0.5);
        font-size: .2rem;
        height: .72rem;
        word-break: break-all;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
      }
      i {
        color: rgba(255, 255, 255, 0.5);
        font-size: .1rem;
        margin-left: .2rem;
      }
    }
  }
  
}

.buttonList {
  i {
    color: white;
  }
  display: flex;
  align-items: center;
  padding: .1rem .4rem .3rem .4rem;
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