
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'condicionais',name:"condicionais", component: () => import('pages/Condicionais.vue') },
      { path: 'databind',name:"databind", component: () => import('pages/DataBind.vue') },
      { path: 'twowaydatabind',name:"twowaydatabind", component: () => import('pages/TwoWayDataBind.vue') },
      { path: 'eventos',name:"eventos", component: () => import('pages/Eventos.vue') }
      // { path: 'for',name:"for", component: () => import('pages/For.vue') },
    ]
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
