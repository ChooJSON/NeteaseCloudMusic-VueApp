<!--
 * @Author: RiverHell
 * @Github: https://github.com/RiverHell-AI
 * @Date: 2023-04-06 21:48:32
 * @LastEditors: RiverHell
 * @LastEditTime: 2023-04-07 05:01:42
 * @Description: Footer play part.
-->
<template>
  <div class="footerPlay">
    <div class="footerLeft" @click="changePlayShow">
      <img :src="playlist[playlistIndex].al.picUrl" class="cover"/>
      <div class="playInfo">
        <div class="title">
          {{ playlist[playlistIndex].name }}<span> - {{ formatAuthors(playlist[playlistIndex].ar) }}</span>
        </div>
        <div class="tip">横向滑动以切换歌曲</div>
      </div>
    </div>

    <div class="footerRight">
      <i class="fa-solid fa-circle-play" @click="play" v-if="isPause"></i>
      <i class="fa-solid fa-circle-pause" @click="play" v-else></i>
      <i class="fa-solid fa-list"></i>
    </div>

    <audio ref="audio" :src="`https://music.163.com/song/media/outer/url?id=${playlist[playlistIndex].id}.mp3`"></audio>

    <van-popup v-model:show="isPlayShow" position="right" :style="{ height: '100%', width: '100%' }">
      <PlayShowDetails :currentMusic="playlist[playlistIndex]"/>
    </van-popup>
  </div>
</template>

<script>
import PlayShowDetails from './PlayShowDetails.vue'
import { mapMutations, mapState } from 'vuex'

export default {
  components: {
    PlayShowDetails,
  },
  methods: {
    formatAuthors: function (arr) {
      let authors = []
      arr.forEach(item => {
        authors.push(item.name)
      })
      return authors.join('/')
    },
    play: function () {
      if (this.$refs.audio.paused) {
        this.$refs.audio.play()
        this.changeButton(false)
      } else {
        this.$refs.audio.pause()
        this.changeButton(true)
      }
    },
    ...mapMutations(['changeButton', 'changePlayShow'])
  },
  computed: {
    ...mapState(['playlist', 'playlistIndex', 'isPause', 'isPlayShow']),
  },
  mounted() {
    console.log(this.$refs)
  },
  watch: {
    // If the index or playlist changes, the the music will be played automatedly.
    playlistIndex: function () {
      this.$refs.audio.autoplay = true
      if (this.$refs.audio.paused) {
        this.changeButton(false)
      }
    },
    playlist: function () {
      if (this.isPause) {
        this.$refs.audio.autoplay = true
        this.changeButton(false)
      }
    },
  }
}
</script>

<style lang="less">
.footerPlay {
  width: 100%;
  height: 1.5rem;
  background-color: black;
  position: fixed;
  bottom: 0;
  padding: 0 .4rem;
  border-top-left-radius: .5rem;
  border-top-right-radius: .5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .footerLeft {
    display: flex;
    color: white;
    .cover {
      width: 1rem;
      height: 1rem;
      border-radius: 0.5rem;
      border: 2px solid white;
    }
    .playInfo {
      margin-left: .2rem;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      .title {
        font-size: .4rem;
        font-weight: bolder;
        width: 4rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        span {
          font-size: .3rem;
          color: rgba(255, 255, 255, 0.75);
        }
      }
      .tip {
        font-size: .25rem;
        color: rgba(255, 255, 255, 0.75);
      }
    }
  }

  .footerRight {
    i {
      color: white;
      margin-left: .3rem;
    }
  }

  audio {
    z-index: 1;
    position: fixed;
    bottom: 0;
    right: 0;
  }
}
</style>