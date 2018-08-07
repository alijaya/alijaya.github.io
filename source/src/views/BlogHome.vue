<template>
  <div class="blog-home">
    <h1>{{ page_title }}</h1>
    <div v-for="post in posts" :key="post.uid">
      <router-link :to="'/blog/' + post.uid">
        <article class="media">
          <figure>
            <prismic-image :field="post.image" />
          </figure>
          <h2>{{ post.title }}</h2>
          <prismic-rich-text :field="post.description" />
        </article>
      </router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'blog-home',
  data() {
    return {
      page_title: 'Blog',
      posts: []
    }
  },
  metaInfo: {
    title: 'Blog',
  },
  created() {
    this.getContent()
  },
  methods: {
    getContent() {
      const options = {
        fetch: [
          'blog_post.title',
          'blog_post.image',
          'blog_post.description',
          'blog_post.release_date',
        ],
        orderings: '[my.blog_post.release_date desc]'
      }
      this.$prismic.client.query(
        this.$prismic.Predicates.at('document.type', 'blog_post'), options
      ).then((response) => {
        this.posts = response.results.map((doc) => {
          return {
            uid: doc.uid,
            image: doc.data.image,
            title: doc.data.title,
            description: doc.data.description,
            date: doc.first_publication_date,
          }
        })
        console.log(this.posts)
      })
    }
  }
}

</script>