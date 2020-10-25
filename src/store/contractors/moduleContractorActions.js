/*=========================================================================================
  File Name: moduleMemberActions.js
  Description: Member Module Actions
==========================================================================================*/

// import axios from '../../axios'

import data from './contractors'

export default {
  setContractorSearchQuery ({ commit }, query) {
    commit('SET_CONTRACTOR_SEARCH_QUERY', query)
  }, 

  addContractor ({ commit }, contractor) {
    commit('ADD_CONTRACTOR', Object.assign(contractor, {cid: Date.now()}))
    // return new Promise((resolve, reject) => {
    //   axios.post('/contractors/create', contractor)
    //     .then((response) => {
    //       commit('ADD_CONTRACTOR', Object.assign(contractor, {kid: response.data.data.cid}))
    //       resolve(response)
    //     })
    //     .catch((error) => { reject(error) })
    // })
  },
  fetchContractors ({ commit }) {
    commit('SET_CONTRACTORS', data.docs.contractors)
    commit('SET_CONTRACTOR_TOTAL', data.total)
    commit('SET_NUMB_PAGES', data.pages)
    // return new Promise((resolve, reject) => {
    //   axios.get('/users', { params: { currentPage: payload.currentPage, pageLimit: payload.itemsPerPage, search: payload.search, filter: payload.filter } })
    //     .then((response) => {
    //       commit('SET_MEMBERS', response.data.data.docs)
    //       commit('SET_MEMBERS_TOTAL', response.data.data.total)
    //       commit('SET_NUMB_PAGES', response.data.data.pages)
    //       resolve(response)
    //     })
    //     .catch((error) => { reject(error) })
    // })
  },
  fetchContractor({ commit }) {
    commit('SET_CONTRACTOR')
    // return new Promise((resolve, reject) => {
    //   axios.get("/users/sub")
    //     .then((response) => {
    //       commit('SET_MEMBER', response.data.data)
    //       resolve(response)
    //     })
    //     .catch((error) => { reject(error) })
    // })
  },

  
//   fetchParamMember({ commit }, memberId) {
//     return new Promise((resolve, reject) => {
//       axios.get(`/users/${memberId}`)
//         .then((response) => {
//           commit('SET_MEMBER', response.data.data)
//           resolve(response)
//         })
//         .catch((error) => { reject(error) })
//     })
//   },
  updateContractor ({ commit }, contractor) {
    commit('UPDATE_CONTRACTOR', contractor)
    // return new Promise((resolve, reject) => {
    //   axios.put(`/users`, member)
    //     .then((response) => {
    //       commit('UPDATE_MEMBER', response.data.data)
    //       resolve(response)
    //     })
    //     .catch((error) => { reject(error) })
    // })
  },
  removeContractor ({ commit }, contractorId) {
    commit('REMOVE_CONTRACTOR', contractorId)
    // return new Promise((resolve, reject) => {
    //   axios.delete(`/users`, {data: { memberId }})
    //     .then((response) => {
    //       commit('REMOVE_MEMBER', memberId)
    //       resolve(response)
    //     })
    //     .catch((error) => { reject(error) })
    // })
  }
  // eventDragged({ commit }, payload) {
  //   return new Promise((resolve, reject) => {
  //     axios.post(`/api/apps/calendar/event/dragged/${payload.event.id}`, {payload: payload})
  //       .then((response) => {

  //         // Convert Date String to Date Object
  //         let event = response.data
  //         event.startDate = new Date(event.startDate)
  //         event.endDate = new Date(event.endDate)

  //         commit('UPDATE_EVENT', event)
  //         resolve(response)
  //       })
  //       .catch((error) => { reject(error) })
  //   })
  // },
}
