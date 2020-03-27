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
import Contact from '../models/ContactClass';

export default {
  name: 'Contact',
  components: {
    Form,
  },
  data() {
    return {
      contact: {},
      fileSelected: false,
    };
  },
  methods: {
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
      api.post('/contact', this.formatContact(), {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
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
