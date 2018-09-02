<template>
  <div>
    <h1>{{ msg }}</h1>
    <div class="book">
      {{books}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Books',
  data: function () {
    return {
      msg: 'Книги',
      bookself: 1,
      page:1
    }
  },
  mounted: function () {
    this.$store.dispatch('getBooks',{ bookself: this.bookself, page: this.page})
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
