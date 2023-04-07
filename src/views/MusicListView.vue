<template>
  <MusicListTop :playlist="state.playlist"/>
  <MusicListSongs :songs="state.songs"  :subscribedCount="state.playlist.subscribedCount"/>
</template>

<script>
import { useRoute } from 'vue-router'
import { onMounted, reactive } from 'vue'
import { getMusicListDetails, getMusicListSongs } from '@/request/api/musiclist.js'

import MusicListTop from "@/components/musiclist/MusicListTop.vue"
import MusicListSongs from "@/components/musiclist/MusicListSongs.vue"

export default {
  name: 'MusicListView',
  components: {
    MusicListTop,
    MusicListSongs,
  },
  setup() {
    const state = reactive({
      playlist: {}, // music list details
      songs: [],  // songs in the music list
    })
    onMounted(async () => {
      let id = useRoute().query.id
      // get music list details
      let res = await getMusicListDetails(id)
      state.playlist = res.data.playlist
      // get all songs in the music list
      let resSongs = await getMusicListSongs(id)
      state.songs = resSongs.data.songs
      // 防止由于页面刷新、数据丢失，将数据保存在 sessionStorage 内
      sessionStorage.setItem('musicListDetails', JSON.stringify(state))
    })
    return { state }
  }
}
</script>