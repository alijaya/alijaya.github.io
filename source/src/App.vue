<template>
  <div id="app">
    <div id="nav">
      <el-menu :default-active="activeIndex" router mode="horizontal">
        <el-menu-item index="/">Home</el-menu-item>
        <el-menu-item index="/blog">Blog</el-menu-item>
      </el-menu>
    </div>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        activeIndex: '/'
      }
    },
    created () {
      this.activeIndex = '/' + this.$route.path.split('/')[0]
      console.log(this.activeIndex)
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
