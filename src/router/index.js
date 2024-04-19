import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    redirect: '/movies-list',
    name: 'Home Page' ,
    component: () => import(/* webpackChunkName: "App" */'../views/Home.vue'),
    meta: {
      title: 'Home Page' ,
      metaTags: [
        {
          name: 'description',
          content:'description',
        },
        {
         name: 'keywords',
         content: 'keywords',
        }
      ]
        },
  },
   
  // ___________________ Movies List  ___________________
  {
    path: '/movies-list',
    name: 'Movies List',
    component: () => import(/* webpackChunkName: "App" */'../views/Movies.vue'),
    meta: {
      title:'Movies List' ,
    }
  },
  // ___________________ Show Movie  ___________________
  {
    path:'/movies/:id/:title',
    name: 'Movie Show',
    component: () => import(/* webpackChunkName: "App" */'../views/View_Movie.vue'),
   },
  // ___________________ Movies Add  ___________________
  {
    path: '/movie-add',
    name: 'Add Movie',
    component: () => import(/* webpackChunkName: "App" */'../views/AddMovie.vue'),
    meta: {
      title:'Add Movie' ,
    }
  },
  // ___________________ Movies Edit  ___________________
  {
    path: '/movies/edit/:id/:title',
    name: 'Edit Movie',
    component: () => import(/* webpackChunkName: "App" */'../views/EditMovie.vue'),
    meta: {
      title:'Edit Movie' ,
    }
  },
  
  // ___________________ 404 page  ___________________
  { 
    path: '/:pathMatch(.*)*',
    name: 'error',
    component: () => import(/* webpackChunkName: "App" */'../views/Error.vue')
 },  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
//  for meta title
router.beforeResolve((to, from) => {
  document.title = to.meta.title || "Namaa"
  if(to.meta.hasOwnProperty('metaTags')) {
    for(let x=0; x < to.meta.metaTags.length; x++) {
      let oldMeta = document.getElementsByTagName('meta');
      for(let m=0; m < oldMeta.length; m++) {
        if(oldMeta[m].name == to.meta.metaTags[x].name) {
          oldMeta[m].remove()
        }
      }
      let meta = document.createElement('meta')
      if(to.meta.metaTags[x] && to.meta.metaTags[x].hasOwnProperty('name')) {
        meta.name = to.meta.metaTags[x].name
        meta.content = to.meta.metaTags[x].content
      }
      if(to.meta.metaTags[x].hasOwnProperty('property')) {
        meta.property = to.meta.metaTags[x].name
        meta.content = to.meta.metaTags[x].content
      }
      document.head.appendChild(meta)
    }
  }
  // next()
})
export default router
