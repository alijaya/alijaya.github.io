<template>
  <div id="app">
    <header class="header">
      <div class="logo">Ali Jaya Meilio Lie</div>
      <div class="space" />
      <el-menu 
        :default-active="activeIndex" 
        router mode="horizontal"
        class="nav">
        <el-menu-item index="/">Home</el-menu-item>
        <el-menu-item index="/blog">Blog</el-menu-item>
      </el-menu>
    </header>
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
  metaInfo: {
    titleTemplate: (titleChunk) => {
      return titleChunk ? `${titleChunk} - Ali Jaya Meilio Lie` : 'Ali Jaya Meilio Lie';
    }
  },
  created () {
    this.activeIndex = '/' + this.$route.path.split('/')[1]
  }
}
</script>

<style lang="scss">
@import '@/css/element-variables.scss';
@import url('https://fonts.googleapis.com/css?family=Inconsolata');

html {
  font-size: 20px;
  
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $--color-text-regular;
}

a {
  color: $--color-primary;
  text-decoration: none;

  &:hover, &:focus {
    color: mix($--color-white, $--color-primary, $--button-hover-tint-percent);
  }

  &:active {
    color: mix($--color-black, $--color-primary, $--button-active-shade-percent);
  }
}

body {
  margin: 0;
  padding: 0;

  font-weight: 100;
  line-height: 1.5rem;
}

.space {
  flex: 1 0 0;
}

</style>

<style scoped>
.header {
  display: flex;
  align-items: center;
}

.logo {
  padding: 0 1rem;
}

.nav {
}
</style>
