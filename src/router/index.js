/*
 * @Autor: zhenjun
 * @Date: 2024-09-30 10:48:28
 * @LastEditors: zhenjun
 * @LastEditTime: 2024-09-30 15:13:18
 * @Description:
 */
import { createRouter, createWebHashHistory } from 'vue-router'

const env = import.meta.env.MODE || 'development'

// 导入base相关固定路由
const baseModules = import.meta.glob('./modules/**/base.js', { eager: true })

// 其他固定路由
const defaultRouterList = [
  // {
  //   path: '/xipha3',
  //   name: 'xipha3',
  //   component: () => import('@/views/calvard/XiphaView3.vue')
  // },
  {
    path: '/',
    redirect: '/kiseki/kai'
  }
]
// 存放固定路由
export const baseRouterList = mapModuleRouterList(baseModules)

export const allRoutes = [...baseRouterList, ...defaultRouterList]

// 固定路由模块转换为路由
export function mapModuleRouterList(modules) {
  const routerList = []
  Object.keys(modules).forEach((key) => {
    // @ts-ignore
    const mod = modules[key].default || {}
    const modList = Array.isArray(mod) ? [...mod] : [mod]
    routerList.push(...modList)
  })
  return routerList
}

export const getActive = (maxLevel = 3) => {
  // 非组件内调用必须通过Router实例获取当前路由
  const route = router.currentRoute.value

  if (!route.path) {
    return ''
  }

  return route.path
    .split('/')
    .filter((_item, index) => index <= maxLevel && index > 0)
    .map((item) => `/${item}`)
    .join('')
}

const router = createRouter({
  history: createWebHashHistory(
    env === 'site' ? '/starter/vue-next/' : import.meta.env.VITE_BASE_URL
  ),
  routes: allRoutes,
  scrollBehavior() {
    return {
      el: '#app',
      top: 0,
      behavior: 'smooth'
    }
  }
})

router.beforeEach((to, from, next) => {
  //beforeEach是router的钩子函数，在进入路由前执行
  if (to.meta.title && to.meta.orbment) {
    //判断是否有标题
    document.title = `${to.meta.title} - ${to.meta.orbment} 模拟器`
  }
  next() //执行进入路由，如果不写就不会进入目标页
})

export default router
