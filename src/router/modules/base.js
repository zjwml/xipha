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
        component: () => import('@/views/Calvard/Kai/KaiView.vue'),
        meta: {
          orbment: 'Xipha',
          title: '界之轨迹'
        }
      },
      {
        path: 'kurotwo',
        name: 'kuronokisekitwo',
        component: () => import('@/views/Calvard/Kurotwo/KurotwoView.vue'),
        meta: {
          orbment: 'Xipha',
          title: '黎之轨迹2'
        }
      }
    ]
  }
]
