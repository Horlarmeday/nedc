/*=========================================================================================
  File Name: moduleProjectActions.js
  Description: Project Module Actions
==========================================================================================*/

// import axios from '../../axios'

import data from './projects'

export default {
  setProjectSearchQuery ({ commit }, query) {
    commit('SET_PROJECT_SEARCH_QUERY', query)
  }, 

  addProject ({ commit }, project) {
    commit('ADD_Project', Object.assign(project, {pid: Date.now()}))
    // return new Promise((resolve, reject) => {
    //   axios.post('/contractors/create', contractor)
    //     .then((response) => {
    //       commit('ADD_CONTRACTOR', Object.assign(contractor, {kid: response.data.data.cid}))
    //       resolve(response)
    //     })
    //     .catch((error) => { reject(error) })
    // })
  },
  fetchProjects ({ commit }) {
    commit('SET_PROJECTS', data.docs.projects)
    commit('SET_PROJECT_TOTAL', data.total)
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
  fetchProject({ commit }) {
    commit('SET_PROJECT')
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
  updateProject ({ commit }, project) {
    commit('UPDATE_PROJECT', project)
    // return new Promise((resolve, reject) => {
    //   axios.put(`/users`, member)
    //     .then((response) => {
    //       commit('UPDATE_MEMBER', resp\onse.data.data)
    //       resolve(response)
    //     })
    //     .catch((error) => { reject(error) })
    // })
  },
  removeProject ({ commit }, projectId) {
    commit('REMOVE_PROJECT', projectId)
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
