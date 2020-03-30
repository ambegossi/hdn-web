<template>
  <div class="project" v-if="detailed_project">
    <div class="project-img">
      <img
        class="project-img"
        :src="detailed_project.Poster"
        :alt="detailed_project.Title"
      />
    </div>
    <div class="info">
      <h2 class="title">
        {{ detailed_project.Title }} ({{ detailed_project.Year }})
      </h2>
      <p class="description">Descrição: {{ detailed_project.Plot }}</p>
      <p class="involved">Envolvidos: {{ detailed_project.Actors }}</p>
    </div>
  </div>
</template>

<script>
import getProjects from '../services/apiOmdb';
import authOmdb from '../config/authOmdb';

export default {
  name: 'ProjectItem',
  props: ['project'],
  data() {
    return {
      detailed_project: null,
    };
  },
  methods: {
    getDetailedProject() {
      const title = this.project.Title.replace(/\s/g, '+');
      getProjects(`?apikey=${authOmdb.key}&t=${title}&plot=short`).then(
        (response) => {
          this.detailed_project = response.data;
        }
      );
    },
  },
  created() {
    this.getDetailedProject();
  },
};
</script>

<style scoped>
.project {
  display: grid;
  grid-template-columns: 270px 350px;
  grid-gap: 20px;
  position: relative;
  margin-bottom: 40px;
  cursor: pointer;
}

.project:hover {
  background: #cbcbcb;
}

.project-img {
  height: 180px;
  width: 270px;
  background-size: cover;
}

.title {
  margin-bottom: 21px;
}

.description {
  margin-bottom: 14px;
}

h2 {
  font-size: 20px;
  color: #0038bb;
}

p {
  font-size: 14px;
  color: #0038bb;
  font-weight: bold;
}
</style>
