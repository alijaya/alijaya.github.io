<template>
  <div class="blog-post">
    <header class="section header">
      <div class="container content">
        <prismic-image 
          v-if="image.url"
          :field="image" 
          class="hero-image" />
        <h1>{{ title }}</h1>
        <p>
          <span>by </span> 
          <a>{{ author.first_name }} {{ author.last_name }}</a>
          <span> - </span>
          <span>{{ date }}</span>
        </p>
      </div>
    </header>
    <section 
      v-for="(slice, index) in body" 
      :key="index" 
      :class="['section', 'slice', slice.slice_type]">
      <prismic-rich-text 
        v-if="slice.slice_type === 'text'" 
        :field="slice.primary.text" 
        class="container content" />
      <vue-markdown
        v-if="slice.slice_type === 'markdown'"
        :source="slice.primary.markdown[0].text" 
        class="container content" />
    </section>
    <section class="section comment">
      <disqus-discussion 
        ref="disqus"
        :shortname="$config.disqusShortname" 
        :identifier="id"
        :url="$config.url + $route.path" 
        :title="title"
        class="container" />
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
import relativeDate from '@/js/relativeDate'
// import footnote from '@/js/footnote'
import { resetId } from '@/components/Footnote'

export default {
  name: 'blog-post',
  data () {
    return {
      id: undefined,
      image: {},
      title: '',
      description: '',
      date: '',
      author: {
        first_name: '',
        last_name: '',
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
          content: this.image ? this.image.url : '',
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
        resetId()

        this.id = response.id
        this.image = response.data.image
        this.title = response.data.title
        this.description = this.$prismic.richTextAsPlain(response.data.description)
        this.date = relativeDate(response.first_publication_date)
        this.author.first_name = response.data.author.data.first_name
        this.author.last_name = response.data.author.data.last_name
        this.body = response.data.body

        console.log('need update')
      })
    }
  }
}
</script>

<style scoped>
.header {
  margin-bottom: 1.5rem;
}

.hero-image {
  display: block;
  width: 100%;
}

.comment {
  margin-top: 3rem;
}
</style>