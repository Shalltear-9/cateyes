import Vue from 'vue';
import VueRouter from 'vue-router';


// 去除重复点击时的警告
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
};

// 使用vue-router
Vue.use(VueRouter);

const routes=[
  //重定向
  {
    path:'/',
    redirect:'/index/hot'
  },
  {
    path:'/index',
    component:()=>import('../views/Index.vue'),
    children:[
      {
        path:'/index',
        redirect:'/index/hot'
      },
      {
        path:'hot',
        component:()=>import('../components/index/Hot.vue')
      },
      {
        path:'movie',
        component:()=>import('../components/index/Movie.vue')
      },
      {
        path:'backlog',
        component:()=>import('../components/index/Backlog.vue')
      },
      {
        path:'classical',
        component:()=>import('../components/index/Classical.vue')
      }
    ]
  },
  {
    path:'/vedio',
    component:()=>import('../views/Vedio.vue')
  },
  {
    path:'/minivedio',
    component:()=>import('../views/MiniVedio.vue')
  },
  {
    path:'/show',
    component:()=>import('../views/Show.vue')
  },
  {
    path:'/mine',
    component:()=>import('../views/Mine.vue')
  },
  {
    path:'/detail/:id',
    component:()=>import('../views/Detail.vue')
  },
  {
    path:'/cities',
    component:()=>import('../views/CityList.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router