<template>
  <section class="contact container">
    <h1 class="title">Fale Conosco</h1>
    <Form>
      <button class="btn btn-form">Anexar arquivo</button>
    </Form>
  </section>
</template>

<script>
import Form from '../components/Form.vue';

export default {
  name: 'Contact',
  components: {
    Form,
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

.btn-form {
  height: 40px;
  width: 400px;
}
</style>
