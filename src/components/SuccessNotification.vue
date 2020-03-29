<template>
  <transition mode="out-in">
    <p class="success">Formulário enviado com sucesso!</p>
  </transition>
</template>

<script>
export default {
  name: 'SuccessNotification',
};
</script>

<style scoped>
.success {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 1px solid #707070;
  border-radius: 4px;
  background-color: #41b883;
  color: #fff;
  font-weight: bold;
  height: 40px;
  margin: 14px 0 20px 0;
}
</style>
