<template>
  <transition mode="out-in">
    <section v-if="projects" class="projects container">
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
    <LoadingPage v-else />
  </transition>
</template>

<script>
import ProjectItem from '../components/ProjectItem.vue';
import ProjectsList from '../components/ProjectsList.vue';
import getProjects from '../services/apiOmdb';
import authOmdb from '../config/authOmdb';

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
    populateProjects() {
      this.projects = null;
      getProjects(`/?apikey=${authOmdb.key}&s=spider%20man`).then(
        (response) => {
          this.projects = response.data.Search;
        }
      );
    },
  },
  created() {
    this.populateProjects();
  },
};
</script>

<style scoped>
.projects {
  padding: 40px 0;
}

.title {
  margin-bottom: 67px;
  font-size: 28px;
}
</style>
