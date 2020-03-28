<template>
  <section class="work-with-us container">
    <h1 class="title">Trabalhe Conosco</h1>
    <Form @form-inputs="work_with_us = $event">
      <template v-slot:slot-form>
        <div class="email-confirmation">
          <label for="email-confirmation">Confirmação de e-mail</label>
          <input
            id="email-confirmation"
            class="input"
            name="email-confirmation"
            type="text"
            v-model="work_with_us.email_confirmation"
          />
        </div>
      </template>
    </Form>
    <ErrorNotification :error="error" />
    <SuccessNotification v-show="formSubmitted" />
    <div class="button">
      <button class="btn btn-send" @click.prevent="validateForm">
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
import api from '../services/api';
import WorkWithUs from '../models/WorkWithUsClass';
import checkForm from '../utils/checkForm';
import formatForm from '../utils/formatForm';

export default {
  name: 'WorkWithUs',
  components: {
    Form,
  },
  data() {
    return {
      work_with_us: {},
      error: '',
      formSubmitted: false,
    };
  },
  methods: {
    validateForm() {
      this.error = '';
      this.formSubmitted = false;

      const hasError = checkForm(this.work_with_us);

      if (hasError) {
        this.error = hasError;
      } else {
        this.sendForm();
      }
    },
    sendForm() {
      api
        .post('/work-with-us', formatForm(this.work_with_us), {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then(() => {
          this.formSubmitted = true;
        });
    },
  },
  created() {
    this.work_with_us = new WorkWithUs();
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
