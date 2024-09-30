import Layout from '@/layouts/index.vue'

export default [
  {
    path: '/kiseki',
    component: Layout,
    redirect: '/kiseki/kai',
    name: 'kiseki',
    meta: {
      title: '轨迹'
    },
    children: [
      {
        path: 'kai',
        name: 'kainokiseki',
        component: () => import('@/views/calvard/XiphaView3.vue'),
        meta: {
          title: '界之轨迹'
        }
      }
    ]
  }
]
