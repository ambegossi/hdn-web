<template>
  <section class="work-with-us container">
    <h1 class="title">Trabalhe Conosco</h1>
    <Form>
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
    <button class="employee-btn">Já sou funcionario</button>
  </section>
</template>

<script>
import Form from '../components/Form.vue';

export default {
  name: 'WorkWithUs',
  components: {
    Form,
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
}

.employee-btn:hover {
  color: #3b5ac0;
}
</style>
