<template>
  <div id="app">
    <img src="./assets/logo.png" alt="">
    <h1>{{ msg }}</h1>

    <first></first>
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
