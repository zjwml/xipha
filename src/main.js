/*
 * @Autor: zhenjun
 * @Date: 2024-09-30 10:48:28
 * @LastEditors: zhenjun
 * @LastEditTime: 2024-09-30 16:28:20
 * @Description:
 */
import './assets/main.css'

import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import { store } from './store'

// 引入组件库的少量全局样式变量
import 'tdesign-vue-next/es/style/index.css'

const app = createApp(App)

app.use(store)
app.use(router)

app.mount('#app')
