<template>
  <div>
    <ul class="menu">
      <li class="nav__item is-active">
        <router-link class="menu__link" :to="`/read/${user}`">книги</router-link>
      </li>
      <li class="nav__item">
        <router-link class="menu__link" :to="`/read/${user}/plans`">хочет прочитать</router-link>
      </li>
      <li class="nav__item">
        <router-link class="menu__link" :to="`/read/${user}/finished`">прочтитанные книги</router-link>
      </li>
    </ul>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app',
  computed:{
    user() {
      if (this.$route.params.id) {
        return Number(this.$route.params.id)
      } else {
        return 1
      }
    } 
  }
}
</script>

<style>

</style>
