import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import store from './store'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import ColumnDetail from './views/ColumnDetail.vue'

import App from './App.vue'

const routerHistory = createWebHistory()
const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      name: 'home',
      component:Home
    },
    {
      path: '/login',
      name: 'login',
      component:Login
    },
    {
      path: '/column/:id',
      name: 'column',
      component:ColumnDetail
    }
  ]
})

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
