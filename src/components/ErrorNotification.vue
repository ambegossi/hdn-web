<template>
  <transition>
    <p class="error" v-if="error !== ''" v-html="error"></p>
  </transition>
</template>

<script>
export default {
  name: 'ErrorNotification',
  props: ['error'],
};
</script>

<style scoped>
.error {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 1px solid #707070;
  border-radius: 4px;
  background-color: #e26363;
  color: #fff;
  font-weight: bold;
  height: 40px;
  margin: 14px 0 20px 0;
}
</style>
