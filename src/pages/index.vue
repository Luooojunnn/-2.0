<template>
  <div class="page-wrap">
    <Pages></Pages>
    <div class="page-more">
      more
    </div>
    <Imgs></Imgs>
    <div class="page-more">
      more
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Pages from '../components/Pages'
import Imgs from '../components/Imgs'
import Footer from '../components/Footer'

export default {
  data() {
    return {
     
    }
  },
  components: {
    Pages,
    Imgs,
    Footer
  },
  methods: {
    // getFc() {
    //   this.$http
    //   .get('getTenPages', {
    //     params: {
    //       age: 11

    //     }
    //   })
    //   .then(res => {
    //     console.log(res)
    //   })
    // }
  },
  mounted() {
    // this.getFc()
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.page-wrap {
  margin-top: 10px;
  .page-more {
    text-align: right;
    padding-right: 20px;
    margin: 20px 0;
    cursor: pointer;
  }
}
</style>
