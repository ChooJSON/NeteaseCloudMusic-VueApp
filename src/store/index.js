/*
 * @Author: RiverHell
 * @Github: https://github.com/RiverHell-AI
 * @Date: 2023-04-03 22:25:27
 * @LastEditors: RiverHell
 * @LastEditTime: 2023-04-09 06:43:08
 * @Description: Please write the description of this file.
 */
import { getLyrics } from '@/request/api/musiclist'
import { createStore } from 'vuex'
import { getCaptcha, captchaLogin } from '@/request/api/login'

export default createStore({
  state: {
    playlist: [{
      // default playlist
      al: {
        picUrl: "https://p1.music.126.net/2f6UgY8Jc0Dy6jufMdIZeQ==/109951164966568495.jpg",
      },
      ar: [
        {
          name: "灏灏灏仔",
        }
      ],
      id: 1446137141,
      name: "雨爱（抖音版）",
    }],
    playlistIndex: 0, // default index of playing music in a playlist
    isPause: true,  // when music is pause
    isPlayShow: false,  // whether music play details page is shown
    lyrics: {}, // lyrics
    currentTime: 0, // current time of the music
    duration: 0, // total duration of the music
    isLogin: false, // whether the user has logged in
    isFooterPlayShow: true,
  },
  getters: {
  },
  mutations: {
    changeButton: function (state, value) {
      state.isPause = value
    },
    updatePlaylist: function (state, value) {
      state.playlist = value
    },
    addPlaylist: function (state, value) {
      state.playlist.push(value)
    },
    updatePlaylistIndex: function (state, value) {
      state.playlistIndex = value
    },
    changePlayShow: function (state) {
      state.isPlayShow = !state.isPlayShow
    },
    updateLyrics: function (state, value) {
      state.lyrics = value
    },
    updateCurrentTime: function (state, value) {   
      state.currentTime = value
      // console.log(state.currentTime)
    },
    updateDuration: function (state, value) {
      state.duration = value
      // console.log(state.duration)
    },
    updateIsLogin: function (state, value) {
      state.isLogin = value
    },
  },
  actions: {
    getMusicLyrics: async function (context, value) {
      let res = await getLyrics(value)
      context.commit("updateLyrics", res.data.lrc)
    },
    requestCaptcha: async function (context, value) {
      let res = await getCaptcha(value)
      return res.data.code
      // console.log(JSON.stringify(res))
    },
    verifyLogin: async function (context, value) {
      let res = await captchaLogin(value)
      console.log(JSON.stringify(res))
      return res.data.code
    }
  },
  modules: {
  }
})
