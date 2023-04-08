<!--
 * @Author: RiverHell
 * @Github: https://github.com/RiverHell-AI
 * @Date: 2023-04-09 01:49:28
 * @LastEditors: RiverHell
 * @LastEditTime: 2023-04-09 04:48:12
 * @Description: Search page.
-->

<template>
  <div class="topSearchBar">
    <i class="fa-solid fa-arrow-left" @click="$router.go(-1)"></i>
    <input type="text" placeholder="请输入……" v-model="inputContent" @keydown.enter="enterContent">
  </div>

  <div class="searchHistory">

    <div class="inputHistory">
      <div class="historyTitle">
        <div>历史</div>
        <i class="fa-solid fa-trash" @click="clearHistory"></i>
      </div>
      <span v-for="item in inputHistoryList" :key="item" class="inputItem" @click="searchThis(item)">{{ item }}</span>
    </div>

    <div class="playAllTitle" v-show="isPlayAllShow">
      <i class="fa-solid fa-circle-play"></i>
      <div>播放全部<span> (共{{ searchResults.length }}首)</span></div>
    </div>

    <div class="resultsList">
      <div class="item" v-for="(item, i) in searchResults" :key="i">
        <div class="itemLeft" @click="playThisMusic(item)">
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
import { getSearchResults } from '@/request/api/search'

export default {
  data() {
    return {
      inputContent: "",
      inputHistoryList: [],
      searchResults: [],
      isPlayAllShow: false,
    }
  },
  mounted() {
    // is empty, then make it to be an Array
    this.inputHistoryList = JSON.parse(localStorage.getItem("inputHistoryList")) ? JSON.parse(localStorage.getItem("inputHistoryList")) : []
  },
  methods: {
    enterContent: async function () {
      if (!/^\s*$/.test(this.inputContent)) {
        this.inputHistoryList.unshift(this.inputContent)
        // de-duplication
        this.inputHistoryList = [...new Set(this.inputHistoryList)]
        // save to localStorage
        localStorage.setItem("inputHistoryList", JSON.stringify(this.inputHistoryList))
        // get search results
        let res = await getSearchResults(this.inputContent)
        this.searchResults = res.data.result.songs
        this.isPlayAllShow = true
        console.log(this.searchResults)
        this.inputContent = ''
      }
    },
    clearHistory: function () {
      this.inputHistoryList = []
      localStorage.removeItem("inputHistoryList")
    },
    searchThis: async function (item) {
      let res = await getSearchResults(item)
      this.searchResults = res.data.result.songs
      this.isPlayAllShow = true
    },
    formatAuthors: function (arr) {
      let authors = []
      arr.forEach(item => {
        authors.push(item.name)
      })
      return authors.join('/')
    },
    fontSize: function (num) {
      return 0.1 * (4 - String(num).length) + 'rem'
    },
    playThisMusic: function (item) {
      this.$store.commit("addPlaylist", item)
      this.$store.commit("updatePlaylistIndex", this.$store.state.playlist.length - 1)
    },
  },
}
</script>

<style lang="less">
.topSearchBar {
  width: 100%;
  padding: .4rem;
  align-items: center;
  display: flex;
  justify-content: space-between;
  input {
    width: 90%;
    height: .8rem;
    padding: 0 .3rem;
    border: none;
    border-radius: .5rem;
    background-color: rgba(0, 0, 0, 0.08);
    transition: all .1s linear;
    
  }
  input::placeholder {
    color: rgb(189, 189, 189);
  }
  input:focus {
    background-color: rgba(0, 0, 0, 0.12);
    transition: all .1s linear;
  }
}

.searchHistory {
  width: 100%;
  padding: .1rem .4rem .4rem .4rem;
  .inputHistory {
    margin-bottom: .4rem;
    display: flex;
    flex-wrap: wrap;
    .historyTitle {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-weight: bold;
      font-size: .35rem;
      margin-bottom: .1rem;
      i {
        font-size: .4rem;
        color: rgba(0, 0, 0, 0.3);
        transition: all .05s linear;
      }
      i:active {
        color: rgba(0, 0, 0, 0.8);
        transition: all .05s linear;
      }
    }
    .inputItem {
      align-items: center;
      padding: .05rem .2rem;
      background-color: rgba(0, 0, 0, 0.1);
      border-radius: .5rem;
      margin: .1rem;
      transition: all .025s linear;
    }
    .inputItem:active {
      background-color: rgba(0, 0, 0, 0.2);
      transition: all .025s linear;
    }
  }
  .playAllTitle {
    width: 100%;
    display: flex;
    align-items: center;
    margin: .2rem 0;
    div {
      margin-left: .1rem;
      text-align: center;
      line-height: .5rem;
      span {
        font-size: .25rem;
        color: gray;
      }
    }
  }

  .resultsList {
    margin: .4rem 0;
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