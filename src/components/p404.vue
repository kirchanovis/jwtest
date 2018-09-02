<template>
  <div class="error-page">
    <h2 class="error-page__title">Ошибка 404</h2>
    <p class="error-page__details">К сожалению, такой страницы не существует. <br></p>
  </div>
</template>

<script>
export default {
  name: 'Page404',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error-page {
    margin: 0 auto;
    padding: 110px 0 0;
    max-width: 960px;
    text-align: center;
}
.error-page__title {
    margin: 0 0 35px;
    font-size: 70px;
    letter-spacing: .07em;
    text-transform: none;
}
.error-page__details {
    font-size: 21px;
    line-height: 1.5;
    margin: 0 0 30px;
    font-weight: 300;
}
</style>
