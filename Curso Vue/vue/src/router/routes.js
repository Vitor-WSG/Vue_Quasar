
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'condicionais',name:"condicionais", component: () => import('pages/Condicionais.vue') },
      { path: 'databind',name:"databind", component: () => import('pages/DataBind.vue') },
      { path: 'twowaydatabind',name:"twowaydatabind", component: () => import('pages/TwoWayDataBind.vue') },
      { path: 'eventos',name:"eventos", component: () => import('pages/Eventos.vue') },
      { path: 'computadas',name:"computadas", component: () => import('pages/PropComputadas.vue') },
      { path: 'observables',name:"observables", component: () => import('pages/Observables.vue') },
      { path: 'lifecycle',name:"lifecycle", component: () => import('pages/LifeCycleComponents.vue') },
    ]
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
