<template>
  <div id="disqus_thread" />
</template>

<script>
// https://github.com/disqus/disqus-react/blob/master/src/DiscussionEmbed.jsx

import { insertScript, removeScript } from '@/js/script'

export default {
  name: 'disqus-discussion',
  props: {
    shortname: {
      type: String,
      required: true,
    },
    identifier: {
      type: String,
      required: false,
      default: undefined,
    },
    url: {
      type: String,
      required: false,
      default: undefined,
    },
    title: {
      type: String,
      required: false,
      default: undefined,
    },
    category_id: {
      type: String,
      required: false,
      default: undefined,
    },
    remote_auth_s3: {
      type: String,
      required: false,
      default: undefined,
    },
    api_key: {
      type: String,
      required: false,
      default: undefined,
    },
    sso_config: {
      type: Object,
      required: false,
      default: undefined,
    },
    language: {
      type: String,
      required: false,
      default: undefined,
    }
  },
  watch: {
    shortname () {
      this.resetInstance()
    }
  },
  created () {
    this.$watch(
      (vm) => (vm.identifier, vm.url, vm.title, vm.category_id, vm.remote_auth_s3, vm.api_key, vm.sso_config, vm.language, Date.now()),
      this.updateConfig.bind(this)
    )
  },
  mounted () {
    this.resetInstance()
  },
  methods: {
    resetInstance () {
      const doc = window.document

      if (window.disqus_shortname && window.disqus_shortname !== this.shortname) {
        // clean instance

        removeScript('dsq-embed-scr')

        if (window.DISQUS) {
          window.DISQUS.reset({})
        }

        try {
          delete window.DISQUS
        } catch (error) {
          window.DISQUS = undefined
        }

        const disqusThread = doc.getElementById('disqus_thread')
        if (disqusThread) {
          while (disqusThread.hasChildNodes()) {
            disqusThread.removeChild(disqusThread.firstChild)
          }
        }
      }

      // load instance

      if (window.DISQUS && doc.getElementById('dsq-embed-scr')) {
        this.updateConfig()
      } else {
        window.disqus_config = this.getDisqusConfig()
        insertScript(`https://${this.shortname}.disqus.com/embed.js`, 'dsq-embed-scr', doc.body)
      }
    },

    updateConfig () {
      window.DISQUS.reset({
        reload: true,
        config: this.getDisqusConfig()
      })
    },

    getDisqusConfig () {
      const self  = this
      return function () {
        this.page.identifier = self.identifier
        this.page.url = self.url
        this.page.title = self.title
        this.page.category_id = self.category_id
        this.page.remote_auth_s3 = self.remote_auth_s3
        this.page.api_key = self.api_key
        this.sso_config = self.sso_config
        this.language = self.language
        this.callbacks.onReady = [() => self.$emit('ready')]
        this.callbacks.onNewComment = [(comment) => self.$emit('new-comment', comment)]
      }
    },
  }
}

</script>