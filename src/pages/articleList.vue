<template>
    <div id='article-list'>
        <Header @openMore='openMore'></Header>
        <Pages nums='1000'></Pages>
    </div>
</template>
<script>
import Pages from "../components/Pages";
import Header from "../components/Header";

export default {
    components: {
        Pages,
        Header
    },
    methods: {
        openMore(v) {
            this.clickedSeaMore = v
        },
    },
    mounted() {
    }
}
</script>
<style lang="scss" scoped>
    #article-list {
        min-height: 100vh;
    }
</style>

