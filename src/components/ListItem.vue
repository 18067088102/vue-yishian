<template>
  <div>
    <div class="item-container" @click="selectItem(item)" v-for="(item,index) in school" :key="index">
      <div class='img-container'>
        <img :src="url" class="head-img" />
        <div class='camera-status'>
          <i class='camera-img'></i>
          <span class='camera-text'>{{item.video==1?'在线':'离线'}}</span>
        </div>
      </div>
      <div class="content-part">
        <div class='name-container'>
          <span class='name-text'>{{item.name}}</span>
        </div>
        <div class='addr-container'>
          <div class='addr-left'>
            <i class='addr-img'></i>
            <span class='addr-text'>{{item.address}}</span>
          </div>
          <div class='addr-right'>
            <span class='addr-distance'>{{(item.distance/1000).toFixed(2)}}km</span>
          </div>
        </div>
        <div class='star-container'>
          <star :size="24" :score="5"></star>
          <span class='level-text'>A级</span>
          <i class='level-img'></i>
        </div>
        <div class='type-container'>
          <span class='type-text'>{{item.type}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Star from "./Star"

  export default {
    name: 'ListItem',
    components: {Star},
    props: {
      school: {
        type: Array
      }
    },
    data() {
      return {
        url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545394714948&di=86c61a83d1b51b68fbd6f8884c4880e1&imgtype=0&src=http%3A%2F%2Fc.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F2f738bd4b31c870173d4b35d2a7f9e2f0708ff2f.jpg'
      }
    },
    methods: {
      selectItem(item) {
        this.$emit('select', item)
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../common/stylus/mixin.styl"

  .item-container
    display: flex
    flex-direction: row
    align-items: center
    box-sizing: border-box
    border-1px(#f3f3f3)
    padding: 10px
    width: 375px
    height: 110px
    .img-container
      position: relative
      .head-img
        width: 90px
        height: 90px
        border-radius: 5px
      .camera-status
        position: absolute
        left: 0
        bottom: 3px
        display: flex
        flex-direction: row
        align-items: center
        justify-content: center
        width: 35px
        height: 12px
        background: rgba(0, 0, 0, 1)
        border-radius: 0 5px 0 5px
        opacity: 0.66
        z-index: 10
        .camera-img
          background-image: url('../assets/img/online.png')
          background-repeat:no-repeat
          background-size:100% 100%
          width: 8px
          height: 5px
          margin-right: 3px
        .camera-text
          font-size: 6px
          color: #fff
    .content-part
      width: 255px
      height: 85px
      margin-left: 10px
      display: flex
      flex-direction: column
      justify-content: space-between
      .name-container
        display: flex
        flex-direction: row
        align-items: center
        .name-text
          color: #333
          font-size: 16px
          font-weight: 500
          width: 255px
          overflow: hidden
          text-overflow: ellipsis
          white-space: nowrap
      .addr-container
        display: flex
        flex-direction: row
        align-items: center
        justify-content: space-between
        width: 255px
        .addr-left
          display: flex
          flex-direction: row
          align-items: center
          justify-content: center
          overflow: hidden
          text-overflow: ellipsis
          white-space: nowrap
          .addr-img
            background-image: url('../assets/img/location.png')
            background-repeat:no-repeat
            background-size:100% 100%
            width: 10px
            height: 12px
            margin-right: 3px
          .addr-text
            font-size: 13px
            font-weight: 400
            color: #666
            overflow: hidden
            text-overflow: ellipsis
            white-space: nowrap
            margin-right: 5px
        .addr-right
          .addr-distance
            font-size: 13px
            font-weight: 500
            color: #666
      .star-container
        display: flex
        flex-direction: row
        align-items: center
        .level-text
          width: 22px
          border-radius: 2px
          border: 1px solid rgba(255, 112, 104, 1)
          font-size: 10px
          color: rgba(255, 112, 104, 1)
          margin: 0 10px
          text-align: center
        .level-img
          background-image: url('../assets/img/a.png')
          background-repeat:no-repeat
          background-size:100% 100%
          width: 12px
          height: 12px
      .type-container
        display: flex
        flex-direction: row
        align-items: center
        .type-text
          font-size: 13px
          color: #666

</style>
