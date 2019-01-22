import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import Article from '@/pages/article'
import articleList from '@/pages/articleList'
import imgList from '@/pages/imgList'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children: [
        
      ]
    },
    {
      path: '/article/:id',
      name: 'Article',
      component: Article
    },
    {
      path: '/articleList',
      name: 'articleList',
      component: articleList
    },
    {
      path: '/imgList',
      name: 'imgList',
      component: imgList
    }
  ]
})
