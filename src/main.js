/*
 * @Author: RiverHell
 * @Github: https://github.com/RiverHell-AI
 * @Date: 2023-04-03 22:25:27
 * @LastEditors: RiverHell
 * @LastEditTime: 2023-04-07 05:49:08
 * @Description: Please write the description of this file.
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import '@fortawesome/fontawesome-free/css/all.css'  // icon
import getVant from './plugins/index.js'  // Vant // Marquee


const app = createApp(App)
app.use(store).use(router).mount('#app')

getVant(app)
