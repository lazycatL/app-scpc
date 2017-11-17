import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/view/login'
import Index from '@/view/index'
// import HelloWorld from '@/components/HelloWorld'
import Personal from '@/view/rygl/Personal'
import jgryjg from '@/view/jsgl/jgryjg'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/personal',
      name: 'Personal',
      component: Personal
    },
    {
      path: '/jgryjg',
      name: 'Jgryjg',
      component: jgryjg
    }
  ]
})
