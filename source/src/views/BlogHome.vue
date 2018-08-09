<template>
  <div class="blog-home">
    <header class="section header">
      <div class="container content">
        <h1>{{ page_title }}</h1>
      </div>
    </header>
    <section class="section">
      <article 
        v-for="post in posts" 
        :key="post.uid" 
        class="media blog-list container">
        <figure class="media-left">
          <router-link :to="'/blog/' + post.uid">
            <prismic-image v-if="post.image.url" :field="post.image" />
          </router-link>
        </figure>
        <div class="media-content content">
          <h5>
            <router-link :to="'/blog/' + post.uid">
              {{ post.title }}
            </router-link>
          </h5>
          <prismic-rich-text :field="post.description" />
        </div>
      </article>
    </section>
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
      })
    }
  }
}

</script>

<style lang="scss" scoped>
@import '@/css/element-variables.scss';

.media.blog-list {
  margin-bottom: 1.5rem;

  .media-left {
    width: 10rem;

    img {
      width: 100%;
    }
  }
}

@include res(xs) {
  .media.blog-list {
    flex-direction: column;
    .media-left {
      width: 100%;
      margin: 0;
    }
  }
}

.section {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.header {
  margin-bottom: 1.5rem;
}

.container {
  width: 100%;
  max-width: 30rem;
}

</style>