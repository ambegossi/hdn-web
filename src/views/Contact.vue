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
            v-model="subject"
          />
        </div>
      </template>
      <template v-slot:slot-file-input>
        <label class="label-file" for="select-file">Anexar arquivo</label>
        <input id="select-file" type="file" />
      </template>
    </Form>
    <div class="button">
      <button class="btn btn-send" @click.prevent="sendForm">
        Enviar
      </button>
    </div>
  </section>
</template>

<script>
import Form from '../components/Form.vue';
import api from '../services/api';

export default {
  name: 'Contact',
  components: {
    Form,
  },
  data() {
    return {
      contact: {
        name: '',
        last_name: '',
        email: '',
        description: '',
      },
      subject: '',
    };
  },
  methods: {
    sendForm() {
      api.post('/contact', { ...this.contact, subject: this.subject });
    },
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
