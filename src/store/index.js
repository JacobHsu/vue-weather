import Vue from 'vue'
import Vuex from 'vuex'
import home from './home'

Vue.use(Vuex)

const modules = {home}

export default new Vuex.Store({
  modules
})
