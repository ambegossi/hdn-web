<template>
  <section class="projects container">
    <div class="our-projects">
      <h1 class="title">Nossos Projetos</h1>
      <li v-for="project in projects" :key="project.imdbID">
        <section :id="project.imdbID">
          <ProjectItem :project="project" />
        </section>
      </li>
    </div>
    <ProjectsList :projects="projects" />
  </section>
</template>

<script>
import ProjectItem from '../components/ProjectItem.vue';
import ProjectsList from '../components/ProjectsList.vue';
import api from '../services/api';

export default {
  name: 'Projects',
  components: {
    ProjectItem,
    ProjectsList,
  },
  data() {
    return {
      projects: null,
    };
  },
  methods: {
    getProjects() {
      api.get('/?apikey=c047d840&s=spider%20man').then((response) => {
        this.projects = response.data.Search;
      });
    },
  },
  created() {
    this.getProjects();
  },
};
</script>

<style scoped>
.projects {
  padding: 40px 0;
}

.title {
  margin-bottom: 67px;
}
</style>
