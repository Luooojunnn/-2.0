<template>
    <div id='article'>
        <div class="article-wrap">
            <h1>{{articleInfo.title}}</h1>
            <p class="info">
                <span>{{articleInfo.createTime}}</span>
                <span class="tag">{{articleInfo.tag}}</span>
            </p>
            <div v-html="articleInfo.content"></div>
        </div>
        <GoHome></GoHome>
    </div>
</template>
<script>
import GoHome from "../components/GoHome.vue";

export default {
  data() {
    return {
      articleInfo: {}
    };
  },
  components: {
    GoHome
  },
  methods: {
    getDetailArticle(id) {
      this.$http
        .get("getDetailArticle", {
          params: {
            id
          }
        })
        .then(res => {
          console.log(res);
          this.articleInfo = res;
        })
        .catch(err => {
          throw new Error(err);
        });
    },
    getId() {
      let id = +this.$route.params.id || 1;
      return id;
    }
  },
  mounted() {
    this.getDetailArticle(this.getId());
  }
};
</script>
<style lang="scss" scoped>
#article {
  .article-wrap {
    max-width: 700px;
    margin: 0 auto 0 auto;
    padding: 60px 20px 50px;
    h1 {
      font-size: 26px;
      margin: 0 0 45px;
      letter-spacing: 1px;
      font-weight: 400;
      color: #444;
      text-align: center;
    }
    .info {
      text-align: center;
      font-family: Montserrat, Helvetica Neue, Hiragino Sans GB, LiHei Pro,
        Arial, sans-serif;
      font-size: 13px;
      color: #999;
      margin: 0 0 30px;
      letter-spacing: 1px;
      .tag {
        display: inline-block;
        padding: 3px 6px;
        border-radius: 3px;
        border: 1px solid #ccc;
        margin-left: 30px;
      }
    }
  }
}
</style>

