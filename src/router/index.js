import Vue from 'vue'
import Router from 'vue-router'
import Vant from '../components/Vant'
import VantDetail from '../components/VantDetail'
import HelloWorld from '@/components/HelloWorld'
import BasicInfo from '../components/BasicInfo'
import LicenseInfo from '../components/LicenseInfo'
import SurveillanceVideo from '../components/SurveillanceVideo'
import DailyRecipes from '../components/DailyRecipes'

/**
 * 重写路由的push方法
 */
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: Vant
    },
    {
      path: '/Vant',
      name: 'Vant',
      component: Vant
    },
    {
      path: '/VantDetail',
      name: 'VantDetail',
      component: VantDetail,
      children: [
        {
          path: '/',
          redirect: BasicInfo
        },
        {
          path: '/BasicInfo',
          name: 'BasicInfo',
          component: BasicInfo
        },
        {
          path: '/LicenseInfo',
          name: 'LicenseInfo',
          component: LicenseInfo
        },
        {
          path: '/SurveillanceVideo',
          name: 'SurveillanceVideo',
          component: SurveillanceVideo
        },
        {
          path: '/DailyRecipes',
          name: 'DailyRecipes',
          component: DailyRecipes
        }
      ]
    }
  ]
})
