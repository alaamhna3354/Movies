<template>
    <div class="movies">
      <HeadSections :TitlePage="$route.name" PathPageFrom="Home" :PathPageTo="$route.name" />
      <div class="container">
       <Add />
      </div>
    </div>
  </template>
  
  <script>
  import { defineAsyncComponent } from 'vue'
  export default {
    name: 'Add Movies',
    data() {
      return {
      }
    },
    components: {
      HeadSections: defineAsyncComponent(() => import(/* webpackChunkName: "App" */'@/components/Global/HeadSection.vue')),
      Add: defineAsyncComponent(() => import(/* webpackChunkName: "App" */'@/components/Movies/Add.vue')),

    },
  
  }
  </script>
  