<template>
  <div class="home-wrapper">
    <div class="navi">
      <h1 class="title">壹食安家长端</h1>
    </div>
    <div class="header">
      <div class="location">
        <span class="location-text">瑶海区</span>
        <i class="location-img"></i>
      </div>
      <div class="search-box">
        <i class="search-img"></i>
        <span class="search-text">搜索学校</span>
      </div>
      <div class="focus">
        <i class="focus-img"></i>
        <span class="focus-text">关注</span>
      </div>
    </div>
    <vant></vant>
  </div>
</template>

<script>
import Vant from "./components/Vant";
export default {
  name: 'App',
  components: {Vant}
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .home-wrapper
    width: 100%
    height: 100%
    .navi
      width: 100%
      height: 64px
      line-height: 64px
      background: #fff
      .title
        font-size: 18px
        font-weight: 500
        color: rgba(0,0,0,1)
        text-align: center
    .header
      width: 100%
      height: 40px
      background: #fff
      display: flex
      flex-direction: row
      align-items: center
      justify-content: space-between
      .location
        display: flex
        flex-direction: row
        align-items center
        justify-content: center
        margin-left: 10px
        .location-img
          margin-top: -7px
          margin-left: 2px
          width: 15px
          height: 15px
          background-image: url('./assets/img/arrow_down.png')
          background-repeat:no-repeat
          background-size:100% 100%
        .location-text
          color: rgba(51,51,51,1)
          font-size: 14px
          font-weight: 400
      .search-box
        display: flex
        flex-direction: row
        align-items: center
        justify-content: center
        width: 200px
        height: 30px
        margin: 5px 5px
        background: rgba(242,242,243,1)
        border-radius: 15px
        .search-img
          width: 14px
          height: 14px
          margin-right: 7px
          background-image: url('./assets/img/search.png')
          background-repeat:no-repeat
          background-size:100% 100%
        .search-text
          color: rgba(178,178,178,1)
          font-size: 13px
          font-weight: 400
      .focus
        display: flex
        flex-direction: row
        align-items: center
        justify-content: center
        margin-right 10px
        .focus-img
          width: 20px
          height: 20.5px
          margin-right: 2.5px
          background-image: url('./assets/img/focus.png')
          background-repeat:no-repeat
          background-size:100% 100%
        .focus-text
          color: rgba(51,51,51,1)
          font-size: 14px
          font-weight: 400
</style>
