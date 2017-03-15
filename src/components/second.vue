<template>
  <div class="second">
    <el-card class="box-card">
      <div class="clearfix">
        <h4 class="articles-title">豆瓣电影排行榜</h4>
      </div>
      <div class="text item" v-for="article in articles">
        {{ article.title }}
      </div>
    </el-card>
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
<style lang="scss">
  .articles-title {
    color: #20A0FF;
    line-height: 36px;
  }
</style>
