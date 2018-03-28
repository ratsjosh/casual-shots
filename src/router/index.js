import Vue from 'vue'
import Router from 'vue-router'
import Gallery from '@/components/Gallery'
import AddPicture from '@/components/AddPicture'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Gallery',
      component: Gallery
    },
    {
      path: '/add-picture',
      name: 'AddPicture',
      component: AddPicture
    }
  ]
})
