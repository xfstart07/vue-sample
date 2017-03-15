<template>
  <div id="first">
    <h1>I am a title.</h1>
    <a href="#">written by {{ author }}</a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      author: 'Leon Xu'
    }
  }
}
</script>