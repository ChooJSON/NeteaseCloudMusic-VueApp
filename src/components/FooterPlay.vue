<!--
 * @Author: RiverHell
 * @Github: https://github.com/RiverHell-AI
 * @Date: 2023-04-06 21:48:32
 * @LastEditors: RiverHell
 * @LastEditTime: 2023-04-09 03:28:14
 * @Description: Footer play part.
-->
<template>
  <div class="footerPlay">
    <div class="footerLeft" @click="changePlayShow">
      <img :src="playlist[playlistIndex].al.picUrl" class="cover" :class="{coverPaused: isPause, coverActive: !isPause}"/>
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
      <PlayShowDetails 
        :currentMusic="playlist[playlistIndex]"
        :play="play"
        :isPause="isPause"
        :addDuration="addDuration"
      />
    </van-popup>
  </div>
</template>

<script>
import PlayShowDetails from './PlayShowDetails.vue'
import { mapMutations, mapState } from 'vuex'

export default {
  mounted() {
    // console.log(this.$refs)
    this.$store.dispatch("getMusicLyrics", this.playlist[this.playlistIndex].id)
    this.updateTime()
  },
  updated() {
    this.$store.dispatch("getMusicLyrics", this.playlist[this.playlistIndex].id)
    this.addDuration()
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
  },
  data() {
    return {
      interval: 0,
    }
  },
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
        // when playing, trigger the function
        this.updateTime()
      } else {
        this.$refs.audio.pause()
        this.changeButton(true)
        // when pausing, clear the interval
        clearInterval(this.interval)
      }
    },
    // trigger this function every 1s
    updateTime: function () {
      this.interval = setInterval(() => {
        this.updateCurrentTime(this.$refs.audio.currentTime)
      }, 500)
    },
    addDuration: function () {
      this.updateDuration(this.$refs.audio.duration)
    },
    ...mapMutations([
      'changeButton', 
      'changePlayShow', 
      'updateCurrentTime',
      'updateDuration',
    ],)
  },
  computed: {
    ...mapState([
      'playlist', 
      'playlistIndex', 
      'isPause', 
      'isPlayShow'
    ]),
  },
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
      // rotating animation
      animation: rotate 10s linear infinite;
    }

    @keyframes rotate {
      0% {
        transform: rotateZ(0deg);
      }
      100% {
        transform: rotateZ(360deg);
      }
    }
    .coverActive {
      animation-play-state: running;
    }
    .coverPaused {
      animation-play-state: paused;
    }

    .playInfo {
      margin-left: .2rem;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      .title {
        font-size: .35rem;
        font-weight: bolder;
        width: 4rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        span {
          font-size: .28rem;
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