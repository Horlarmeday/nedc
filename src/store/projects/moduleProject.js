/*=========================================================================================
  File Name: moduleProject.js
  Description: Project Module
==========================================================================================*/


import state from './moduleProjectState'
import mutations from './moduleProjectMutations'
import actions from './moduleProjectActions'
import getters from './moduleProjectGetters'

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
