<template>
  <div class="video-js">
    <video-player class="vjs-custom-skin" :playsinline="true" :options="playerOptions"></video-player>
  </div>
</template>

<script type="text/ecmascript-6">
  //引入video样式
  import 'video.js/dist/video-js.css'
  import 'vue-video-player/src/custom-theme.css'
  //引入hls.js
  import 'videojs-contrib-hls.js/src/videojs.hlsjs'
  import {videoPlayer} from 'vue-video-player'

  export default {
    name: 'Video',
    components: {
      videoPlayer
    },
    data() {
      return {
        playerOptions: {
          playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
          autoplay: false, //如果true,浏览器准备好时开始回放。
          controls: true, //控制条
          preload: 'auto', //视频预加载
          muted: false, //默认情况下将会消除任何音频。
          loop: false, //导致视频一结束就重新开始。
          language: 'zh-CN',
          aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
          fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
          sources: [{
            type: 'application/x-mpegURL',
            src: 'http://hls01open.ys7.com/openlive/3476cdfc16ea4e3a93ee73431f502a79.hd.m3u8'
          }],
          poster: "", //你的封面地址
          width: document.documentElement.clientWidth,
          notSupportedMessage: '此视频暂无法播放，请稍后再试' //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        }
      }
    }
  }
</script>

<style scoped>
  .video-js {
    width: 100%;
    height: 100%;
  }

  .no-video {
    display: flex;
    height: 100%;
    font-size: 14px;
    text-align: center;
    justify-content: center;
    align-items: center;
  }
</style>
