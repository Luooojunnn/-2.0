<template>
    <div id='img-list'>
        <Header @openMore='openMore'></Header>
        <div class="img-content-wrap" v-for="item in imgApi" :key="item.id">
            <div class="img-content-item">
                <img :src="item.imgUrl">
                <p>{{item.desc}}</p>
                <p>{{item.createTime}}</p>
            </div>
        </div>
    </div>
</template>
<script>
import Header from "../components/Header";

export default {
  data() {
      return {
          imgApi: []
      }
  },
  components: {
    Header
  },
  methods: {
    openMore(v) {
      this.clickedSeaMore = v;
    },
    getImgs() {
      this.$http
        .get("getImgs", {
          params: {
            nums: 1000
          }
        })
        .then(res => {
          this.imgApi = res;
          console.log(this.imgApi);
        });
    }
  },
  mounted() {
      this.getImgs()
  }
};
</script>
<style lang="scss" scoped>
#img-list {
  .img-content-wrap {
      width: calc(100% - 20px);
      margin: 14px 0 0 10px;
      padding: 12px;
      box-sizing: border-box;
      border: solid 1px rgba(166, 166, 166, .3);
      transition: all .4s ease;
    .img-content-item {
        img {
            width: 100%;
            border-radius: 4px;
        }
    }
    &:hover {
        box-shadow: 0 0 15px 2px #B5B5B5;
        transform: translateY(-3px);
    }
  }
}
</style>

