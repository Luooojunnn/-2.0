<template>
    <div id="imgs">
        <img v-for="item in imgApi" :src="item.imgUrl" :key='item.id'>
    </div>
</template>
<script>
export default {
  data() {
    return {
      imgApi: []
    };
  },
  methods: {
    getImgs() {
          this.$http
          .get('getImgs', {
              params: {
                  nums: 3
              }
          })
          .then(res => {
              this.imgApi = res
              console.log(this.imgApi)
          })
    }
  },
  mounted() {
    this.getImgs()
  }
};
</script>
<style lang="scss" scoped>
#imgs {
  white-space: nowrap;
  overflow-x: scroll;
  overflow-y: hidden;
  padding-right: 10px;
  img {
    height: 220px;
    margin-left: 10px;
    cursor: pointer;
  }
}
</style>

