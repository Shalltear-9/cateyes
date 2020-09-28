<template>
<div id="app">
  <Header></Header>
  <keep-alive>
    <router-view></router-view>
  </keep-alive>
  <Footer></Footer>
</div>
</template>

<script>
import Header from './components/index/header'
import Footer from './components/index/Footer'
export default {
  data() {
    return {}
  },
  components: {
    Header,
    Footer
  },
}
</script>

<style lang="less">
#app {
  background-color: #ffffff;
}
</style>
