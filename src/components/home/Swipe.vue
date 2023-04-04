<!--
 * @Author: RiverHell
 * @Github: https://github.com/RiverHell-AI
 * @Date: 2023-04-04 00:40:17
 * @LastEditors: RiverHell
 * @LastEditTime: 2023-04-04 06:20:04
 * @Description: Please write the description of this file.
-->
<template>
  <van-swipe :autoplay="3000" lazy-render class="bannerList">
    <van-swipe-item v-for="image in state.images" :key="image" class="banner">
      <img :src="image.pic" />
    </van-swipe-item>
  </van-swipe>

</template>

<script>
  import axios from 'axios'
  import { reactive, onMounted } from 'vue'
  import { getBanner } from '@/request/api/home.js'

  export default {
    setup() {
      const state = reactive({
        images: []
      })
      onMounted(async () => {
        // axios.get('http://localhost:3000/banner?type=2')
        //   .then((res) => {
        //     console.log(res)
        //     state.images = res.data.banners
        //     console.log(state.images)
        //   })
        let res = await getBanner()
        state.images = res.data.banners
      })
      return { state }
    },
  }
</script>

<style lang="less">
  .bannerList {
    width: 100%;
    height: 2.8rem;
    margin: .3rem 0;
    .banner {
      padding: 0 .4rem;
      img {
        width: 100%;
        height: 100%;
        border-radius: .2rem;
        object-fit: cover;
      }
    }
    .van-swipe__indicator--active {
      background-color: rgb(255, 255, 255);
    }
  }
</style>

