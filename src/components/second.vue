<template>
  <div class="second">
    <h1>I am another page</h1>
    <a href="#">{{ author }}</a>

    <ul>
      <li v-for="article in articles">
        {{ article.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      author: 'Leon Xu',
      articles: []
    }
  },
  mounted: function() {
    this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {}, {
      headers: {},
      emulateJSON: true
    }).then(function(response) {
      this.articles = response.data.subjects
    }, function(response) {
      console.log(response)
    });
  }
}
</script>
<style lang="sass">

</style>
