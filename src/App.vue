<template>
  <div id="app">
    <img src="./assets/logo.png" alt="">
    <h1>{{ msg }}</h1>

    <first></first>

  <router-view></router-view>

  <hr>

    <router-link to="/">homePage</router-link>
    <router-link to="/first">firstPage</router-link>
    <router-link to="/second">secondPage</router-link>
  </div>
</template>

<script>
import first from './components/first.vue'

export default{
   data () {
     return {
       msg: 'Hello Vue!'
     }
   },
   components: {
     first
   }
}
</script>

<style lang="sass">

</style>
