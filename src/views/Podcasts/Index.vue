<template>
<div class="posdcasts-index">
  <section id="#episodes" class="section-positive">
    <div class="container">
      <h2 class="title-default">Episodes</h2>
      <div class="row">

        <!-- ===== LAST PODCAST ===== -->
        <div class="col-sm-12 mb-40">
          <PodcastCard :podcast="lastPodcast" type="full"></PodcastCard>
        </div>

        <!-- ===== PODCAST CARD LIST ===== -->
        <div v-for="p in podcasts" :key="p.id" class="col-sm-12 mb-40">
          <PodcastCard :podcast="p" type="full"></PodcastCard>
        </div>

        <div class="col-sm-12 text-center mb-50">
          <!-- ===== PAGINATION ===== -->
          <PodcastPagination :lastId="lastId"></PodcastPagination>
        </div>
      </div>
    </div>
  </section>

  <!-- ===== DONATE ===== -->
  <DonateSection></DonateSection>
</div>
</template>

<script>
import PodcastCard from '@/components/Podcasts/PodcastCard.vue'
import PodcastPagination from '@/components/Podcasts/PodcastPagination'
import DonateSection from '@/components/Sections/DonateSection.vue'

export default {

  name: 'podcast.index',
  data () {
    return {
      action: '',
      lastPodcast: '',
      lastId: '',
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
  components: {
    PodcastCard,
    DonateSection,
    PodcastPagination
  },
  mounted () {
    this.$http.get('http://localhost:8081/podcasts').then(r => {
      this.podcasts = r.data.podcasts
      this.action = r.data['api.action']
    })
  }
}
</script>
