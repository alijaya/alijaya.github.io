import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'

import PrismicVue from 'prismic-vue'
import linkResolver from '@/prismic/link-resolver'
import htmlSerializer from '@/prismic/html-serializer'

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

Vue.use(PrismicVue, {
  endpoint: window.prismic.endpoint,
  linkResolver,
  htmlSerializer
})

Vue.use(Element)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
