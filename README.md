<!--
 * @Author: RiverHell
 * @Github: https://github.com/RiverHell-AI
 * @Date: 2023-04-03 22:25:47
 * @LastEditors: RiverHell
 * @LastEditTime: 2023-04-09 07:47:18
 * @Description: Introduction to this app.
-->
# NeteaseCloudMusic-VueApp

(・∀・(・∀・(・∀・*)

## 项目介绍
一个简单的网易云移动客户端，主要功能如下：
- 信息展示：发现页展示了 Banner 轮播图与推荐歌单，点击歌单可进入歌单详情页；歌单详情页展示了当前歌单的一些信息（评论数与分享数）与歌曲列表；
- 搜索功能：可在发现页与歌单详情页右上角进入搜索页并进行歌曲/歌手的搜索，搜索记录存储在 localStorage 中，可通过右侧的删除按钮进行清空；
- 音乐播放：点击歌单详情页的任意歌曲即可播放，同时播放列表将被替换为当前歌单；点击搜索页的歌曲可将该歌曲添加至当前播放列表；
- 黑胶唱片与歌词高亮：在音乐播放页，黑胶唱片会随着歌曲的播放而转动，歌词会根据音乐进度呈现高亮效果。同时，点击黑胶唱片或歌词可在二者之间进行切换；
- 底部音乐播放器：登录页之外的所有页面均有固定在底部、显示当前播放的音乐的迷你播放器；
- 验证码登录与用户信息展示：（没写好 QAQ）

> 验证码登录每天有次数限制！只有一个网易云账号的只能惨兮兮地接受这个事实了……

## 项目展示
一些图图们~

<center class="half" style="display: flex; justify-content: space-between">
    <img src="README_imgs\发现页(iPhone 12 Pro).png" title="发现页" width="200"/><img src="README_imgs\歌单详情页(iPhone 12 Pro).png" width="200"/><img src="README_imgs\搜索页(iPhone 12 Pro).png" width="200"/>
</center>

<br>


<center class="half" style="display: flex; justify-content: space-between">
    <img src="README_imgs\黑胶唱片页(iPhone 12 Pro).png" width="200"/>     <img src="README_imgs\歌词页(iPhone 12 Pro).png" width="200"/>     <img src="README_imgs\登录页(iPhone 12 Pro).png" width="200"/>
</center>

## 轮子们
- Vue3
- Axios
- Vant UI（轮播图等小组件）
- Font Awesome（图标）
- 网易云 NodeJS 版 API：[NeteaseCloudMusicApi](https://github.com/Binaryify/NeteaseCloudMusicApi)
- Vercel（部署 API）


## 如何运行
先 clone 到本地，然后执行：

```
npm install
npm run serve
```

记得在浏览器里右键打开“检查”，然后在设备工具栏里把尺寸设置成 iPhone Pro 12 等类似长宽比的设备哦~
