/*=========================================================================================
  File Name: moduleLabel.js
  Description: Label Module
==========================================================================================*/


import state from './moduleLabelState'
import mutations from './moduleLabelMutations'
import actions from './moduleLabelActions'
import getters from './moduleLabelGetters'

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
