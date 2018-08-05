<template>
  <div id="customers-home">
    <div v-for="page in pages" :key="page.slug">
      <router-link :to="'/customers/' + page.slug">
        <div>
          <img :src="page.fields.customer_logo" alt="">
          <h2>{{ page.fields.headline }}</h2>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
  import butter from '@/buttercms'
  export default {
    name: 'customers-home',
    data() {
      return {
        page_title: 'Customers',
        pages: []
      }
    },
    created() {
      this.getPages()
    },
    methods: {
      getPages() {
        butter.page.list('customer_case_study')
          .then((res) => {
            console.log(res.data.data)
            this.pages = res.data.data
          })
      }
    }
  }
</script>