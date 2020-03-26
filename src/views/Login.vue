<template>
  <section class="login container">
    <div class="login-form">
      <h1 class="title">Login</h1>
      <form>
        <label for="email">E-mail</label>
        <input
          class="input"
          id="email"
          name="email"
          type="text"
          v-model="email"
        />
        <label for="password">Senha</label>
        <input
          class="input"
          id="password"
          name="password"
          type="text"
          v-model="password"
        />
        <div class="button">
          <button class="btn btn-send">Entrar</button>
        </div>
        <router-link class="forgot-password-btn" to="/login"
          >Esqueci minha senha</router-link
        >
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Login',
};
</script>

<style scoped>
.login {
  padding: 258px 0;
  display: flex;
  justify-content: center;
}

.login-form {
  border: 1px solid #707070;
  width: 580px;
  height: 453px;

  padding: 43px 50px 66px 50px;
}

.title {
  font-size: 32px;
  color: #000000;
  opacity: 0.6;
  margin-bottom: 34px;
  text-align: center;
}

form {
  display: grid;
}

.input {
  margin-bottom: 21px;
}

label {
  color: #000000;
  font-weight: bold;
  margin-bottom: 9px;
}

.forgot-password-btn {
  border: none;
  background: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;
  color: #020202;
  opacity: 0.5;
  text-align: center;
  margin-top: 17px;
}

.forgot-password-btn:hover {
  color: #3b5ac0;
}
</style>
