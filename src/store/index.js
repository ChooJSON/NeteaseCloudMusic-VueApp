/*
 * @Author: RiverHell
 * @Github: https://github.com/RiverHell-AI
 * @Date: 2023-04-03 22:25:27
 * @LastEditors: RiverHell
 * @LastEditTime: 2023-04-07 22:22:05
 * @Description: Please write the description of this file.
 */
import { getLyrics } from '@/request/api/musiclist'
import { createStore } from 'vuex'

export default createStore({
  state: {
    playlist: [{
      // default playlist
      al: {
        picUrl: "https://p1.music.126.net/SswJS5DazMUuGwlthgHRmg==/109951168491403346.jpg",
      },
      ar: [
        {
          name: "雁夜风",
        }
      ],
      name: "梦境旅社",
      id: 2032966861
    }],
    playlistIndex: 0, // default index of playing music in a playlist
    isPause: true,  // when music is pause
    isPlayShow: false,  // whether music play details page is shown
    lyrics: {}, // lyrics
    currentTime: 0 // current time of the music
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
      // console.log(state.currentTime)
      state.currentTime = value
    },
  },
  actions: {
    getMusicLyrics: async function (context, value) {
      let res = await getLyrics(value)
      context.commit("updateLyrics", res.data.lrc)
    }
  },
  modules: {
  }
})
