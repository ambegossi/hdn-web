<template>
  <form>
    <div class="id">
      <div class="name">
        <label for="name">Nome</label>
        <input
          v-model="inputs.name"
          class="input"
          id="name"
          name="name"
          type="text"
        />
      </div>
      <div class="last-name">
        <label for="last-name">Sobrenome</label>
        <input
          v-model="inputs.last_name"
          class="input"
          id="last-name"
          name="last-name"
          type="text"
        />
      </div>
    </div>
    <div class="id-email">
      <div class="email">
        <label for="email">E-mail</label>
        <input
          id="email"
          class="input"
          name="email"
          type="email"
          v-model="inputs.email"
        />
      </div>
      <slot name="slot-form"></slot>
    </div>
    <div class="description">
      <label class="description-label" for="description">Descrição</label>
      <textarea
        name="description"
        id="description"
        v-model="inputs.description"
      ></textarea>
    </div>
    <div class="button">
      <label
        v-if="this.$route.name === 'Contact'"
        v-show="!this.inputs.file"
        class="label-file"
        for="select-file"
        >Anexar arquivo</label
      >
      <label
        v-if="this.$route.name === 'WorkWithUs'"
        v-show="!this.inputs.file"
        class="label-file"
        for="select-file"
        >Anexar currículo</label
      >
      <label
        v-show="this.inputs.file"
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
    </div>
  </form>
</template>

<script>
export default {
  name: 'Form',
  data() {
    return {
      inputs: {
        name: '',
        last_name: '',
        email: '',
        description: '',
        file: null,
      },
    };
  },
  watch: {
    inputs: {
      handler() {
        this.$emit('form-inputs', this.inputs);
      },
      deep: true,
    },
  },
  methods: {
    addFile() {
      const file = this.$refs.file.files[0];
      this.inputs.file = file;
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  text-align: left;
}

label {
  display: block;
  color: #020202;
  opacity: 0.4;
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 13px;
}

.input {
  width: 100%;
  margin-bottom: 23px;
  height: 40px;
}

.id,
.id-email {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.name,
.last-name,
.email,
.subject,
.confirm-email {
  display: inline-block;
  width: 45%;
}

.description {
  width: 100%;
}

textarea {
  width: 100%;
  resize: none;
  height: 170px;
  margin: 23px 0;
}

.input,
textarea {
  border-radius: 4px;
  border: 1px solid #707070;
}

.description-label {
  margin-bottom: 0px;
}

.button {
  display: flex;
  justify-content: center;
}

input[type='file'] {
  display: none;
}

.label-file {
  background: none;
  border-radius: 4px;
  border: 1px solid #707070;
  color: #aeaeae;
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;
  width: 400px;
  text-align: center;
  padding: 12px 0;
  opacity: 1;
}

.label-file:hover {
  background: #707070;
  color: #fff;
}

.file-selected {
  background: #3b5ac0;
  color: #fff;
}
</style>
