<template>
    <div id="app">
      <transition name="route-transition">
        <router-view/>
      </transition>
    </div>
</template>

<script>
export default {
  name: "App",
  components: {}
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 80%;
  margin: 0 auto;
}
@media screen and (max-width: 768px) {
  #app {
    max-width: 100%;
  }
}
/* .route-transition-leave-active {
  transition: all .6s;
}
.route-transition-leave-to {
  opacity: 0;
  transform: rotate(180deg);
  transform-origin: left top;
} */

.route-transition-enter-active {
  transition: all .1s ease;
}
.route-transition-leave-active {
  transition: all .1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.route-transition-enter, .route-transition-leave-to{
  opacity: 0;
}
</style>
