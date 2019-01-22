<template>
  <div class="page-wrap">
    <Header @openMore='openMore'></Header>
    <div class="content-wrap" :style="{'height': clickedSeaMore? 'calc(100vh - 230px)' : ''}">
      <Pages nums='5'></Pages>
      <div class="page-more" @click="goTo('/articleList')">
        more
      </div>
      <Imgs></Imgs>
      <div class="page-more" @click="goTo('/imgList')">
        more
      </div>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Pages from "../components/Pages";
import Imgs from "../components/Imgs";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default {
  data() {
    return {
      clickedSeaMore: false
    };
  },
  components: {
    Pages,
    Imgs,
    Footer,
    Header
  },
  methods: {
    openMore(v) {
      this.clickedSeaMore = v
    },
    goTo(v) {
      this.$router.push(v)
    }
  },
  mounted() {
    // this.getFc()
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.page-wrap {
  .content-wrap {
    height: calc(100vh - 110px);
    overflow-y: scroll;
    .page-more {
      text-align: right;
      padding-right: 20px;
      margin: 20px 0;
      cursor: pointer;
    }
  }
}
</style>
