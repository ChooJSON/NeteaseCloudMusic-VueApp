/*
 * @Author: RiverHell
 * @Github: https://github.com/RiverHell-AI
 * @Date: 2023-04-04 01:43:15
 * @LastEditors: RiverHell
 * @LastEditTime: 2023-04-04 17:30:17
 * @Description: Please write the description of this file.
 */
import axios from 'axios'

let service = axios.create({
  // baseURL: "http://localhost:3000/",
  baseURL: "https://netease-cloud-music-api-olive.vercel.app/",
  timeout: 3000,
})

export default service