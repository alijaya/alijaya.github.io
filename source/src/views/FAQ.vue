<template>
  <div id="faq">
    <h1>{{ page_title }}</h1>
    <div v-for="faq in faq_items" :key="faq.question">
      <p>{{ faq.question }}</p>
      <p>{{ faq.answer }}</p>
    </div>
  </div>
</template>

<script>
  import butter from '@/buttercms'
  export default {
    name: 'faq',
    data() {
      return {
        page_title: 'FAQ',
        faq_items: []
      }
    },
    created() {
      this.getFaqs()
    },
    methods: {
      getFaqs() {
        butter.content.retrieve(['faq_headline', 'faq_items'])
          .then((res) => {
            console.log(res.data.data)
            this.page_title = res.data.data.faq_headline[0].faq_headline
            this.faq_items = res.data.data.faq_items
          })
      }
    }
  }
</script>