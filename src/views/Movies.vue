<template>
  <div class="movies">
    <HeadSections :TitlePage="$route.name" PathPageFrom="Home" :PathPageTo="$route.name" />
    <div class="container">
      <div class="filtering">
        <div class="row">
          <div class="col-md-4">
            <label for="title">Filter By Title</label>
            <input v-model="search" name="title" id="title" type="text" placeholder="Filter By Title...">
          </div>
          <div class="col-md-4">
            <label for="year">Filter By Year</label>
            <select v-model="years_value" name="year" id="year">
              <option value="">All</option>
              <option :value="item" v-for="(item, index) in years" :key="index">{{ item }}</option>
            </select>
          </div>
          <div class="col-md-4">
            <label for="actors-number">Filter By number of actors</label>
            <select v-model="actors_num" name="actors-number" id="actors-number">
              <option value="">All</option>
              <option :value="index + 1" v-for="(item, index) in 20" :key="index">{{ index + 1 }}</option>
            </select>
          </div>
        </div>
      </div>
      <h2 class="text-center mb-3" > Movies (<span style="color: #5a328f;">{{ filteredMovies.length }}</span>) item</h2>
      <List :List="filteredMovies" />
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import { mapState } from 'vuex';
export default {
  name: 'Movies',
  data() {
    return {
      search: '',
      years_value: '',
      actors_num:''
    }
  },
  components: {
    List: defineAsyncComponent(() => import(/* webpackChunkName: "App" */'@/components/Movies/List.vue')),
    HeadSections: defineAsyncComponent(() => import(/* webpackChunkName: "App" */'@/components/Global/HeadSection.vue')),
  },
  computed: {
    ...mapState(['List']),

    years() {
      const year = new Date().getFullYear()
      return Array.from({ length: year - 1990 }, (value, index) => 1991 + index);
    },
    filteredMovies() {
      // filter stores by search 
      if (this.search != '')
        return this.List.filter((el) => {
          var regex = new RegExp(this.search, 'i');
          return el.Title.match(regex);
        });
      else if (this.years_value != '')
        return this.List.filter((el) => {
          return el.Year == this.years_value ;
        });
        else if (this.actors_num != '')
        return this.List.filter((el) => {
          return el.actors.length == this.actors_num ;
        });
        else{
          return this.List;
        }
    },
  }
}
</script>
