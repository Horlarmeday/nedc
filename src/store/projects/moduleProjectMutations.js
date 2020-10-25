/*=========================================================================================
  File Name: moduleProjectMutations.js
  Description: Projects Module Mutations
==========================================================================================*/


export default {
    ADD_PROJECT (state, project) {
      state.projects.unshift(project)
    },

    SET_PROJECTS (state, projects) {
      state.projects = projects
    },

    SET_PROJECT_TOTAL (state, total) {
      state.total = total
    },

    SET_NUMB_PAGES (state, pages) {
      state.pages = pages
    },

    SET_PROJECT_SEARCH_QUERY (state, query) {
      const filterModel = state.projects.filter(el => el.toString().toLowerCase().indexOf(query.toLowerCase()) !== -1);
      state.projects = filterModel
    },

    SET_PROJECT (state, project) {
      state.project = project
    },
    // SET_LABELS(state, labels) {
    //   state.eventLabels = labels
    // },
    UPDATE_PROJECT (state, project) {
      const projectIndex = state.projects.findIndex((p) => p.pid === project.pid)
      Object.assign(state.projects[projectIndex], project)
    },

    REMOVE_PROJECT (state, projectId) {
      const ItemIndex = state.projects.findIndex((p) => p.pid === projectId)
      state.projects.splice(ItemIndex, 1)
    }
}
  