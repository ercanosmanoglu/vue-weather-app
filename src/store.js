//store.js
import Vue from "vue";
import Vuex from "vuex"; //Vuex Plugin import edilmesi
import history from "./store/history.js";
import sample from "./store/sample.js";
import createPersistedState from "vuex-persistedstate";
/* store.js */

const dataState = new createPersistedState({
  paths: ['history']
});

Vue.use(Vuex); //Vuex Plugin kurulumu

export default new Vuex.Store({
  modules: {
   history,
   sample
  },
  plugins: [dataState]
 }
);