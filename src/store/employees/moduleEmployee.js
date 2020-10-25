/*=========================================================================================
  File Name: moduleEmployee.js
  Description: Employee Module
==========================================================================================*/


import state from './moduleEmployeeState'
import mutations from './moduleEmployeeMutations'
import actions from './moduleEmployeeActions'
import getters from './moduleEmployeeGetters'

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
