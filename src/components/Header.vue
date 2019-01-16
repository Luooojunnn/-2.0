<template>
    <div id="main-header-wrap">
        <div class="main-header">
            <div class="logo-wrap">
                <logo></logo>
            </div>
            <div class="oper-wrap">
                <span>Home</span>
                <span>Search</span>
                <span>About</span>
            </div>
            <div class="oper-more" @click="openMore">
                <div class="oper-more-item" :class="seaMore?'oper-more-item1':''"></div>
                <div class="oper-more-item" :class="seaMore?'oper-more-item2':''"></div>
                <div class="oper-more-item oper-more-item3"></div>
            </div>
        </div>
        <div class="oper-more-menu" :class="clickedSeaMore?(seaMore?'oper-more-menu1':'oper-more-menu2'):''">
            <div>Home</div>
            <div>Search</div>
            <div>About</div>
        </div>
    </div>
</template>
<script>
import logo from "./Logo";
import { formatTime } from "../utils/format.js";

export default {
  data() {
    return {
      clickedSeaMore: false,
      seaMore: false
    };
  },
  mounted() {},
  methods: {
    openMore() {
      this.seaMore = !this.seaMore
      this.clickedSeaMore = true
      console.log(this.seaMore)
    }
  },
  components: {
    logo
  }
};
</script>

<style lang='scss' scoped>
#main-header-wrap {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  box-shadow: 1px 2px 3px #e6e6e6;
  padding: 0 10px 10px;
  .main-header {
    padding-top: 28px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo-wrap {
      padding-left: 5px;
    }
    .oper-wrap {
      span {
        margin: 0 18px;
        font-size: 15px;
        color: #232323;
        padding: 5px;
        cursor: pointer;
      }
    }
    .oper-more {
      display: none;
    }
  }
  .oper-more-menu {
    height: 0;
    overflow: hidden;
    cursor: pointer;
    div {
      text-align: center;
      margin: 3px 0;
      height: 30px;
      line-height: 30px;
      font-size: 15px;
      font-weight: 300;
    }
  }
  .oper-more-menu1 {
    border-top: solid 1px #e6e6e6;
    margin-top: 8px;
    padding-top: 8px;
    animation: heightAdd2 1s cubic-bezier(.12,.65,.66,1) forwards;
  }
  .oper-more-menu2 {
    border-top: solid 1px #e6e6e6;
    margin-top: 8px;
    padding-top: 8px;
    animation: heightReduce 1s cubic-bezier(.12,.65,.66,1) forwards;
  }
  @media screen and (max-width: 768px) {
    .oper-wrap {
      display: none;
    }
    .oper-more {
      display: block !important;
      margin-right: 15px;
      min-height: 45px;
      padding-top: 22px;
      .oper-more-item {
        position: relative;
        width: 20px;
        height: 2px;
        background: rgba(0, 0, 0, 1);
        margin-bottom: 6px;
      }
      .oper-more-item1::before,
      .oper-more-item1::after {
        content: "";
        width: 2px;
        height: 10px;
        background-color: rgba(0, 0, 0, 1);
        position: absolute;
        animation: heightAdd 0.8s ease-in-out;
      }
      .oper-more-item1::after {
        right: 0;
        bottom: -16px;
      }
      .oper-more-item2 {
        opacity: 0;
        animation: colorReduce 0.5s ease-in-out;
      }
    }
    @keyframes heightAdd {
      0% {
        height: 0;
      }
      100% {
        height: 10px;
      }
    }
    @keyframes colorReduce {
      0% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
    @keyframes heightAdd2 {
      0% {
        height: 0;
      }
      100% {
        height: 108px;
      }
    }
    @keyframes heightReduce {
      0% {
        height: 108px;
      }
      100% {
        border-top: solid 1px #fff;
        margin-top: 0px;
        padding-top: 0px;
        height: 0;
      }
    }
  }
}
</style>
