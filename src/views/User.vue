<template>
  <section class="user container">
    <div class="user-dash">
      <p>Usuário logado com sucesso</p>
      <h2>{{ this.$store.state.user.name }}</h2>
    </div>
  </section>
</template>

<script>
export default {
  name: 'User',
};
</script>

<style scoped>
.user {
  padding: 258px 0;
  display: flex;
  justify-content: center;
}

.user-dash {
  border: 1px solid #707070;

  padding: 31px 50px 93px 50px;
}

p,
h2 {
  text-align: center;
}

p {
  margin-bottom: 138px;
  color: #000000;
  font-weight: bold;
  font-size: 20px;
}

h2 {
  color: #3b5ac0;
  font-size: 32px;
  text-transform: uppercase;
}
</style>
