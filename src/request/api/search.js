/*
 * @Author: RiverHell
 * @Github: https://github.com/RiverHell-AI
 * @Date: 2023-04-09 04:01:59
 * @LastEditors: RiverHell
 * @LastEditTime: 2023-04-09 04:02:00
 * @Description: Get search data for SearchView.vue.
 */

import service from '..'

// get search data (SearchView.vue)
export function getSearchResults() {
  return service({
    method: 'GET',
    url: '/cloudsearch?keywords=${keywords}',
  })
}