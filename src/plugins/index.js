/*
 * @Author: RiverHell
 * @Github: https://github.com/RiverHell-AI
 * @Date: 2023-04-04 00:58:26
 * @LastEditors: RiverHell
 * @LastEditTime: 2023-04-04 00:58:48
 * @Description: Use vant components.
 */

import { Swipe, SwipeItem, Button, Popup } from 'vant'

let plugins = [
  Swipe, SwipeItem, Button, Popup
]

// use vant components
export default function getVant(app) {
  plugins.forEach((i) => {
    return app.use(i)
  })
}