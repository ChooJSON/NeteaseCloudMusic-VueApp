/*
 * @Author: RiverHell
 * @Github: https://github.com/RiverHell-AI
 * @Date: 2023-04-04 16:35:40
 * @LastEditors: RiverHell
 * @LastEditTime: 2023-04-06 17:46:28
 * @Description: Get music list data for MusicList.vue.
 */

import service from '..'

// get music list details data (MusicListTop.vue)
export function getMusicListDetails(id) {
  return service({
    method: 'GET',
    url: `/playlist/detail?id=${id}`,
  })
}

// get all songs in the music list (MusicListSongs.vue)
export function getMusicListSongs(id) {
  return service({
    method: 'GET',
    url: `/playlist/track/all?id=${id}&offset=0`,
  })
}
