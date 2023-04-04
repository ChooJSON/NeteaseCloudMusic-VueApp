/*
 * @Author: RiverHell
 * @Github: https://github.com/RiverHell-AI
 * @Date: 2023-04-04 16:35:40
 * @LastEditors: RiverHell
 * @LastEditTime: 2023-04-04 16:47:58
 * @Description: Get music list data for MusicList.vue.
 */

import service from '..'

// get music list detials data (MusicList.vue)
export function getMusicListDetails(id) {
  return service({
    method: 'GET',
    url: `/playlist/detail?id=${id}`,
  })
}
