/*
 * @Autor: zhenjun
 * @Date: 2024-09-30 15:44:47
 * @LastEditors: zhenjun
 * @LastEditTime: 2024-09-30 15:56:55
 * @Description:
 */
import { createPinia } from 'pinia'

const store = createPinia()

export { store }

export * from './modules/version'

export default store
