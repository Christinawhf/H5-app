import Vue from 'vue'
import Router from 'vue-router'
import mainStart from '../components/main/mainStart.vue'
import mainMaking from '../components/main/mainMaking.vue'
import publish from '../components/main/publish.vue'
import share from '../components/main/share.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component:mainStart
    },
    {
      path: '/mainMaking',
      component:mainMaking
    },
    {
      path: '/publish',
      component:publish
    },
    {
      path: '/share',
      component:share
    }
  ]
})
