/*=========================================================================================
  File Name: store.js
  Description: Vuex store
==========================================================================================*/


import Vue from 'vue'
import Vuex from 'vuex'

import state from "./state"
import getters from "./getters"
import mutations from "./mutations"
import actions from "./actions"

Vue.use(Vuex)

import moduleContractor from './contractors/moduleContractor.js'
import moduleProject from './projects/moduleProject.js'
import moduleLabel from './labels/moduleLabel.js'

export default new Vuex.Store({
  getters,
  mutations,
  state,
  actions,
  modules: {
    contractor: moduleContractor,
    project: moduleProject,
    label: moduleLabel
  },
  strict: process.env.NODE_ENV !== 'production'
})
