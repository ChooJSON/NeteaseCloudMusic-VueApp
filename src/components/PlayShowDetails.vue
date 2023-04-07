<!--
 * @Author: RiverHell
 * @Github: https://github.com/RiverHell-AI
 * @Date: 2023-04-07 05:00:00
 * @LastEditors: RiverHell
 * @LastEditTime: 2023-04-08 02:19:42
 * @Description: Current music details.
-->
<template>
  <img :src="currentMusic.al.picUrl" class="bgDetails">
  <div class="layout">
    <div class="detailsTop">
      <div class="topLeft" @click="changePlayShow">
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

    <div class="musicCD" v-show="isLyricsShow">
      <img src="@/assets/needle-ab.png" :class="{imgNeedle: isPause, imgNeedleActive: !isPause}"/>
      <img src="@/assets/cd.png" class="imgCD"/>
      <img :src="currentMusic.al.picUrl" class="imgBg" :class="{imgBgPaused: isPause, imgBgActive: !isPause}"/>
    </div>

    <div class="musicLyrics" ref="musicLyrics">
      <p v-for="line in formatLyrics" :key="line" class="lineLyric" 
        :class="{active: (currentTime * 1000 >= line.time && currentTime * 1000 < line.nextTime)}"
      >{{ line.lineLyric }}</p>
    </div>

    <div class="detailsBottom">
      <div class="detailsButtons">
        <i class="fa-regular fa-heart"></i>
        <i class="fa-solid fa-circle-down"></i>
        <i class="fa-solid fa-comments"></i>
        <i class="fa-solid fa-ellipsis-vertical"></i>
      </div>

      <div class="playButtons">
        <i class="fa-solid fa-repeat"></i>
        <i class="fa-solid fa-backward-step"></i>
        <i class="fa-solid fa-circle-play" @click="play" v-if="isPause"></i>
        <i class="fa-solid fa-circle-pause" @click="play" v-else></i>
        <i class="fa-solid fa-forward-step"></i>
        <i class="fa-solid fa-bars"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  data() {
    return {
      isLyricsShow: false,
    }
  },
  computed: {
    ...mapState(["lyrics", "currentTime", "playlistIndex", "playlist"]),
    formatLyrics: function () {
      let arr = []
      if (this.lyrics.lyric) {
        arr = this.lyrics.lyric.split('\n').filter(Boolean).map((item, i) => {
          // lyric in one line: [00:00.000] 作曲 : 雁夜风
          // so we use reg to get min, sec, ms and lineLyric
          const match = item.match(/^\[(\d{2}):(\d{2})\.(\d{2,3})\](.*)$/)
          let min = match[1]
          let sec = match[2]
          let ms = match[3]
          let time = parseInt(min) * 60000 + parseInt(sec) * 1000 + parseInt(ms)
          let lineLyric = match[4].trim()
          return {min, sec, ms, time, lineLyric}
        })
        arr.forEach((item, i) => {
          if (i == arr.length - 1) {
            item.nextTime = 0
          } else {
            item.nextTime = arr[i + 1].time
          }
        })
      }
      return arr
    }
  },
  props: ['currentMusic', 'play', 'isPause'],
  mounted() {
    // console.log(this.currentMusic)
    // console.log(this.lyrics.lyric)

    this.lyricsCenter = this.$refs.musicLyrics.offsetHeight / 2
    console.log(this.lyricsCenter)
  },
  watch: {
    currentTime: function () {
      // let currentLineLyric = document.querySelector(".active")
      // console.log([currentLineLyric])
      // const currentLineTop = this.lyricsCenter - currentLineLyric.offsetTop
      // this.$refs.musicLyrics.style.transform = `translateY(-${currentLineTop}px)`
    }
  },
  methods: {
    formatAuthors: function (arr) {
      let authors = []
      arr.forEach(item => {
        authors.push(item.name)
      })
      return authors.join('/')
    },
    ...mapMutations(['changeButton', 'changePlayShow'])
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

.layout {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
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
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .author {
      font-size: .2rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  .topRight {
    flex: 1;
    text-align: end;
  }
}

.musicCD {
  height: 8rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  .imgNeedle {
    height: 3.5rem;
    position: absolute;
    left: 46%;
    transform-origin: 0 0;
    transform: rotate(-20deg);
    transition: all 1.5s;
    z-index: 1;
  }
  .imgNeedleActive{
    height: 3.5rem;
    position: absolute;
    left: 46%;
    transform-origin: 0 0;
    transform: rotate(-3deg);
    transition: all 1.5s;
    z-index: 1;
  }
  .imgCD {
    width: 6rem;
    height: 6rem;
    transform: translateY(30%);
  }
  .imgBg {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    position: absolute;
    top: 3rem;
    z-index: -1;
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
  .imgBgActive {
    animation-play-state: running;
  }
  .imgBgPaused {
    animation-play-state: paused;
  }
}

.musicLyrics {
  height: 8rem;
  width: 100%;
  color: rgba(255, 255, 255, 0.6);
  padding: 0 .4rem;
  align-items: center;
  overflow: scroll;
  .lineLyric {
    text-align: center;
    padding: .2rem;
    transition: all 0.1s linear;
  }
  .active {
    color: white;
    font-size: .375rem;
    font-weight: bold;
    transition: all 0.1s linear;
  }
}

.detailsBottom {
  width: 100%;
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
    .fa-circle-play, .fa-circle-pause {
      font-size: .8rem;
    }
  }
}
</style>