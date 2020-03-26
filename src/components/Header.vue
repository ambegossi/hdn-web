<template>
  <header>
    <nav>
      <ul class="container">
        <li>
          <router-link to="/" class="logo">
            <img src="../assets/hdn-logo.png" alt="HDN Digital" />
          </router-link>
        </li>
        <template v-if="this.$route.name === 'Login'">
          <li id="li-login">
            <router-link to="/login">Gestão de Projetos</router-link>
          </li>
        </template>
        <template v-else>
          <li>
            <router-link to="/">Início</router-link>
          </li>
          <li>
            <router-link to="/empresa">Empresa</router-link>
          </li>
          <li>
            <router-link to="/projetos">Projetos</router-link>
          </li>
          <li>
            <router-link to="/contato">Contato</router-link>
          </li>
          <li>
            <router-link to="/trabalhe-conosco">Trabalhe Conosco</router-link>
          </li>
        </template>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped>
header {
  height: 56px;
  background: #010101;
  border: 1px solid #707070;
}
nav {
  display: flex;
  margin-top: 18px;
  height: 100%;
  justify-content: center;
}

.logo img {
  height: 32px;
}

ul {
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: left;
}

ul li {
  margin-left: 38px;
  font-weight: bold;
  font-size: 20px;
  text-transform: uppercase;
}

ul li:first-child {
  margin-left: 0px;
}

ul li a:hover,
ul li a.router-link-exact-active {
  color: #fff;
}

#li-login {
  text-transform: none;
}
</style>
