<template>
  <div id="app">
    <Header></Header>
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  data () {
    return {
      action: null,
      podcast: null
    }
  },
  components: {
    Header,
    Footer
  },
  created () {
    this.getLastPodcast()
  },
  methods: {
    getLastPodcast () {
      this.$http.get('podcasts/last').then(r => {
        this.podcast = r.data.podcast
        this.action = r.data['api.action']
      })
    }
  }
}
</script>

<style scopped>
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>
