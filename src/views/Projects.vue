<template>
  <section class="projects container">
    <div class="our-projects">
      <h1 class="title">Nossos Projetos</h1>
      <li v-for="(project, index) in projects" :key="index">
        <ProjectItem :project="project" />
      </li>
    </div>
    <div class="list-projects">
      <ProjectsList :projects="projects" />
    </div>
  </section>
</template>

<script>
import ProjectItem from '../components/ProjectItem.vue';
import api from '../services/api';

export default {
  name: 'Projects',
  components: {
    ProjectItem,
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
.our-projects {
  padding: 40px 0;
}

.title {
  margin-bottom: 67px;
}
</style>
