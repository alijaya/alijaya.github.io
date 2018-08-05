import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'

import PrismicVue from 'prismic-vue'
import linkResolver from '@/prismic/link-resolver'
import htmlSerializer from '@/prismic/html-serializer'

Vue.config.productionTip = false

Vue.use(PrismicVue, {
  endpoint: window.prismic.endpoint,
  linkResolver,
  htmlSerializer
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
