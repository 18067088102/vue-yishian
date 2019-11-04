<template>
  <div class='liveImg-container'>
    <div class='img-text' bindtap="onVideoTap">
      <i class="live-img-active"></i>
      <span class="live-text-active">aaa</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'SurveillanceVideo',
    data() {
      return {
        companyId: this.$route.query.companyId
      }
    },
    created() {
      this.getVideoLink()
    },
    methods: {
      getVideoLink() {
        const _self = this
        this.$post('comCompany/videoLink',{
          'companyId': _self.companyId
        }).then(res => {
          console.log(res)
          if (res.code === 0) {
            if (res.data.length === 0) {
              this.$toast('暂无视频直播')
            } else{

            }
          }
        }).catch(error => {
          console.log(error)
        })
      }
    }
  }
</script>

<style scoped>
  .liveImg-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    padding: 10px;
  }

  .img-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: 13px;
    position: relative;
  }

  .live-img {
    width: 107px;
    height: 55px;
    margin-top: 15px;
    border-radius: 4px;
  }

  .live-img-active {
    background-image: url('../assets/img/photo.png');
    background-repeat:no-repeat;
    background-size:100% 100%;
    width: 107px;
    height: 55px;
    margin-top: 15px;
    border: 1px solid #00b886;
    border-radius: 4px;
    opacity: 0.5957;
  }

  .live-text {
    font-size: 14px;
    color: #333;
    text-align: center;
    margin-top: 5px;
  }

  .live-text-active {
    font-size: 14px;
    color: #00B886;
    text-align: center;
    margin-top: 5px;
  }
</style>
