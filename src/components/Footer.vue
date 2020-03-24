<template>
  <footer>
    <p class="footer-text container">
      Copyright © - Todos os direitos reservados
    </p>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped>
footer {
  background: #000000;
  height: 48px;
  text-align: left;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  position: relative;
  top: 75px;
  border: 1px solid #707070;
  display: flex;
}

.footer-text {
  padding: 15px 0;
  flex: 1;
}
</style>
