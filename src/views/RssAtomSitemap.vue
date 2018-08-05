<template>
  <div id="rss">
    <div v-if="rss">
      <pre v-text="rss" />
      <hr>
    </div>
    <div v-if="atom">
      <pre v-text="atom" />
      <hr>
    </div>
    <div v-if="sitemap">
      <pre v-text="sitemap" />
      <hr>
    </div>
  </div>
</template>

<script>
  import butter from '@/buttercms'
  export default {
    name: 'rss-atom-sitemap',
    data() {
      return {
        rss: '',
        atom: '',
        sitemap: ''
      }
    },
    created() {
      this.getRss()
      this.getAtom()
      this.getSitemap()
    },
    methods: {
      getRss() {
        butter.feed.retrieve('rss').then((res) => {
          console.log(res.data.data)
          this.rss = res.data.data
        })
      },
      getAtom() {
        butter.feed.retrieve('atom').then((res) => {
          console.log(res.data.data)
          this.atom = res.data.data
        })
      },
      getSitemap() {
        butter.feed.retrieve('sitemap').then((res) => {
          console.log(res.data.data)
          this.sitemap = res.data.data
        })
      }
    }
  }
</script>