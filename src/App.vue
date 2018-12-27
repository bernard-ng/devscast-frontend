<template>
  <div id="app">
    <Header></Header>
<<<<<<< HEAD

    <PodcastHero :podcast="podcast"></PodcastHero>

=======
    <PodcastHero v-if="podcast" :podcast="podcast"></PodcastHero>
>>>>>>> master
    <main id="main" class="main">
      <transition name="slide">
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
    PodcastHero,
  },
  created () {
    this.getLastPodcast()
  },
  methods: {
    getLastPodcast () {
      this.$http.get('http://localhost:8081/podcasts/last').then(r => {
        this.podcast = r.data.podcast
        this.action = r.data['api.action']
      })
    }
  }
}
</script>
