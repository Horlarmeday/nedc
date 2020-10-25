/*=========================================================================================
  File Name: moduleLabelMutations.js
  Description: Labels Module Mutations
==========================================================================================*/


export default {
    ADD_LABEL (state, label) {
      state.labels.unshift(label)
    },

    SET_LABELS (state, labels) {
      state.labels = labels
    },

    SET_LABEL_TOTAL (state, total) {
      state.total = total
    },

    SET_NUMB_PAGES (state, pages) {
      state.pages = pages
    },

    SET_LABEL_SEARCH_QUERY (state, query) {
      const filterModel = state.labels.filter(el => el.toString().toLowerCase().indexOf(query.toLowerCase()) !== -1);
      state.labels = filterModel
    },

    SET_LABEL (state, label) {
      state.label = label
    },
    // SET_LABELS(state, labels) {
    //   state.eventLabels = labels
    // },
    UPDATE_LABEL (state, label) {
      const labelIndex = state.labels.findIndex((p) => p.pid === label.pid)
      Object.assign(state.labels[labelIndex], label)
    },

    REMOVE_LABEL (state, labelId) {
      const ItemIndex = state.projects.findIndex((p) => p.lid === labelId)
      state.labels.splice(ItemIndex, 1)
    }
}
  