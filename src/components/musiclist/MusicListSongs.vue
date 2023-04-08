<!--
 * @Author: RiverHell
 * @Github: https://github.com/RiverHell-AI
 * @Date: 2023-04-06 17:22:40
 * @LastEditors: RiverHell
 * @LastEditTime: 2023-04-07 04:32:38
 * @Description: All songs of the music list.
-->

<template>
  <div class="musicListSongs">
    <div class="option">
      <div class="optionLeft">
        <i class="fa-solid fa-circle-play"></i>
        <span class="playAll">
          播放全部 <span class="musicCount">(共{{ songs.length }}首)</span>
        </span>
      </div>
      <div class="optionRight">
        <i class="fa-solid fa-plus"></i>
        <span class="subscribed">
          收藏 <span class="subscribedCount">({{ changeCount(subscribedCount) }})</span>
        </span>
      </div>
    </div>

    <div class="songsList">
      <div class="item" v-for="(item, i) in songs" :key="i">
        <div class="itemLeft" @click="playMusic(i)">
          <span class="itemNo" :style="{fontSize: fontSize(i + 1)}">{{ i + 1 }}</span>
          <div class="itemContent">
            <p class="itemTitle">{{ item.name }}</p>
            <div class="itemAuthor">{{ formatAuthors(item.ar) }}</div>
          </div>
        </div>
        <div class="itemRight">
          <i class="fa-brands fa-youtube" v-if="item.mv != 0"></i>
          <i class="fa-solid fa-bars"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  setup(props) {
    function changeCount(num) {
      if (num >= 100000000) {
        return (num / 100000000).toFixed(1) + '亿'
      } else if (num >= 10000) {
        return (num / 10000).toFixed(1) + '万'
      }
      return num
    }

    function formatAuthors(arr) {
      let authors = []
      arr.forEach(item => {
        authors.push(item.name)
      })
      return authors.join('/')
    }

    function fontSize(num) {
      return 0.1 * (4 - String(num).length) + 'rem'
    }

    function getHeight() {
      let songslistHeight = document.querySelector(".songsList")
    }

    return { changeCount, formatAuthors, fontSize }
  },
  props: ['songs', 'subscribedCount'],
  methods: {
    playMusic: function (i) {
      this.updatePlaylist(this.songs)
      this.updatePlaylistIndex(i)
    },
    ...mapMutations(['updatePlaylist', 'updatePlaylistIndex'])
  },
}
</script>

<style lang="less">
.musicListSongs {
  width: 100%;
  height: auto;
  background-color: white;
  border-top-left-radius: .5rem;
  border-top-right-radius: .5rem;
  .option {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .2rem .4rem;
    .optionLeft {
      display: flex;
      align-items: center;
      i {
        color: black;
      }
      .playAll {
        margin-left: .15rem;
      }
    }
    .optionRight {
      display: flex;
      align-items: center;
      background-color: black;
      color: white;
      padding: .15rem .25rem .15rem .25rem;
      border-radius: .5rem;
      i {
        font-size: .2rem;
      }
      .subscribed {
        margin-left: .1rem;
        font-size: .2rem;
        text-align: center;
      }
    }
  }

  .songsList {
    padding: 0 .4rem;
    .item {
      display: flex;
      justify-content: space-between;
      margin: .2rem 0;
      .itemLeft {
        display: flex;
        align-items: center;
        .itemNo {
          width: .4rem;
          text-align: center;
          color: gray;
        }
        .itemContent {
          margin-left: .2rem;
          width: 4.5rem;
          .itemTitle {
            height: .45rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-weight: 700;
          }
          .itemAuthor {
            font-size: .2rem;
            color: gray;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
      }
      .itemRight {
        display: flex;
        align-items: center;
        i {
          font-size: .4rem;
          color: black;
          padding-left: .3rem;
        }
      }
    }
  }

}
</style>