import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

/* Layouts */
const Layout = () => import('../layouts/Layout')

// About page
// const About = () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')

// Mes Dossier
const NouveauDossierView = () => import('../views/MesDossier/NouveauDossierView')
const ListDossierView = () => import('../views/MesDossier/ListDossierView')
/* User View */
const Profile = () => import('../views/User/Profile')
const ProfileEdit = () => import('../views/User/ProfileEdit')
const AddUser = () => import('../views/User/AddUser')

const childRoutes = (prop, mode) => [
  {
    path: '/',
    name: prop + '.NewFile',
    meta: { auth: true, name: 'Medico App' },
    component: NouveauDossierView
  },
  {
    path: '/listfiles',
    name: prop + 'listfiles',
    meta: { auth: true, name: 'listfiles' },
    component: ListDossierView
  }
]

const userChildRoute = (prop, mode = false) => [
  {
    path: 'profile',
    name: prop + '.profile',
    meta: { auth: true, name: 'Profile' },
    component: Profile
  },
  {
    path: 'profile-edit',
    name: prop + '.edit',
    meta: { auth: true, name: 'Edit Profile' },
    component: ProfileEdit
  },
  {
    path: 'add-user',
    name: prop + '.add',
    meta: { auth: true, name: 'Add Profile' },
    component: AddUser
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
    path: '/user',
    name: 'user',
    component: Layout,
    meta: { auth: true },
    children: userChildRoute('user')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
