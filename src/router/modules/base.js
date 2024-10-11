import Layout from '@/layouts/index.vue'

export default [
  {
    path: '/kiseki',
    component: Layout,
    redirect: '/kiseki/kurotwo',
    name: 'kiseki',
    meta: {
      title: '轨迹'
    },
    children: [
      {
        path: 'kai',
        name: 'kainokiseki',
        component: () => import('@/views/calvard/Kai/KaiView.vue'),
        meta: {
          title: '界之轨迹'
        }
      },
      {
        path: 'kurotwo',
        name: 'kuronokisekitwo',
        component: () => import('@/views/calvard/Kurotwo/KurotwoView.vue'),
        meta: {
          title: '黎之轨迹2'
        }
      }
    ]
  }
]
