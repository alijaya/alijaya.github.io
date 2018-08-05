<template>
  <div id="blog-post">
    <header>
      <prismic-image :field="image" />
      <h1>{{ title }}</h1>
      <p>{{ author.first_name }} {{ author.last_name }}</p>
      <p>{{ release_date }}</p>
    </header>
    <section v-for="(slice, index) in body" :key="index">
      <prismic-rich-text v-if="slice.slice_type === 'text'" :field="slice.primary.text"/>
    </section>

    <!-- <router-link v-if="post.meta.previous_post" :to="'/blog/' + post.meta.previous_post.slug" class="button">
      {{ post.meta.previous_post.title }}
    </router-link>
    <router-link v-if="post.meta.next_post" :to="'/blog/' + post.meta.next_post.slug" class="button">
      {{ post.meta.next_post.title }}
    </router-link> -->
  </div>
</template>

<script>
  export default {
    name: 'blog-post',
    data () {
      return {
        image: null,
        title: "",
        description: "",
        release_date: "",
        author: {
          first_name: "",
          last_name: "",
        },
        body: [],
      }
    },
    metaInfo () {
      return {
        title: this.title,
        meta: [
          {
            name: 'description',
            content: this.description,
          },
          {
            name: 'og:title',
            content: this.title,
          },
          {
            name: 'og:description',
            content: this.description,
          },
          {
            name: 'og:image',
            content: this.image.url
          }
        ]
      }
    },
    beforeRouteUpdate (to, from, next) {
      this.getContent()
      next()
    },
    created() {
      this.getContent()
    },
    methods: {
      getContent() {
        this.$prismic.client.getByUID('blog_post', this.$route.params.uid,
          { fetchLinks: ['author.first_name', 'author.last_name'] } )
        .then((response) => {
          console.log(response)
          this.image = response.data.image
          this.title = response.data.title
          this.description = this.$prismic.richTextAsPlain(response.data.description)
          this.release_date = response.data.release_date
          this.author.first_name = response.data.author.data.first_name
          this.author.last_name = response.data.author.data.last_name
          this.body = response.data.body
        })
      }
    }
  }
</script>