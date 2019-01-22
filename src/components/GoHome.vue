<template>
    <div id='go-home' @click="goHome">
        Back
    </div>
</template>
<script>
export default {
    methods: {
        goHome() {
            this.$router.back(-1)
        }
    }
}
</script>
<style lang="scss" scoped>
    #go-home {
        width: 44px;
        height: 44px;
        border-radius: 22px;
        font-size: 12px;
        text-align: center;
        line-height: 40px;
        box-sizing: border-box;
        border: solid 1px #c6c6c6;
        position: fixed;
        bottom: 50px;
        right: 50px;
        background-color: #c6c6c6;
        color: #fff;
        text-shadow: 1px 2px 2px #000;
        cursor: pointer;
        &:hover {
            box-shadow: 0px 0px 3px 1px #dccfcf;
        }
    }
</style>

