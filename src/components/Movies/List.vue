<template>
  <div class="list-movies">
    <div class="container">
      <div class="row">
        <div class="col-md-3 mb-5" v-for="item in List" :key="item.id">
          <!-- **************** start movie item **************** -->
          <div class="item">
            <ImgCom :SrcImg="item.Poster" />
            <div class="info">
              <h2 class="title">{{ item.Title }}</h2>
              <div class="d-flex justify-content-between">
                <span class="year">
                  <strong>Year :</strong>
                  {{ item.Year }}
                </span>
                <span class="actors-num">
                  <strong>Actors :</strong>
                  {{ item.actors.length }}
                </span>
              </div>
            </div>
            <router-link class="btn-main" :to="`/movies/${item.id}/${item.Title}`">
              Show
            </router-link>
          </div>
          <!-- **************** end movie item **************** -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {
  props:{
    List:Array
  },
  components: {
    ImgCom: defineAsyncComponent(() => import(/* webpackChunkName: "App" */'@/components/Global/ImgCom.vue')),

  },
  data() {
    return {

    };
  },

}
</script>