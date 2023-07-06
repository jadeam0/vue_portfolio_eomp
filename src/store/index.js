import { createStore } from "vuex";
const projectsUrl = "https://jadeam0.github.io/data/db.json";

export default createStore({
  state: {
    projects: null,
    testimonials: null,
    education: null
  },

  mutations: {
    setProjects: (state, value) => {
      state.projects = value;
    },
    setTestimonials: (state, value) => {
      state.testimonials = value;
    },
    setEducation: (state, value) => {
      state.education = value;
    },
  },

  actions: {
    async fetchProjects(context, error) {
      try {
        const response = await fetch(projectsUrl);
        const data = await response.json();
        const projects = data.projects;
        if (projects) {
          context.commit("setProjects", projects);
        } else {
          alert("ERROR");
        }
      } catch (e) {
        console.error(error);
      }
    },

    async fetchTestimonials(context, error) {
      try {
        const response = await fetch(projectsUrl);
        const data = await response.json();
        const testimonials = data.testimonials;
        if (testimonials) {
          context.commit("setTestimonials", testimonials);
        } else {
          alert("ERROR");
        }
      } catch (e) {
        console.error(error);
      }
    },

    async fetchEducation(context, error) {
      try {
        const response = await fetch(projectsUrl);
        const data = await response.json();
        const education = data.education;
        if (education) {
          context.commit("setEducation", education);
        } else {
          alert("ERROR");
        }
      } catch (e) {
        console.error(error);
      }
    }
  },
});
