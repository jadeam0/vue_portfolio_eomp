import { createStore } from 'vuex'

export default createStore({
  state: {
    projects: null,
    // project: null,
  },
  
  mutations: {
    setProjects: (state, projects) => {
      state.projects = projects;
    },
    // setProject: (state, project) => {
    //   state.project = project;
    // },
  },
  
  actions: {
    getProjects: async (context) => {
      fetch('https://jadeam0.github.io/data/projects-db.json')
        .then((res) => res.json())
        .then((projects) => context.commit('setProjects', projects));
    },
    // getProject: async (context, id) => {
    //   fetch('https://jadeam0.github.io/data/projects-db.json' + id)
    //     .then((res) => res.json())
    //     .then((project) => context.commit('setProject', project));
    // },
  },
})
