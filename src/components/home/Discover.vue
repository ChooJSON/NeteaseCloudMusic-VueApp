<!--
 * @Author: RiverHell
 * @Github: https://github.com/RiverHell-AI
 * @Date: 2023-04-04 02:36:34
 * @LastEditors: RiverHell
 * @LastEditTime: 2023-04-04 16:59:08
 * @Description: Discover music list.
-->

<template>
  <div class="discover">
    <div class="topBar">
      <div class="title">发现好歌单</div>
      <div class="more">
        <i class="fa-solid fa-angles-right"></i>
      </div>
    </div>
    <div class="content">
      <van-swipe 
        :loop="false" 
        :width="150" 
        class="my-swipe" 
        :show-indicators="false"
      >
        <van-swipe-item v-for="item in state.musicLists" :key="item" class="musicList">
          <router-link :to="{
            path: '/musiclist',
            query: {
              id: item.id
            }
          }">
            <div class="imgWrap">
              <img :src="item.picUrl"/>
            </div>
            <span class="playCount">
              {{ changeCount(item.playCount) }}
              <i class="fa-solid fa-headphones"></i>
            </span>
            <span class="listTitle">{{ item.name }}</span>
        </router-link>
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
  import { reactive, onMounted } from 'vue'
  import { getMusicLists } from '@/request/api/home.js'

  export default {
    // Vue3 grammar
    setup() {
      const state = reactive({
        musicLists: []
      })
      function changeCount(num) {
        if (num >= 100000000) {
          return (num / 100000000).toFixed(1) + '亿'
        } else if (num >= 10000) {
          return (num / 10000).toFixed(1) + '万'
        }
        return num
      }
      onMounted(async () => {
        let res = await getMusicLists()
        state.musicLists = res.data.result
      })
      return { state, changeCount }
    },
    
    // Vue2 grammar
    /* data() {
      return {
        musicLists: []
      }
    },
    methods: {
      async getDiscover() {
        let res = await getMusicLists()
        this.musicLists = res.data.result
        console.log(res)
      },
      changeCount(num) {
        if (num >= 100000000) {
          return (num / 100000000).toFixed(1) + '亿'
        } else if (num >= 10000) {
          return (num / 10000).toFixed(1) + '万'
        }
      }
    },
    mounted() {
      this.getDiscover()
    } */
  }
</script>

<style lang="less">
  .discover {
    width: 100%;
    height: auto;
    padding: 0 .4rem 0 .4rem;
    .topBar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: .2rem;
      .title {
        font-size: .36rem;
        font-weight: bold;
      }
      i {
        font-size: .4rem;
      }
    }
    .content {
      width: 100%;
      height: auto;
      .my-swipe {
        height: 100%;
        van-swipe__track {
          width: 31.8rem;
        }
        .musicList {
          padding-right: .2rem;
          .imgWrap {
            margin-bottom: .1rem;
            img {
              width: 100%;
              border-radius: .2rem;
              object-fit: cover;
            }
          }
          .playCount {
            i {
              font-size: .2rem;
              margin-left: .05rem;
              text-shadow: black .01rem .01rem .1rem;
            }
            font-size: .2rem;
            text-shadow: black .01rem .01rem .1rem;
            align-items: center;
            color: white;
            position: absolute;
            top: .08rem;
            right: .4rem;
          }
          .listTitle {
            word-break: break-all;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
          }
        }
      }
    }
  }
</style>