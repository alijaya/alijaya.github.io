import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'

import PrismicVue from 'prismic-vue'
import linkResolver from '@/prismic/link-resolver'
import htmlSerializer from '@/prismic/html-serializer'

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import VueMarkdown from 'vue-markdown'

Vue.config.productionTip = false

Vue.use(PrismicVue, {
  endpoint: window.prismic.endpoint,
  linkResolver,
  htmlSerializer
})

Vue.use(Element)

Vue.component('vue-markdown', VueMarkdown)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
