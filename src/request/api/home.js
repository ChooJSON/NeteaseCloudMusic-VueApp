/*
 * @Author: RiverHell
 * @Github: https://github.com/RiverHell-AI
 * @Date: 2023-04-04 01:45:25
 * @LastEditors: RiverHell
 * @LastEditTime: 2023-04-04 04:37:40
 * @Description: Get home data for HomeView.vue.
 */

import service from '..'

// get banner data (Swipe.vue)
export function getBanner() {
  return service({
    method: 'GET',
    url: '/banner?type=1',
  })
}

// get recommended music list data (Discover.vue)
export function getMusicLists() {
  return service({
    method: 'GET',
    url: '/personalized?limit=6',
  })
}








