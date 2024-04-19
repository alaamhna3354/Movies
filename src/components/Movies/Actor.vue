<template>
    <div class="actor-item" v-for="item in Actors" :key="item.id" :item="item">
        <div class="row" style="color: #000">
            <div class="col col-md-1 text-center">{{ item.id }}</div>
            <div class="col col-md-2 text-center">
                {{ item.name }}
            </div>
            <div class="col col-md-1 text-center">
                {{ item.age }}
            </div>
            <div class="col col-md-2 text-center">
                {{ item.join_date }}
            </div>
            <div class="col col-md-4 d-flex flex-column">
                <div class="d-flex justify-content-between align-items-center">
                    <strong>Background :</strong>
                    <span>
                        {{ item.role?.Background }}
                    </span>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                    <strong>Cameo :</strong>
                    <span>
                        {{ item.role?.Cameo }}
                    </span>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                    <strong>Recurring character :</strong>
                    <span>
                        {{ item.role?.Recurring_character }}
                    </span>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                    <strong>Side character :</strong>
                    <span>
                        {{ item.role?.Recurring_character }}
                    </span>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                    <strong>Series regular :</strong>
                    <span>
                        {{ item.role?.Series_regular }}
                    </span>
                </div>
            </div>
            <div class="col col-md-2 d-flex justify-content-between align-items-center">
                <button class="btn-main w-auto" @click="Edit(item.id)">
                    Edit
                </button>
                <div class="btn-main w-auto" v-if="!Actors_array">
                    <label :for="`add${item.id}`" class="mx-2">Add</label>
                    <input @change="selectActor" :value="item.id" v-model="selected" :name="`add${item.id}`"
                        :id="`add${item.id}`" type="checkbox">
                </div>
                <div class="btn-main w-auto" v-else>
                    <label :for="`add${item.id}`" class="mx-2">Add</label>
                    <input @change="selectActor" :value="item.id" v-model="selected" :name="`add${item.id}`"
                        :id="`add${item.id}`" type="checkbox">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    data() {
        return {
            selected: [],
        }
    },
    props: {
        Actors_array: Array
    },
    computed: {
        ...mapState(['List', 'Actors', 'EditActorStatus', 'Actors_id']),
    },
    methods: {
        Edit(Id) {
            this.$store.state.EditActorStatus = Id;
        },
        selectActor() {
            this.$store.commit('AddActor', this.selected)
        },
        handelActor() {
            if (this.Actors_array) {
                for (var i = 0; i < this.Actors_array.length; i++) {
                    this.selected.push(this.Actors_array[i].id);
                }
                this.$store.commit('AddActor', this.selected)
            }
        }
    },
    created() {
        this.handelActor();
    }
}
</script>