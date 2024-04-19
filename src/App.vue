<template>
  <Loading v-if="load" />
  <main v-else>
      <Header />
        <!-- Use a custom transition or fallback to `fade` -->
        <Transition name="anime-page" mode="out-in">
          <router-view />
        </Transition>
      <Footer v-show="!$route.path.includes('login') || !$route.path.includes('register')" />
  </main>
</template>
<script>
// @ is an alias to /src
import { defineAsyncComponent } from 'vue'
export default {
  name: 'app',
  data() {
    return {
      load:true
    };
  },
  components: {
    Loading: defineAsyncComponent( () => import(/* webpackChunkName: "App" */'@/components/Global/Loading.vue') ),
    Header: defineAsyncComponent( () => import(/* webpackChunkName: "App" */'@/components/Common/Header.vue') ),
    Footer: defineAsyncComponent( () => import(/* webpackChunkName: "App" */'@/components/Common/Footer.vue') ),
  },
  created(){
    setTimeout(() => {
      this.load = false
    }, 500);
  },
//   watch:{
//     $route (to, from){
//       $("html, body").animate({scrollTop: 0}, 500);
//     }
// } 
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@200;300;400;500;700;800;900&display=swap');
.anime-page-enter-active,
.anime-page-leave-active {
  transition: 0.6s ease;
}
.anime-page-enter-from,
.anime-page-leave-to {
  transform: translateY(-100px);
  
}
#app {
  font-family: "Tajawal";
}
</style>
