
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') }
    ]
  },
  {
    path: '/teste',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/TestePage.vue') }
    ]
  },
  {
    path: '/dashboard',
    component: () => import('layouts/DashBoardLayout.vue'),
    children: [
      { path: '', component: () => import('pages/DashBoard.vue') }
    ]
  },
  {
    path: '/login',
    component: () => import('pages/LoginPage.vue'),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
