<template>
  <MusicListTop :playlist="state.playlist"/>
</template>

<script>
import { useRoute } from 'vue-router'
import { onMounted, reactive } from 'vue'
import { getMusicListDetails } from '@/request/api/musiclist.js'

import MusicListTop from "@/components/musiclist/MusicListTop.vue"

export default {
  name: 'MusicListView',
  components: {
    MusicListTop,
  },
  setup() {
    const state = reactive({
      playlist: {}
    })
    onMounted(async () => {
      let id = useRoute().query.id
      let res = await getMusicListDetails(id)
      state.playlist = res.data.playlist
    })
    return { state }
  }
}
</script>