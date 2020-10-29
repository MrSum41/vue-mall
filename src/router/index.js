import Vue from 'vue'
import VueRouter from 'vue-router'


//懒加载
const Home = () => import('../views/home/Home')
const Cart = () => import('../views/cart/Cart')
const Category = () => import('../views/category/Category')
const Me = () => import('../views/me/Me')

//安装插件
Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirectL: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/me',
    component: Me
  },
]


//创建路由
const router = new VueRouter({
  routes,
  mode: 'history'
})

//导出
export default router
