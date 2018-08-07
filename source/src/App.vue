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

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat:100,400|Inconsolata');

html {
  font-size: 20px;
}

body {
  margin: 0;
  padding: 0;

  font-family: 'Montserrat', sans-serif;
  font-weight: 100;
  line-height: 1.5rem;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.space {
  flex: 1 0 0;
}

.content p, .content ul, .content ol, .content dl, .content blockquote, .content pre, .content table, .content figure {
  margin: 0 0 1.5rem 0;
}

.content ul, .content ol {
  padding-left: 2rem;
}

.content dt {
  font-weight: bold;
}

.content dd {
  margin-left: 0;
  padding-left: 2rem;
}

.content blockquote {
  padding: 3rem;
  background-color: hsla(0, 0%, 0%, 0.2);
  font-style: italic;
}

.content pre {
  padding: 2rem;
  background-color: hsla(0, 0%, 0%, 0.2);
  overflow: auto;
  max-height: 50vh;
  font-family: 'Inconsolata', monospace;
}

.content table {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
}

.content th, .content td {
  padding: 0.5rem 1rem;
}

.content th {
  border-bottom: 2px solid hsla(0, 0%, 100%, 0.5);
  font-weight: bold;
  text-align: left;
}

.content td {
  border-top: 1px solid hsla(0, 0%, 100%, 0.25);
}

.content figure {
  text-align: center;
}

.content figure figcaption {
  font-style: italic;
  font-size: 0.75rem;
  opacity: 0.5;
}

.content h1, .content h2, .content h3, .content h4, .content h5, .content h6 {
  line-height: 1.5em;
  margin-top: 1em;
  margin-bottom: 0;
  font-weight: inherit;
}

.content h1 {
  font-size: 2.5rem;
}

.content h2 {
  font-size: 2rem;
}

.content h3 {
  font-size: 1.75rem;
}

.content h4 {
  font-size: 1.5rem;
}

.content h5 {
  font-size: 1.25rem;
  font-weight: bold;
}

.content h6 {
  font-size: 1rem;
  font-weight: bold;
}

.content a {
  color: hsl(0, 100%, 70%);
  text-decoration: none;
}

.content a:hover, .content a:active {
  color: hsl(0, 100%, 40%);
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
