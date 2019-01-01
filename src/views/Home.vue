<template>
<div class="home">

  <transition name="fade">
    <keep-alive>
      <PodcastHero v-if="podcast" :podcast="podcast"></PodcastHero>
    </keep-alive>
  </transition>

  <main id="main" class="main">
    <section id="#episodes" class="section-positive">
      <div class="container">
        <h2 class="title-default">Another Episodes</h2>

        <div v-if="podcasts" class="row">
          <div v-for="p in podcasts" :key="p.id" class="col-sm-6 mb-40">
            <PodcastCard :podcast="p" type="boxed"></PodcastCard>
          </div>

          <div class="col-sm-12 mb-50">
            <router-link :to="{name: 'podcasts.index'}" class="btn btn-primary btn-block btn-lg">
              View more episodes
            </router-link>
          </div>
        </div>

        <LoadingWidget v-if="loading"></LoadingWidget>
      </div>
    </section>

    <AboutSection></AboutSection>
    <NewsletterSection></NewsletterSection>
    <DonateSection></DonateSection>
  </main>
</div>
</template>

<script>
import PodcastHero from '@/components/Podcasts/PodcastHero.vue'
import PodcastCard from '@/components/Podcasts/PodcastCard.vue'
import DonateSection from '@/components/Sections/DonateSection.vue'
import NewsletterSection from '@/components/Sections/NewsletterSection.vue'
import AboutSection from '@/components/Sections/AboutSection.vue'
import LoadingWidget from '@/components/Widgets/LoadingWidget.vue'

export default {
  name: 'Home',
  data () {
    return {
      error: null,
      message: '',
      podcasts: null,
      loading: false
    }
  },
  mounted () {
    this.loading = true
    this.$http.get('home').then(r => {
      this.loading = false
      this.podcasts = r.data.podcasts
      this.podcast = this.podcasts[0]
      this.message = r.data['api.action']
    })
  },
  computed: {
    podcast: {
      get () {
        if (this.podcasts) {
          return this.podcasts[0]
        } else {
          return []
        }
      },
      set (value) {
        return value
      }
    }
  },
  components: {
    PodcastCard,
    DonateSection,
    NewsletterSection,
    AboutSection,
    LoadingWidget,
    PodcastHero
  }
}
</script>
