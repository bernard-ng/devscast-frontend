<template>
  <div id="app">
    <Header></Header>

    <transition name="fade">
      <PodcastHero v-if="podcast" :podcast="podcast"></PodcastHero>
    </transition>

    <main id="main" class="main">
      <transition name="fade">
        <router-view/>
      </transition>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import PodcastHero from '@/components/Podcasts/PodcastHero.vue'

export default {
  data () {
    return {
      action: null,
      podcast: null
    }
  },
  components: {
    Header,
    Footer,
    PodcastHero
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
