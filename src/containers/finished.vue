<template>
  <h1>{{msg}}</h1>
</template>

<script>
export default {
  name: 'Finished',
  data: function () {
    return {
      msg: 'Прочитанные книги',
      bookself: 3
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
