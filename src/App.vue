<template>
  <div id="app">
    <Header />
    <main id="main">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

body,
ul,
li,
h1,
h2,
p {
  padding: 0px;
  margin: 0px;
}

ul,
li {
  list-style: none;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  color: #6d6868;
  background: #fff;
}

a {
  color: #6d6868;
  text-decoration: none;
}

img {
  max-width: 100%;
  display: block;
}

.container {
  display: flex;
  max-width: 960px;
  margin: 0 auto;
}
</style>
