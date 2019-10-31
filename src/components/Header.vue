<template>
  <div class="navi">
    <i class="back-image" v-show="showBackBtn" @click="returnBack"></i>
    <h1 class="title">{{title}}</h1>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'Header',
    props: {
      title: {
        type: String
      },
      showBackBtn: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      returnBack() {
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped>
  .navi {
    width: 100%;
    height: 64px;
    line-height: 64px;
    background: #fff;
  }

  .back-image {
    position: absolute;
    top: 24px;
    left: 8px;
    width: 18px;
    height: 18px;
    background-image: url('../assets/img/back.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }

  .title {
    font-size: 18px;
    font-weight: 500;
    color: rgba(0, 0, 0, 1);
    text-align: center;
  }
</style>
