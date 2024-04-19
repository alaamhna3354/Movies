<template>
    <HeadSections :TitlePage="$route.name" PathPageFrom="Home" :PathPageTo="`Movies List / ${$route.params.title}`" />
    <div class="container">
        <div class="row list-movies">
            <div class="col-md-4 mb-5 m-auto">
                <!-- **************** start movie item **************** -->
                <div class="item">
                    <ImgCom :SrcImg="filterd_Movies[0].Poster" />
                    <div class="info">
                        <h2 class="title">{{ filterd_Movies[0].Title }}</h2>
                        <div class="d-flex justify-content-between">
                            <span class="year">
                                <strong>Year :</strong>
                                {{ filterd_Movies[0].Year }}
                            </span>
                            <span class="actors-num">
                                <strong>Actors :</strong>
                                {{ filterd_Movies[0].actors.length }}
                            </span>
                        </div>
                        <p>
                            <span class="actors-num">
                                <strong>Description :</strong>
                                {{ filterd_Movies[0].Description }}
                            </span>
                        </p>
                    </div>
                </div>

                <!-- **************** end movie item **************** -->
            </div>
            <div class="col-md-8 mb-3">
                <div class="actors-list">
                    <div class="row">
                        <div class="col-12">
                            <h2>Actors List :</h2>
                        </div>
                        <div class="col-md-6" v-for="item in filterd_Actors" :key="item.id">
                            <div class="item-actor">
                                <ul>
                                    <li><strong>Actor Name :</strong><span>{{ item.name }}</span></li>
                                    <li><strong>Actor age :</strong><span>{{ item.age }}</span></li>
                                    <li><strong>join date :</strong><span>{{ item.join_date }}</span></li>
                                    <li><strong>Actor Background :</strong><span>{{ item.role.Background }}</span></li>
                                    <li><strong>Actor Cameo :</strong><span>{{ item.role.Cameo }}</span></li>
                                    <li><strong>Recurring character :</strong><span>{{ item.role.Recurring_character
                                            }}</span></li>
                                    <li><strong>Side character :</strong><span>{{ item.role.Side_character }}</span>
                                    </li>
                                    <li><strong>Series regular :</strong><span>{{ item.role.Series_regular }}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4 pb-5"> 
                <router-link class="btn-main " :to="`/movies/edit/${filterd_Movies[0].id}/${filterd_Movies[0].Title}`">
                    Edit
                </router-link>
                </div>
                <div class="col-md-4"> 
                </div>
                <div class="col-md-4"> 
                <button class="btn-main delete" @click="Delete($route.params.id)">
                    Delete
                </button>
                </div>
        </div>
    </div>
</template>
<script>
import { defineAsyncComponent } from 'vue'
import { mapState } from 'vuex';
export default {
    name: 'View Movie',
    data() {
        return {
            filterd_Movies: [],
            filterd_Actors: [],
        }
    },
    components: {
        HeadSections: defineAsyncComponent(() => import(/* webpackChunkName: "App" */'@/components/Global/HeadSection.vue')),
        List: defineAsyncComponent(() => import(/* webpackChunkName: "App" */'@/components/Movies/List.vue')),
        ImgCom: defineAsyncComponent(() => import(/* webpackChunkName: "App" */'@/components/Global/ImgCom.vue')),
    },

    methods: {
        handelList() {
            this.List.forEach(el => {
                if (el.id == this.$route.params.id) {
                    this.filterd_Movies.push(el)
                }
            })
        },
        handelActor() {
            for (var i = 0; i < this.filterd_Movies[0].actors.length; i++) {
                this.Actors.forEach(el => {
                    if (el.id == this.filterd_Movies[0].actors[i].id) {
                        this.filterd_Actors.push(el)
                    }
                })
            }
        },
        Delete(Id){
            this.$store.commit('DeleteMovie',Id);
            this.$router.push('/movies-list');
        }

    },
    created() {
        this.handelList();
        this.handelActor();
    },
    computed: {
        ...mapState(['List', 'Actors']),
    }
}
</script>
