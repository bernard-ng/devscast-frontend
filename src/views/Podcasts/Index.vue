<template>
<div class="posdcasts-index">

  <PodcastHero :podcast="lastPodcast"></PodcastHero>

  <main>
    <section id="#episodes" class="section-positive">
      <div class="container">
        <h2 class="title-default">Episodes</h2>
        <div class="row">
          <div class="col-sm-12 mb-40">
            <PodcastCard :podcast="lastPodcast" type="full"></PodcastCard>
          </div>

          <div v-for="p in podcasts" :key="p.id" class="col-sm-12 mb-40">
            <PodcastCard :podcast="p" type="full"></PodcastCard>
          </div>

          <div class="col-sm-12 text-center mb-50">
            <PodcastPagination :lastId="lastId"></PodcastPagination>
          </div>
        </div>
      </div>
    </section>
    <DonateSection></DonateSection>
  </main>
</div>
</template>

<script>
import PodcastHero from '@/components/Podcasts/PodcastHero.vue'
import PodcastCard from '@/components/Podcasts/PodcastCard.vue'
import PodcastPagination from '@/components/Podcasts/PodcastPagination'
import DonateSection from '@/components/Sections/DonateSection.vue'

export default {
  name: 'podcast-index',
  data () {
    return {
      action: '',
      podcasts: []
    }
  },
  computed: {
    lastPodcast () {
      return (typeof this.podcasts[0] === 'undefined') ? {} : this.podcasts[0]
    },

    lastId () {
      return this.podcasts[this.podcasts.length - 1].id
    }
  },
  mounted () {
    this.$http.get('podcasts').then(r => {
      this.podcasts = r.data.podcasts
      this.action = r.data['api.action']
    })
  },
  components: {
    PodcastCard,
    DonateSection,
    PodcastPagination,
    PodcastHero
  }
}
</script>
