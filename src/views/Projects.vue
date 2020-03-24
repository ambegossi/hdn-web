<template>
  <section class="projects container">
    <div class="our-projects">
      <h1>Nossos Projetos</h1>
      <li v-for="(project, index) in our_projects" :key="index">
        <ProjectItem :project="project" />
      </li>
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
};
</script>

<style scoped></style>
