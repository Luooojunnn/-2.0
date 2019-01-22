<template>
    <div id="logo" @click="goHome">
        <div class="logo-text" data-word='JLM'>
            JLM
            <div class="white-line"></div>
        </div>
    </div>
    
</template>
<script>
export default {
  methods: {
    goHome() {
      this.$router.push('/')
    }
  }
};
</script>

<style lang='scss' scoped>
#logo {
  .logo-text {
    position: relative;
    transform: skewX(0deg);
    font-size: 64px;
    font-family: Raleway, Verdana, Arial, sans-serif;
    animation: skewX 5s ease-in infinite;
    height: 64px;
  }

  .white-line {
    position: absolute;
    left: 0;
    top: 15px;
    width: 100%;
    height: 3px;
    background: #fff;
    z-index: 4;
    animation: whiteMove 3s ease-out infinite;
    mix-blend-mode: luminosity;
  }

  .logo-text:before {
    content: attr(data-word);
    position: absolute;
    top: 0;
    left: 1px;
    height: 0px;
    color: rgba(255, 0, 0, 0.9);
    overflow: hidden;
    z-index: 2;
    animation: redShadow 1.5s ease-in infinite;
    filter: contrast(200%);
    text-shadow: 0.1px 0 0 red;
    mix-blend-mode: color-burn;
  }

  .logo-text:after {
    content: attr(data-word);
    position: absolute;
    top: 0;
    left: -3px;
    height: 64px;
    color: rgba(0, 0, 0, 0.8);
    overflow: hidden;
    z-index: 3;
    background: rgba(255, 255, 255, 0.9);
    animation: redHeight 2s ease-out infinite;
    filter: contrast(200%);
    mix-blend-mode: hard-light;
  }

  @keyframes redShadow {
    20% {
      left: -1px;
      height: 32px;
    }
    60% {
      left: 2px;
      height: 6px;
    }
    100% {
      left: -2px;
      height: 42px;
    }
  }

  @keyframes redHeight {
    20% {
      height: 42px;
    }
    35% {
      height: 12px;
    }
    50% {
      height: 40px;
    }
    60% {
      height: 20px;
    }
    70% {
      height: 34px;
    }
    80% {
      height: 22px;
    }
    100% {
      height: 0px;
    }
  }

  @keyframes whiteMove {
    8% {
      top: 38px;
    }
    10% {
      top: 8px;
    }
    12% {
      top: 42px;
    }
    99% {
      top: 36px;
    }
  }

  @keyframes skewX {
    78% {
      transform: skewX(0);
    }
    79% {
      transform: skewX(10deg);
    }
    80% {
      transform: skewX(-10deg);
    }
    81% {
      transform: skewX(0);
    }
  }
}
</style>
