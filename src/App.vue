<template>
  <div id="app">
    <Header />
    <main id="main">
      <transition mode="out-in">
        <router-view />
      </transition>
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
  created() {
    if (window.sessionStorage.token) {
      this.$store.dispatch('signInUser', window.sessionStorage.token);
    }
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

.btn {
  border-radius: 4px;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  border: none;
  height: 40px;
  width: 200px;
  margin: 27px 0;
}

.btn-send {
  background: #3b5ac0;
  text-transform: uppercase;
  color: #ffffff;
  font-weight: bold;
}

.button {
  display: flex;
  justify-content: center;
}

input {
  border-radius: 4px;
  border: 1px solid #707070;
  height: 40px;
  width: 100%;
  padding: 5px;
}

textarea {
  font-family: Arial, Helvetica, sans-serif;
  padding: 5px;
}

.v-enter,
.v-leave-to {
  opacity: 0;
}

.v-enter {
  transform: translate3d(0, -20px, 0);
}

.v-leave-to {
  transform: translate3d(0, 20px, 0);
}

.v-enter-active,
.v-leave-active {
  transition: all 0.3s;
}
</style>
