import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '@/components/views/HomeView'
import CreatePostView from '@/components/views/CreatePost'
import PostDetailsView from '@/components/views/PostDetailsView'
import EditPostView from '@/components/views/EditPostView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/post/create',
      name: 'createPost',
      component: CreatePostView
    },
    {
      path: '/post/:id',
      name: 'viewPost',
      component: PostDetailsView
    },
    {
      path: '/post/edit/:id',
      name: 'editPost',
      component: EditPostView
    }
  ]
})
