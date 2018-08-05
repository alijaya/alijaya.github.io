<template>
  <div id="customer-page">
    <figure>
      <img :src="page.fields.customer_logo">
    </figure>
    <h1>{{ page.fields.headline }}</h1>
    <h3>Testimonials</h3>
    <div v-html="page.fields.testimonial" />
    <div v-html="page.fields.body" />
  </div>
</template>

<script>
  import butter from '@/buttercms'
  export default {
    name: 'customer-page',
    data() {
      return {
        slug: this.$route.params.slug,
        page: {
          slug: '',
          fields: {}
        }
      }
    },
    created() {
      this.getPage()
    },
    methods: {
      getPage() {
        butter.page.retrieve('customer_case_study', this.slug)
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