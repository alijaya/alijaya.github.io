<template>
  <div id="blog-post">
    <h1>{{ post.data.title }}</h1>
    <h4>{{ post.data.author.first_name }} {{ post.data.author.last_name }}</h4>
    <div v-html="post.data.body" />

    <router-link v-if="post.meta.previous_post" :to="'/blog/' + post.meta.previous_post.slug" class="button">
      {{ post.meta.previous_post.title }}
    </router-link>
    <router-link v-if="post.meta.next_post" :to="'/blog/' + post.meta.next_post.slug" class="button">
      {{ post.meta.next_post.title }}
    </router-link>
  </div>
</template>

<script>
  import butter from '@/buttercms'
  export default {
    name: 'blog-post',
    data() {
      return {
        post: {
          data: {
            author: {}
          },
          meta: {}
        }
      }
    },
    watch: {
      $route() {
        this.getPost()
      }
    },
    created() {
      this.getPost()
      this.getCategories()
      this.getPostsByCategory()
    },
    methods: {
      getCategories() {
        butter.category.list()
          .then((res) => {
            console.log('List of Categories')
            console.log(res.data.data)
          })
      },
      getPostsByCategory() {
        butter.category.retrieve('example-category', {
          include: 'recent_posts'
        }).then((res) => {
          console.log('Posts with specific category:')
          console.log(res)
        })
      },
      getPost() {
        butter.post.retrieve(this.$route.params.slug)
          .then((res) => {
            console.log(res.data)
            this.post = res.data
          }).catch((res) => {
            console.log(res)
          })
      }
    }
  }
</script>