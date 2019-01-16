<template>
    <div id="imgs">
        <img src="@/assets/file.png">
        <img src="@/assets/file.png">
        <img src="@/assets/file.png">
        <img src="@/assets/file.png">
        <img src="@/assets/file.png">
    </div>
</template>
<script>
export default {
  data() {
    return {
      imgApi: [
        {
          url: "xxx",
          tit: "第一张图片"
        },
        {
          url: "xxx",
          tit: "第一张图片"
        },
        {
          url: "xxx",
          tit: "第一张图片"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
#imgs {
  white-space: nowrap;
  overflow-x: scroll;
  img {
    width: 328px;
    height: 220px;
  }
}
</style>

