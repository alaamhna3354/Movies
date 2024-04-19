<template>
    <div class="add-movie">
        <Form @submit="AddMovie" :validation-schema="schema">
            <div class="row">
                <div class="col-md-6 mb-3">
                    <Field name="Title" type="text" placeholder="Title" />
                    <ErrorMessage name="Title" class="error-message" />
                </div>
                <div class="col-md-6 mb-3">
                    <Field name="Description" type="text" placeholder="Description" />
                </div>
                <div class="col-md-6 mb-3">
                    <Field name="Year" as="select">
                        <option value="" disabled>Select Year</option>
                        <option v-for="item in years" :key="item" :selected="value" :value="item">
                            {{ item }}
                        </option>
                    </Field>
                    <ErrorMessage name="Year" class="error-message" />
                </div>
                <div class="col-12">
                    <div class="row head-actors">
                        <div class="col col-md-1 text-center">Id</div>
                        <div class="col col-md-2 text-center">Name</div>
                        <div class="col col-md-1 text-center">Age</div>
                        <div class="col col-md-2 text-center">Join date</div>
                        <div class="col col-md-4 text-center">Role</div>
                        <div class="col col-md-2 text-center">Actions</div>
                    </div>
                </div>
                <div class="col-12">
                    <Actor />
                </div>
                <div class="col-3 mt-5 m-auto">
                    <button class="btn-main">Add</button>
                </div>
            </div>
        </Form>
        <div class="overlay" @click="Hide" :class="[EditActorStatus ? 'open' : '']"></div>
        <div class="actor-edit-form" :class="[EditActorStatus ? 'open' : '']">
            <Form v-if="EditActorStatus" @submit="editActor" :validation-schema="schema2">
                <div class="row">
                    <div class="col-md-12 mb-4" @click="Hide">
                        <strong class="close">X</strong>
                    </div>
                    <div class="col-md-6 mb-3">
                        <Field :value="Actors[EditActorStatus-1].name" name="Name" type="text" placeholder="name" />
                        <ErrorMessage name="Name" class="error-message" />
                    </div>
                    <div class="col-md-6 mb-3">
                        <Field name="Age" as="select" :value="Actors[EditActorStatus-1].age">
                            <option value="" disabled>Select Age</option>
                            <option  v-for="item in 40" :key="item" :selected="value" :value="item+24">
                                {{ item+24 }}
                            </option>
                        </Field>
                        <ErrorMessage name="Age" class="error-message" />
                    </div>
                    <div class="col-md-6 mb-3">
                        <Field :value="Actors[EditActorStatus-1].join_date" name="Join_date" type="date" placeholder="Join date" />
                        <ErrorMessage name="Join_date" class="error-message" />
                    </div>
                    <div class="col-md-6 mb-3">
                        <Field :value="Actors[EditActorStatus-1].role.Background" name="Background" type="text" placeholder="Background" />
                        <ErrorMessage name="Background" class="error-message" />
                    </div>
                    <div class="col-md-6 mb-3">
                        <Field :value="Actors[EditActorStatus-1].role.Cameo" name="Cameo" type="text" placeholder="Cameo" />
                        <ErrorMessage name="Cameo" class="error-message" />
                    </div>
                    <div class="col-md-6 mb-3">
                        <Field :value="Actors[EditActorStatus-1].role.Recurring_character" name="Recurring" type="text" placeholder="Recurring character " />
                        <ErrorMessage name="Recurring" class="error-message" />
                    </div>
                    <div class="col-md-6 mb-3">
                        <Field :value="Actors[EditActorStatus-1].role.Side_character" name="Side" type="text" placeholder="Side character " />
                        <ErrorMessage name="Side" class="error-message" />
                    </div>
                    <div class="col-md-6 mb-3">
                        <Field :value="Actors[EditActorStatus-1].role.Series_regular" name="Series" type="text" placeholder="Series regular " />
                        <ErrorMessage name="Series" class="error-message" />
                    </div>
                    <div class="col-12">
                        <button class="btn-main">Save</button>
                    </div>
                </div>
            </Form>
        </div>
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import { mapState } from 'vuex';
// import vee-validate 
import { Form, Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
import { configure } from "vee-validate";
export default {
    data() {
        return {
        };
    },
    setup() {
        configure({
            validateOnInput: true,
        });
        const schema = yup.object({
            Title: yup.string().required().min(4),
            Year: yup.number().required().label('Year must be selected '),
        });
        const schema2 = yup.object({
            Name: yup.string().required().min(4),
            Age: yup.number().required(),
            Join_date: yup.string().required(),
            Background: yup.string().required().min(4),
            Cameo: yup.string().required().min(4),
            Recurring: yup.string().required().min(4),
            Side: yup.string().required().min(4),
            Series: yup.string().required().min(4),
        });
        return {
            schema,
            schema2

        }
    },
    components: {
        Form,
        Field,
        ErrorMessage,
        Actor: defineAsyncComponent(() => import(/* webpackChunkName: "App" */'@/components/Movies/Actor.vue')),

    },
    computed: {
        ...mapState(['List','Actors', 'EditActorStatus','Actors_id']),
        years() {
            const year = new Date().getFullYear()
            return Array.from({ length: year - 1990 }, (value,index) => 1991 + index);
        },
    },
    methods: {
        AddMovie(values) {
           const moviesObject = {
                "id":this.List.length+1,
                "Title": values.Title,
                "Description":values.Description,
                "Year": values.Year,
                "Poster": 'https://m.media-amazon.com/images/M/MV5BMjMzODc2NzU5MV5BMl5BanBnXkFtZTgwNTMwMTE3NjM@._V1_SX300.jpg',
                "actors":[]
            }
            for(var i =0;i < this.Actors_id.length;i++){
                moviesObject.actors.push(
                    {
                        "id":this.Actors_id[i]
                    }
                )
            }
            this.$store.commit('addToMovies',moviesObject);
            this.$router.push('/movies-list');
        },
        editActor(values) {
            console.log(values);
            this.$store.commit('SaveEditActor',
                {
                    "id": this.EditActorStatus,
                    "name": values.Name,
                    "age": values.Age,
                    "join_date": values.Join_date,
                    "role": {
                        "Background": values.Background,
                        "Cameo": values.Cameo,
                        "Recurring_character": values.Recurring,
                        "Side_character": values.Side,
                        "Series_regular": values.Series
                    }
                }
            );
            this.$store.state.EditActorStatus = false;
        },
        Hide() {
            this.Actors
            this.$store.state.EditActorStatus = false;
        }
    },

}
</script>