<template>
    <header id="nav">
        <div class="container">
         <div class="row">
            <router-link class="col-md-2"  to="/">
                <img class="w-100" src="@/assets/img/Logo.png" alt="Logo">
            </router-link >
            <div class="col-md-2"></div>
            <div class="col-md-8 d-flex align-items-center">
                <ul class="links">
                <li v-for="item in Links" :key="item.id"> 
                    <router-link  :to="item.url">
                        {{ item.title }}
                    </router-link>
                </li>
            </ul>
            </div>
         </div>
        </div>
    </header>
</template>
<script>
// import { defineAsyncComponent } from 'vue'
export default {
    data(){
        return{
            Links:[
            {
                    id: 1,
                        title: 'Home',
                        url: '/',
                },
                {
                    id: 2,
                        title: 'Movies',
                        url: '/movies-list',
                },
                {
                    id: 3,
                        title: 'Add Movie',
                        url: '/movie-add',
                },
               
            ]
        }
    },
    components: {
    },

}
</script>
<style lang="scss"></style>
