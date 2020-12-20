import Vue from "vue";
import Vuex from "vuex";
import API from "./lib/API";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    rockets: [],
  },
  mutations: {
    //set the action to one mutations
    setRockets(state, rockets) {
      /* eslint-disable */
      state.rockets = rockets;
      /* eslint-enable */
    },
    addRocket(state, rocket) {
      state.rockets.push(rocket);
    },
    removeRocket(state, rocket) {
      state.rockets.splice(state.rockets.indexOf(rocket), 1);
    },
  },
  actions: {
    //send api request  async
    async getRockets(context) {
      const rockets = await API.getRockets();
      context.commit("setRockets", rockets);
    },
  },
  getters: {
    // define the getRockets data to rockets state
    rockets(state) {
      return state.rockets;
    },
  },
});
