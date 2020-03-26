<template>
  <section class="work-with-us container">
    <h1 class="title">Trabalhe Conosco</h1>
    <Form @form-inputs="work_with_us = $event">
      <template v-slot:slot-form>
        <div class="confirm-email">
          <label for="confirm-email">Confirmação de e-mail</label>
          <input
            id="confirm-email"
            class="input"
            name="confirm-email"
            type="text"
            v-model="confirm_email"
          />
        </div>
      </template>
      <template v-slot:slot-file-input>
        <label class="label-file" for="select-file">Anexar currículo</label>
        <input id="select-file" type="file" />
      </template>
    </Form>
    <div class="button">
      <button class="btn btn-send">
        Enviar
      </button>
    </div>
    <router-link class="employee-btn" to="/login"
      >Já sou funcionario</router-link
    >
  </section>
</template>

<script>
import Form from '../components/Form.vue';

export default {
  name: 'WorkWithUs',
  components: {
    Form,
  },
  data() {
    return {
      work_with_us: {
        name: '',
        last_name: '',
        email: '',
        description: '',
      },
      confirm_email: '',
    };
  },
};
</script>

<style scoped>
.work-with-us {
  padding: 40px 0;
  flex-direction: column;
}

.title {
  margin-bottom: 38px;
  font-size: 28px;
}

.employee-btn {
  border: none;
  background: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;
  color: #020202;
  opacity: 0.5;
  text-align: center;
}

.employee-btn:hover {
  color: #3b5ac0;
}
</style>
