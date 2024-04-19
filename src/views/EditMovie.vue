<template>
    <div class="movies">
      <HeadSections :TitlePage="$route.name" PathPageFrom="Home" :PathPageTo="$route.name" />
      <div class="container">
       <Edit />
      </div>
    </div>
  </template>
  
  <script>
  import { defineAsyncComponent } from 'vue'
  export default {
    name: 'Edit Movies',
    data() {
      return {
      }
    },
    components: {
      HeadSections: defineAsyncComponent(() => import(/* webpackChunkName: "App" */'@/components/Global/HeadSection.vue')),
      Edit: defineAsyncComponent(() => import(/* webpackChunkName: "App" */'@/components/Movies/Edit.vue')),

    },
  
  }
  </script>
  