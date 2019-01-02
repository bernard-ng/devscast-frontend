<template>
<div class="posdcasts-index">

  <PodcastHero :podcast="lastPodcast"></PodcastHero>

  <main>
    <section id="#episodes" class="section-positive transition">
      <div class="container">
        <h2 class="title-default">Episodes</h2>
        <div v-if="podcasts && !loading" class="row">
          <div v-for="p in podcasts" :key="p.id" class="col-sm-12 mb-40">
            <PodcastCard :podcast="p" type="full"></PodcastCard>
          </div>

          <div class="col-sm-12 text-center mb-50">
            <PodcastPagination :lastId="lastId"></PodcastPagination>
          </div>
        </div>
      </div>

      <LoadingWidget v-if="loading"></LoadingWidget>
    </section>
    <DonateSection></DonateSection>
  </main>
</div>
</template>

<script>
import PodcastHero from '@/components/Podcasts/PodcastHero.vue'
import PodcastCard from '@/components/Podcasts/PodcastCard.vue'
import PodcastPagination from '@/components/Podcasts/PodcastPagination'
import LoadingWidget from '@/components/Widgets/LoadingWidget.vue'
import DonateSection from '@/components/Sections/DonateSection.vue'

export default {
  name: 'podcast-index',
  data () {
    return {
      action: '',
      loading: true,
      podcasts: []
    }
  },
  computed: {
    lastPodcast: {
      get () {
        return (this.podcasts[0])? this.podcasts[0] : {};
      },
      set (value) {
        return value
      }
    },
    lastId () {
      return 1;
    }
  },
  mounted () {
    this.loading = false
    this.$http.get('podcasts').then(r => {
      this.loading = false
      this.podcasts = r.data.podcasts
      this.action = r.data['api.action']
    })
  },
  components: {
    PodcastCard,
    DonateSection,
    PodcastPagination,
    LoadingWidget,
    PodcastHero
  }
}
</script>
