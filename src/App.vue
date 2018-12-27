<template>
  <div id="app">
    <Header></Header>

    <PodcastHero :podcast="podcast"></PodcastHero>

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
import PageHeader from '@/components/PageHeader.vue'

export default {
  data () {
    return {
      name: 'Devcasts',
      podcast: null
    }
  },
  components: {
    Header,
    Footer,
    PodcastHero,
  },
  created () {
    this.getLastPodcast()
  },
  methods: {
    getLastPodcast () {
      this.$http.get('http://localhost:8081/podcasts/last').then(r => {
        this.podcast = r.data.podcast
      })
    }
  }
}
</script>
