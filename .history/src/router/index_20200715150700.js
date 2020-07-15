import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import First from '@/components/first'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'first',
      component: First
    },
    {
      path: '',
      name: 'helloWorld',
      component: HelloWorld
    }
  ]
})
