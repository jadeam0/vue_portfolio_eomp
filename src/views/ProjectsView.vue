<template>
 <h1 class="animate__animated animate__pulse animate__infinite infinite">
      Projects!
    </h1>
    
        <div v-if="projects" class="flex-container">
            <div class="row">
            <ProjectCard v-for="project of projects" :key="project.id" :project="project" />
            </div>
        </div>
        <div v-else>Loading..</div>
      
</template>

<script>
import ProjectCard from '@/components/ProjectCard.vue';

export default {
    computed: {
        projects() {
            return this.$store.state.projects
        }
    },

    mounted() {
        this.$store.dispatch("getProjects")
    },

    components: {
        ProjectCard
    }
}
</script>

<style scoped>
.row {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 2rem;
}

h1 {
  font-weight: bolder;
  font-size: 4rem;
  text-decoration: underline 2px solid #682a92;
  margin: 10px;
  margin-top: 3.5rem;
  margin-bottom: 4rem;
}
</style>