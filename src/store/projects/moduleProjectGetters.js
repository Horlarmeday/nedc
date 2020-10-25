/*=========================================================================================
  File Name: moduleProjectGetters.js
  Description: Project Module Getters
==========================================================================================*/


export default {
    getProject: state => (projectId) => state.projects.find((project) => project.pid == projectId),
}