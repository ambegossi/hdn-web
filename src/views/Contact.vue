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
      <button class="btn btn-send">
        Enviar
      </button>
    </div>
    <h2>{{ contact }}</h2>
  </section>
</template>

<script>
import Form from '../components/Form.vue';

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
