import { createStore } from 'vuex'
import db from './dp.json';
export default createStore({
  state: {
    MoviesCount: window.localStorage.getItem('MoviesCount') || 5,
    List: JSON.parse(window.localStorage.getItem('Movies')) || db.List,
    Actors: JSON.parse(window.localStorage.getItem('Actors')) || db.Actors,
    EditActorStatus: false,
    Actors_id:[]
  },
  mutations: {
    addToMovies(state, item) {
      state.List.push(item);
      state.MoviesCount++;
      this.commit('savedata');
    },
    EditMovie(state,item){
      const target = state.List.find((obj) => obj.id == item.id);
      const source = item;
      Object.assign(target, source);
      this.commit('savedata');
    },
    DeleteMovie(state,Id){
      if (state.List.length > 0) {
        let bool = state.List.some((i) => i.id == Id);
        if (bool) {
        let index = state.List.findIndex(
                (el) => el.id == Id
            );
            state.List.splice(index, 1);
            this.commit('savedata');
            state.MoviesCount--;
        }

    }
    },
    AddActor(state,item){
      state.Actors_id = item;
    },
    SaveEditActor(state, item) {
      const target = state.Actors.find((obj) => obj.id === item.id);
      const source = item;
      Object.assign(target, source);
      this.commit('savedata');
      state.EditActorStatus = false;
    },
    savedata(state) {
      window.localStorage.setItem(
        'Movies',
        JSON.stringify(state.List)
      );
      window.localStorage.setItem(
        'Actors',
        JSON.stringify(state.Actors)
      );
      window.localStorage.setItem(
        'MoviesCount',
        JSON.stringify(state.MoviesCount)
      );
    },
  },
  actions: {
  },
  modules: {
  }
})
