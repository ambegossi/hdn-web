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
      <template v-slot:slot-file-input>
        <label v-show="!fileSelected" class="label-file" for="select-file"
          >Anexar arquivo</label
        >
        <label
          v-show="fileSelected"
          class="label-file file-selected"
          for="select-file"
          >Arquivo selecionado</label
        >
        <input
          id="select-file"
          name="select-file"
          type="file"
          ref="file"
          @change="addFile"
        />
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

export default {
  name: 'Contact',
  components: {
    Form,
  },
  data() {
    return {
      contact: {},
      fileSelected: false,
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
    addFile() {
      const file = this.$refs.file.files[0];
      this.contact.file = file;
      this.fileSelected = true;
    },
    formatContact() {
      const form = new FormData();

      form.append('name', this.contact.name);
      form.append('last_name', this.contact.last_name);
      form.append('email', this.contact.email);
      form.append('subject', this.contact.subject);
      form.append('description', this.contact.description);
      form.append('file', this.contact.file);

      return form;
    },
    sendForm() {
      api
        .post('/contact', this.formatContact(), {
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

.file-selected {
  background: #3b5ac0;
  color: #fff;
}
</style>
