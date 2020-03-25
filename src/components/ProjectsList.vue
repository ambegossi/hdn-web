<template>
  <div class="projects-list">
    <h2>Lista</h2>
    <li v-for="{ Title, imdbID } in projects" :key="imdbID">
      <h3 class="project-title">{{ Title }}</h3>
    </li>
  </div>
</template>

<script>
export default {
  name: 'ProjectsList',
  props: ['projects'],
};
</script>

<style scoped>
.projects-list {
  border: 1px solid #707070;
  border-radius: 4px;
  width: 100%;
  margin-left: 23px;
}

h2 {
  text-align: center;
  margin-top: 16px;
  margin-bottom: 33px;
  color: #0038bb;
  font-weight: bold;
  font-size: 20px;
}

.project-title {
  padding: 10px 0px 10px 26px;
  color: #0038bb;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  margin-block-start: 0;
  margin-block-end: 0;
}

.project-title:hover {
  background: #cbcbcb;
}
</style>
