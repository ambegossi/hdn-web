<template>
  <section class="home container">
    <h1 class="title">Transformação Digital?</h1>
    <div class="content">
      <div class="photo">
        <img
          src="../assets/transformacao-digital.png"
          alt="Transformação Digital"
        />
      </div>
      <div class="text">
        <p>
          A transformação digital é utilizar a tecnologia para substituir as
          soluções tradicionais de problemas já bastante conhecidos.
        </p>
        <p>Mas é bem mais profunda que isso.</p>
        <p>
          Transformação digital antes de ser sobre tecnologia, é sobre a
          transformação. Tem a ver com cultura, com processos, com gente.
        </p>
        <p>
          Não tem relação com uma preparação para o futuro exatamente porque as
          inovações acontecem a todo instante. O mercado já é digital hoje.
        </p>
        <p>
          Isto não quer dizer que é só digitalizar as informações na empresa,
          tirar tudo do papel e colocar em um excel. O primeiro passo pode ser
          desenvolver um aplicativo, mas a transformação digital é estrutural.
        </p>
        <p>
          Processos e gestão na empresa precisam se adequar à esta nova
          realidade.
        </p>
        <p>Conte com a gente nesta mudança.</p>
      </div>
    </div>
    <div class="bottom-content">
      <div class="item">
        <div class="item-header">
          <img src="../assets/flat-blue-home-icon.png" alt="Home Icon" />
          <h2 class="item-title">Aqui tem um título</h2>
        </div>
        <p class="item-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod
          tempor incididunt ut labore et dolore magna aliqua. enim ad minim
          veniam, quis.
        </p>
      </div>
      <div class="item">
        <div class="item-header">
          <img src="../assets/flat-blue-home-icon.png" alt="Home Icon" />
          <h2 class="item-title">Aqui tem um título</h2>
        </div>
        <p class="item-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod
          tempor incididunt ut labore et dolore magna aliqua. enim ad minim
          veniam, quis.
        </p>
      </div>
      <div class="item">
        <div class="item-header">
          <img src="../assets/flat-blue-home-icon.png" alt="Home Icon" />
          <h2 class="item-title">Aqui tem um título</h2>
        </div>
        <p class="item-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod
          tempor incididunt ut labore et dolore magna aliqua. enim ad minim
          veniam, quis.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style scoped>
.container {
  flex-direction: column;
}

.title {
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: 28px;
}

.content {
  display: flex;
  flex-direction: row;
  margin-bottom: 230px;
}

.text {
  flex: 1;
  margin-left: 25px;
}

.text p {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 16px;
}

.bottom-content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 177px;
}

.item-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
}

.item-title {
  margin-left: 16px;
}

.item-text {
  margin-left: 56px;
  width: 222px;
}
</style>
