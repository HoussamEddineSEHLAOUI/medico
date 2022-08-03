import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

/* Layouts */
const Layout = () => import('../layouts/Layout')

// About page
// const About = () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')

// Mes Dossier
const NouveauDossierView = () => import(/* webpackChunkName: "about" */ '../views/MesDossier/NouveauDossierView')

const childRoutes = (prop, mode) => [
  {
    path: '/',
    name: prop + '.list',
    meta: { auth: true, name: 'Social App' },
    component: NouveauDossierView
  }
]

const routes = [
  {
    path: '/',
    name: 'home',
    component: Layout,
    children: childRoutes('social')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
