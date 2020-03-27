<template>
  <section class="contact container">
    <h1 class="title">Fale Conosco</h1>
    <Form @form-inputs="contact = $event">
      <template v-slot:slot-form>
        <div class="subject">
          <label for="subject">Assunto</label>
          <input
            id="subject"
            class="input"
            name="subject"
            type="text"
            v-model="contact.subject"
          />
        </div>
      </template>
    </Form>
    <ErrorNotification :error="error" />
    <SuccessNotification v-show="formSubmitted" />
    <div class="button">
      <button type="submit" class="btn btn-send" @click.prevent="validateForm">
        Enviar
      </button>
    </div>
  </section>
</template>

<script>
import Form from '../components/Form.vue';
import api from '../services/api';
import Contact from '../models/ContactClass';
import checkForm from '../utils/checkForm';
import formatForm from '../utils/formatForm';

export default {
  name: 'Contact',
  components: {
    Form,
  },
  data() {
    return {
      contact: {},
      error: '',
      formSubmitted: false,
    };
  },
  methods: {
    validateForm() {
      this.error = '';
      this.formSubmitted = false;

      const hasError = checkForm(this.contact);

      if (hasError) {
        this.error = hasError;
      } else {
        this.sendForm();
      }
    },
    sendForm() {
      api
        .post('/contact', formatForm(this.contact), {
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
    this.contact = new Contact();
  },
};
</script>

<style scoped>
.contact {
  padding: 40px 0;
  flex-direction: column;
}

.title {
  margin-bottom: 38px;
  font-size: 28px;
}
</style>
