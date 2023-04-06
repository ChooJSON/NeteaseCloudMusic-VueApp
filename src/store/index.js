/*
 * @Author: RiverHell
 * @Github: https://github.com/RiverHell-AI
 * @Date: 2023-04-03 22:25:27
 * @LastEditors: RiverHell
 * @LastEditTime: 2023-04-07 04:03:29
 * @Description: Please write the description of this file.
 */
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
  },
  getters: {
  },
  mutations: {
    changeButton: (state, value) => {
      state.isPause = value
    },
    updatePlaylist: (state, value) => {
      state.playlist = value
    },
    updatePlaylistIndex: (state, value) => {
      state.playlistIndex = value
    },
    changePlayShow: (state) => {
      state.isPlayShow = !state.isPlayShow
    }
  },
  actions: {
  },
  modules: {
  }
})
