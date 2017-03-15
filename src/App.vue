<template>
  <div id="app">
    <img src="./assets/logo.png" alt="">
    <h1>{{ msg }}</h1>

    <first></first>

  <router-view></router-view>

  <hr>

    <router-link class="el-button el-button--success" to="/">homePage</router-link>
    <router-link class="el-button el-button--danger" to="/first">firstPage</router-link>
    <router-link class="el-button el-button--warning" to="/second">secondPage</router-link>
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

<style lang="scss">
  a {
    text-decoration: none;
  }
</style>
