import Vue from "vue";
import Vuex from "vuex";
import usersModule from "./usersModule"
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        usersModule
    }
}   
  )