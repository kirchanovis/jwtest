import Vue from 'vue'
import Router from 'vue-router'
import Books from '../containers/books.vue'
import Plans from '../containers/plans.vue'
import Finished from '../containers/finished.vue'
import Page404 from '../components/p404.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Books',
      component: Books
    },
    {
      path: '/read/:id',
      name: 'Books',
      component: Books
    },
    {
      path: '/read/:id/plans',
      name: 'Plans',
      component: Plans
    },
    {
      path: '/read/:id/finished/',
      name: 'Finished',
      component: Finished
    },
    {
      path: '*',
      name: '404',
      component: Page404
    }
  ]
})
