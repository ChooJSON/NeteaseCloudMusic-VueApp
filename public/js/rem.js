/*
 * @Author: RiverHell
 * @Github: https://github.com/RiverHell-AI
 * @Date: 2023-04-03 22:53:37
 * @LastEditors: RiverHell
 * @LastEditTime: 2023-04-03 23:09:30
 * @Description: Implementing rem layouts.
 */

// set the rem
function remSize() {
  // get the width of the device
  let deviceWidth = document.documentElement.clientWidth || window.innerWidth
  if (deviceWidth >= 786) {
    deviceWidth = 786
  } else if (deviceWidth <= 320) {
    deviceWidth = 320
  }
  // set the rem
  // 786px -> 1rem = 100px  393px -> 1rem = 50px
  document.documentElement.style.fontSize = (deviceWidth / 7.86) + "px"
  // set font size
  document.querySelector('body').style.fontSize = 0.3 + "rem"
}

remSize()

window.onresize = () => {
  remSize()
}