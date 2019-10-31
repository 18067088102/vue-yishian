<template>
  <div>
    <v-header :title="title" :show-back-btn="true" ></v-header>
    <video-player ref="playerObj"></video-player>
    <van-tabs v-model="active" @click="selectTab" swipeable sticky color="#00B886" title-active-color="#00B886"
              title-inactive-color="#666666">
      <van-tab v-for="(item,index) in classMap" :title="item.name" :name="item.page" :key="index">
        <keep-alive><router-view></router-view></keep-alive>
      </van-tab>
    </van-tabs>

  </div>
</template>

<script type="text/ecmascript-6">
  import VHeader from "./Header"
  import VideoPlayer from "./Video"
  import { Tab, Tabs } from 'vant';

  export default {
    name: 'VantDetail',
    data() {
      return {
        title: this.$route.query.title,
        classMap: [],
        active: 1
      }
    },
    components: {
      VHeader,
      VideoPlayer,
      [Tab.name]: Tab,
      [Tabs.name]: Tabs
    },
    methods: {
      playVideo() {
        // this.$refs['playerObj'].videoSrc = 'rtmp://rtmp01open.ys7.com/openlive/3476cdfc16ea4e3a93ee73431f502a79.hd'
        // this.$refs['playerObj'].playerOptions.sources[0].src = 'rtmp://rtmp01open.ys7.com/openlive/3476cdfc16ea4e3a93ee73431f502a79.hd'
      },
      selectTab(name, title) {
        console.log(name, title)
        this.$router.push({
          path: name
        })
      }
    },
    mounted() {
      this.classMap = [
        {
          'name': '基础信息',
          'page': '/BasicInfo'
        },
        {
          'name': '证照信息',
          'page': '/LicenseInfo'
        },
        {
          'name': '监控视频',
          'page': '/SurveillanceVideo'
        },
        {
          'name': '每日菜谱',
          'page': '/DailyRecipes'
        }
      ]
    }
  }
</script>

<style scoped>

</style>
