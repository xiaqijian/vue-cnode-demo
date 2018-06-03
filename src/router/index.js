import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import demo from '@/components/demo'
import topic from '@/components/topic'
import login from '@/components/login'

Vue.use(Router)
let router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/demo',
      name: 'demo',
      component: demo
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/topic/:id',
      name: 'topic',
      component: topic
    }
  ]
})

router.beforeEach((to, from, next) => {
  console.log(to)
  // if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
  //   if (store.state.token) {  // 通过vuex state获取当前的token是否存在
  //     next();
  //   }
  //   else {
  //     next({
  //       path: '/login',
  //       query: { redirect: to.fullPath }  // 将跳转的路由path作为参数，登录成功后跳转到该路由
  //     })
  //   }
  // }
  // else {
  next()
  // }
})

export default router
