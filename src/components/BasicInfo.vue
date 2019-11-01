<template>
  <div class='info-container'>
    <div class='head'>
      <span class='head-name'>{{detailData.name}}</span>
      <div class='head-level'>
        <span class='level-text1'>年度评级:</span>
        <span class='level-text2'>{{levelStatus(detailData.level)}}</span>
        <span class='level-text1'>动态评级:</span>
        <i class='level-img'></i>
      </div>
    </div>
    <div class="head-report">
      <div class='attention-btn' bindtap='onReport' style="background-color: #F3F3F3; color: #666">
        <i class='report-img'></i>
        举报
      </div>
      <div class='attention-btn' bindtap='onFocus' style="background-color: #00b886; color: #fff">
        <i class='attention-img'></i>
        关注
      </div>
    </div>
    <div class='line'></div>
    <div class='info'>
      <div class='left-right'>
        <div class='left'>
          <span>经营者名称：</span>
          <span>许可证编号：</span>
          <span>法人代表：</span>
          <span>经营场所：</span>
          <span>主营业态：</span>
          <span>日常监督机构：</span>
          <span>发证日期：</span>
          <span>有效期至：</span>
          <span>认证信息：</span>
        </div>
        <div class='right'>
          <span>{{changeData(detailData.name)}}</span>
          <span>{{changeData(detailData.licenseNum)}}</span>
          <span>{{changeData(detailData.owner)}}</span>
          <span>{{changeData(detailData.address)}}</span>
          <span>{{schoolType(detailData.type)}}</span>
          <span>{{changeData(detailData.refName)}}</span>
          <span>{{changeData(detailData.businessStartDate)}}</span>
          <span>{{changeData(detailData.businessIndate)}}</span>
          <span :style="{color: checkStatusColor(detailData.checkStatus)}">{{checkStatus(detailData.checkStatus)}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'BasicInfo',
    data() {
      return {
        detailData: {},
        companyId: this.$route.query.companyId
      }
    },
    computed: {
      changeData() {
        return function (text) {
          if (text == null || text == "") {
            return "未填写"
          } else {
            return text
          }
        }
      },
      schoolType() {
        return function (type) {
          switch (type) {
            case 0:
              return '社会餐饮'
              break;
            case 1:
              return '集体配送'
              break;
            case 2:
              return '中央厨房'
              break;
            case 3:
              return '学校食堂'
              break;
            case 4:
              return '幼儿园食堂'
              break;
            case 5:
              return '养老院食堂'
              break;
            default:
              return
          }
        }
      },
      checkStatus() {
        return function (value) {
          switch (value) {
            case -1:
              return '待完善'
              break;
            case 0:
              return '待审核'
              break;
            case 1:
              return '审核通过'
              break;
            case 2:
              return '审核不通过'
              break;
            default:
              return
          }
        }
      },
      checkStatusColor() {
        return function (value) {
          switch (value) {
            case -1:
              return '#FF8D33'
              break;
            case 0:
              return '#FF8D33'
              break;
            case 1:
              return '#00B886'
              break;
            case 2:
              return '#FF4C21'
              break;
            default:
              return
          }
        }
      },
      levelStatus() {
        return function (value) {
          switch (value) {
            case 1:
              return 'A级'
              break;
            case 2:
              return 'B级'
              break;
            case 3:
              return 'C级'
              break;
            case 4:
              return 'D级'
              break;
            default:
              return
          }
        }
      }
    },
    created() {
      this.getDetail()
    },
    methods: {
      getDetail() {
        const _self = this
        const openId = localStorage.getItem("openId")
        this.$post('comCompany/getDetail',{
          'companyId': _self.companyId,
          'openId': openId
        }).then(res => {
          console.log(res)
          if (res.code === 0) {
            _self.detailData = res.data
          }
        }).catch(error => {
          console.log(error)
        })
      }
    }
  }
</script>

<style scoped>
  .info-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 12px;
  }

  .head {
    display: flex;
    flex-direction: column;
    width: 100%;
    /* margin-top: 17rpx; */
  }

  .head-name {
    font-size: 16px;
    color: #333;
    font-weight: bold;
  }

  .head-level {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 12px;
    height: 18px;
  }

  .level-text1 {
    font-size: 13px;
    color: #666;
  }

  .level-text2 {
    width: 22px;
    border-radius: 2px;
    border: 1px solid rgba(255, 112, 104, 1);
    font-size: 10px;
    color: rgba(255, 112, 104, 1);
    margin: 0 10px;
    text-align: center;
  }

  .level-img {
    width: 12px;
    height: 12px;
    margin-left: 5px;
    background-image: url('../assets/img/a.png');
    background-repeat:no-repeat;
    background-size:100% 100%;
  }

  .head-report {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-top: 12px;
  }

  .attention-btn {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 26px;
    border-radius: 13px;
    font-size: 14px;
    padding: 0 12px;
  }

  .attention-btn::after {
    border: none;
  }

  .report-img {
    width: 11px;
    height: 11px;
    margin-right: 5px;
    background-image: url('../assets/img/report.png');
    background-repeat:no-repeat;
    background-size:100% 100%;
  }

  .attention-img {
    width: 11px;
    height: 11px;
    margin-right: 5px;
    background-image: url('../assets/img/add_focus.png');
    background-repeat:no-repeat;
    background-size:100% 100%;
  }

  .line {
    width: 100%;
    height: 1px;
    background-color: #dedede;
    margin-top: 15px;
  }

  .info {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .left-right {
    display: flex;
    flex-direction: row;
    margin-top: 5px;
  }

  .left {
    display: flex;
    flex-direction: column;
    width: 96px;
  }

  .left span {
    font-size: 13px;
    font-weight: 500;
    color: #666;
    margin-top: 10px;
  }

  .right {
    display: flex;
    flex-direction: column;
  }

  .right span {
    font-size: 13px;
    color: #333;
    margin-top: 10px;
  }
</style>
