import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
/* Layouts */
const Layout = () => import('../layouts/Layout')
const AuthLayout = () => import('../layouts/AuthLayouts/AuthLayout')
const HomeView = () => import('@/views/HomeView.vue')
// Mes Dossier
const NouveauDossierView = () => import('../views/MesDossier/NouveauDossierView')
const ListDossierView = () => import('../views/MesDossier/ListDossierView')
/* Authentic View */
const SignIn = () => import('../views/AuthPages/Default/SignIn1')
const SignUp = () => import('../views/AuthPages/Default/SignUp1')
const RecoverPassword1 = () => import('../views/AuthPages/Default/RecoverPassword1')
const LockScreen1 = () => import('../views/AuthPages/Default/LockScreen1')
const ConfirmMail1 = () => import('../views/AuthPages/Default/ConfirmMail1')
/* User View */
const Profile = () => import('../views/User/Profile')
const ProfileEdit = () => import('../views/User/ProfileEdit')
const AddUser = () => import('../views/User/AddUser')
const AccountSettings = () => import('../views/User/AccountSetting')
// chat View
const ChatIndex = () => import('../views/Chat/Index')

const childRoutes = (prop, mode) => [
  {
    path: '/newFile',
    name: prop + '.NewFile',
    meta: { auth: true, name: 'Medico App' },
    component: NouveauDossierView
  },
  {
    path: '/listfiles',
    name: prop + 'listfiles',
    meta: { auth: true, name: 'listfiles' },
    component: ListDossierView
  },
  {
    path: '/account-setting',
    name: 'accountSetting',
    meta: { auth: true, name: 'AccountSettings' },
    component: AccountSettings
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

const authChildRoutes = (prop, mode = false) => [
  {
    path: 'signIn',
    name: prop + '.sign-in1',
    meta: { auth: true },
    component: SignIn
  },
  {
    path: 'signUp',
    name: prop + '.sign-up1',
    meta: { auth: true },
    component: SignUp
  },
  {
    path: 'password-reset',
    name: prop + '.password-reset',
    meta: { auth: true },
    component: RecoverPassword1
  },
  {
    path: 'lock-screen1',
    name: prop + '.lock-screen1',
    meta: { auth: true },
    component: LockScreen1
  },
  {
    path: 'confirm-mail1',
    name: prop + '.confirm-mail1',
    meta: { auth: true },
    component: ConfirmMail1
  }
]

const appChildRoute = (prop, mode = false) => [
  {
    path: 'chat',
    name: prop + '.chat',
    meta: { auth: true, name: 'Chat' },
    component: ChatIndex
  }
]

const routes = [
  {
    path: '/',
    name: 'homepage',
    component: HomeView
  },
  {
    path: '/app',
    name: 'medico',
    component: Layout,
    children: childRoutes('social')
  },
  {
    path: '/auth',
    name: 'auth',
    component: AuthLayout,
    meta: { auth: true },
    children: authChildRoutes('auth')
  },
  {
    path: '/user',
    name: 'user',
    component: Layout,
    children: userChildRoute('user')
  },
  {
    path: '/app',
    name: 'app',
    component: Layout,
    meta: { auth: true },
    children: appChildRoute('app')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
