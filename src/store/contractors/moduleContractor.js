/*=========================================================================================
  File Name: moduleContractor.js
  Description: Contractor Module
==========================================================================================*/


import state from './moduleContractorState.js'
import mutations from './moduleContractorMutations.js'
import actions from './moduleContractorActions.js'
import getters from './moduleContractorGetters.js'

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
