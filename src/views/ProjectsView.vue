<template>
  <h1 class="animate__animated animate__pulse animate__infinite infinite">
    Projects!
  </h1>
  <div class="con">
    <div class="row justify-content-center">
      <div class="col-3" v-for="project in projects" :key="project.id" :project="project">
      <div class="card" >
        <div class="image">
          <img
            :src="project.image_url"
            class="card-img-top"
            :alt="project.name"
          />
        </div>
        <div class="card-body">
          <h5 class="card-title">{{ project.name }}</h5>
          <p class="card-text">{{ project.desc }}</p>
        </div>
        <div class="buttons">
          <ul
            class="d-flex justify-content-center p-0 gap-4"
            style="list-style: none"
          >
            <li>
              <button>
                <a :href="project.git_url" class="btn p-2">Github</a>
              </button>
            </li>
            <li>
              <button>
                <a :href="project.netli_url" class="btn p-2">Netlify</a>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  </div>

  <!-- <div v-else>Loading..</div> -->

  <!-- <div v-if="projects" class="flex-container">
    <div class="row">
      <ProjectCard
        v-for="project of projects"
        :key="project.id"
        :project="project"
      />
    </div>
  </div> -->
</template>

<script>
// import ProjectCard from "@/components/ProjectCard.vue";

export default {
  // props: ['project'],

  computed: {
    projects() {
      return this.$store.state.projects;
    },
  },

  mounted() {
    this.$store.dispatch("fetchProjects");
  },

  //   components: {
  //     ProjectCard
  //   },
};
</script>

<style scoped>
.row {
  display: flex;
  justify-content: center;
  /* align-items: center; */
  width: 100%;
  height: 100%;
  /* border: solid black; */
  gap: 2rem;
}

img {
  border-radius: 20px;
}

.container {
  width: 100%;
  height: fit-content;
  display: flex;
  /* border: 3px solid white; */
}

.col-3 {
  display: flex;
  justify-content: center;
  align-items: center;
  /* flex-direction: column; */
  /* border: solid yellow; */
  /* width: 100%;
  height: 100%; */
}

h1 {
  font-weight: bolder;
  font-size: 4rem;
  text-decoration: underline 2px solid #682a92;
  margin: 10px;
  margin-top: 3.5rem;
  margin-bottom: 4rem;
}

.card {
  /* border: 3px solid red; */
  height: 25rem;
  width: 25rem;
  color: #dec9e9;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
}

button {
  margin-top: 2rem;
  text-decoration: none;
  position: relative;
  border: none;
  font-size: 14px;
  font-family: inherit;
  width: 9em;
  height: 3em;
  line-height: 2em;
  text-align: center;
  background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
  background-size: 300%;
  border-radius: 30px;
  z-index: 1;
}

button a {
  text-decoration: none;
  color: #10002b;
}

button:hover {
  animation: ani 8s linear infinite;
  border: none;
}

@keyframes ani {
  0% {
    background-position: 0%;
  }

  100% {
    background-position: 400%;
  }
}

button:before {
  content: "";
  position: absolute;
  top: -5px;
  left: -5px;
  right: -5px;
  bottom: -5px;
  z-index: -1;
  background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
  background-size: 400%;
  border-radius: 35px;
  transition: 1s;
}

button:hover::before {
  filter: blur(20px);
}

button:active {
  background: linear-gradient(32deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
}


@media only screen and (max-width: 838px) {
  .card {
    width: 10rem;
  }
  .col-3 {
    display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* border: solid yellow; */
  width: 100%;
  height: 100%;
}
}
    @media only screen and (max-width: 1068px) {
      .card {
        width: 17rem;
        height: auto;
      }
    
      button {
        width: 5.5rem;
      }
    }
</style>
