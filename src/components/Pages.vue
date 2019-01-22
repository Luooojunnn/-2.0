<template>
    <div id="pages">
        <p v-for="item in pageApi" :key="item.id" class="tit" @click='jumpTo(item.id)'>
            <span class="time">{{item.createTime}}</span>
            <span class="page-tit">{{item.title}}</span>
        </p>
    </div>
</template>
<script>

export default {
  props: {
    nums: String
  },
  data() {
    return {
      pageApi: []
    };
  },
  
  methods: {
      getArticles() {
          this.$http
          .get('getArticles', {
              params: {
                  nums: this.nums
              }
          })
          .then(res => {
              this.pageApi = res
          })
          .catch(err => {
            throw new Error(err)
          })
      },
      jumpTo(id) {
        this.$router.push('/article/' + id)
      }
  },
  mounted() {
      this.getArticles()
  }
};
</script>
<style lang="scss" scoped>
#pages {
  .tit {
    padding: 30px 0 30px;
    border-bottom: 1px solid #e6e6e6;
    span {
      display: inline-block;
    }
    .time {
      font-size: 13px;
      color: #999;
      margin: 0;
      font-weight: 400;
      letter-spacing: 1px;
    }
    .page-tit {
      margin-left: 68px;
      font-size: 20px;
      color: #444;
      font-weight: 400;
      letter-spacing: 1px;
      cursor: pointer;
      &:hover {
          color:#3db8c1;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  #pages {
    padding-left: 10px;
    .tit {
      padding-bottom: 20px;
      padding-left: 10px;
      span {
        display: block;
      }
      .time {
        margin-bottom: 12px;
      }
      .page-tit {
        margin-left: 0;
      }
    }
  }
}
</style>

