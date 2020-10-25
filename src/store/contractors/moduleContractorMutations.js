/*=========================================================================================
  File Name: moduleContractorMutations.js
  Description: Contractors Module Mutations
==========================================================================================*/


export default {
    ADD_CONTRACTOR (state, contractor) {
      state.contractors.unshift(contractor)
    },
    SET_CONTRACTORS (state, contractors) {
      state.contractors = contractors
    },

    SET_CONTRACTOR_TOTAL (state, total) {
      state.total = total
    },

    SET_NUMB_PAGES (state, pages) {
      state.pages = pages
    },

    SET_CONTRACTOR_SEARCH_QUERY (state, query) {
      const filterModel = state.contractors.filter(el => el.toString().toLowerCase().indexOf(query.toLowerCase()) !== -1);
      state.contractors = filterModel
    },

    SET_CONTRACTOR (state, contractor) {
      state.contractor = contractor
    },
    // SET_LABELS(state, labels) {
    //   state.eventLabels = labels
    // },
    UPDATE_CONTRACTOR (state, contractor) {
      const contractorIndex = state.contractors.findIndex((p) => p.cid === contractor.cid)
      Object.assign(state.contractors[contractorIndex], contractor)
    },
    REMOVE_CONTRACTOR (state, contractorId) {
      const ItemIndex = state.contractors.findIndex((p) => p.cid === contractorId)
      state.contractors.splice(ItemIndex, 1)
    }
}
  