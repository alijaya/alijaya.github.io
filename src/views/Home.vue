<template>
  <div class="home">
    <figure>
      <img :src="page.fields.hero_image">
    </figure>
    <h1>{{ page.fields.headline }}</h1>
    <button>{{ page.fields.call_to_action }}</button>

    <h3>Customers Love Us!</h3>
    <!-- Loop over customer logos -->
    <img v-for="logo in page.fields.customer_logos" :key="logo.logo_image" :src="logo.logo_image">
  </div>
</template>

<script>
// @ is an alias to /src
import butter from '@/buttercms'

export default {
  name: 'home',
  data() {
    return {
      page: {
        fields: {}
      }
    }
  },
  created() {
    this.getPage()
  },
  methods: {
    getPage() {
      butter.page.retrieve('*', 'homepage')
        .then((res) => {
          console.log(res.data.data)
          this.page = res.data.data
        }).catch((res) => {
          console.log(res)
        })
    }
  }
}
</script>
