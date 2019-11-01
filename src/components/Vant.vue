<template>
  <div>
    <div>
      <v-header :title="title"></v-header>
      <vant-header></vant-header>
      <van-pull-refresh v-model="isDownLoading" @refresh="onDownRefresh">
        <van-swipe :autoplay="3000" indicator-color="#09c2b1" class="swipe">
          <van-swipe-item v-for="(image,index) in banners" :key="index">
            <img :src="image.picture" width="100%" height="100%"/>
          </van-swipe-item>
        </van-swipe>
        <van-list v-model="isUpLoading" :finished="upFinished" :immediate-check="false" :offset="10"
                  finished-text="我是有底线的" @load="onLoadList">
          <ListItem @select="selectSchool" :school="list"></ListItem>
        </van-list>
      </van-pull-refresh>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {Swipe, SwipeItem, List, PullRefresh} from 'vant'
  import ListItem from "./ListItem"
  import VantHeader from "./VantHeader"
  import VHeader from "./Header"

  export default {
    name: "Vant",
    props: {
      lat: {
        type: String
      },
      lng: {
        type: String
      }
    },
    data() {
      return {
        title: '壹食安家长端',
        list: [],
        isDownLoading: false, // 下拉刷新
        pageSize: 10, // 每页条数
        pageIndex: 1, // 页码
        dtWinNumberInfos: [], // 请求数据
        isDownLoading: false, // 下拉刷新
        isUpLoading: false, // 上拉加载
        upFinished: false, // 上拉加载完毕
        offset: 100, // 滚动条与底部距离小于 offset 时触发load事件
        banners: []
      }
    },
    components: {
      ListItem,
      VantHeader,
      VHeader,
      [Swipe.name]: Swipe,
      [SwipeItem.name]: SwipeItem,
      [List.name]: List,
      [PullRefresh.name]: PullRefresh
    },
    created() {
      // console.log(this.lat, this.lng)
      this.getBanner()
      this.getListData()
    },
    methods: {
      selectSchool(school) {
        this.$router.push({
          path: '/VantDetail',
          query: {title: school.name, companyId: school.id}
        })
      },
      getBanner() {
        const _self = this
        this.$post('appletBanner/query').then(res => {
          // console.log(res)
          if (res.code === 0) {
            _self.banners = res.data
          }
        }).catch(error => {
          console.log(error)
        })
      },
      getListData() {
        const _self = this
        const lat = localStorage.getItem("lat");
        const lng = localStorage.getItem("lng");
        this.$post('comCompany/list', {
          'page': _self.pageIndex,
          'rows': _self.pageSize,
          'longitude': lng,
          'latitude': lat
        }).then(res => {
          // console.log(res)
          if (res.code === 0) {
            const rows = res.records
            if (rows == null || rows.length === 0) {
              // 加载结束
              _self.upFinished = true
              return
            }
            if (rows.length < this.pageSize) {
              // 最后一页不足10条的情况
              _self.upFinished = true
            }
            // 处理数据
            if (_self.pageIndex === 1) {
              _self.list = rows
            } else {
              _self.list = _self.list.concat(rows)
            }
          }
        }).catch(error => {
          console.log(error)
        }).finally(() => {
          _self.isDownLoading = false
          _self.isUpLoading = false
        })
      },
      onDownRefresh() {
        this.pageIndex = 1
        this.upFinished = false // 不写这句会导致你上拉到底过后在下拉刷新将不能触发下拉加载事件
        this.getListData() // 加载数据
      },
      // 上拉加载请求方法
      onLoadList() {
        this.pageIndex++
        this.getListData()
      }
    }
  }
</script>

<style scoped>
  .swipe {
    height: 100px;
    margin: 5px 10px;
    border-radius: 8px;
  }
</style>
