<template>
<div v-if="podcast" class="posdcasts-show">
  <PodcastHero :podcast="podcast" :background="podcast.thumb"></PodcastHero>
  <div class="podcast-meta-element">
    <span class="podcast-meta-item"><i class="fa fa-calendar"></i> {{ podcast.created_at }}</span>
    <span class="podcast-meta-item"><i class="fa fa-clock-o"></i> {{ podcast.duration }} minutes</span>
    <router-link class="podcast-meta-item" :to="{name: 'categories.show', params: {id: podcast.categories_id}}">
      <i class="fa fa-tag"></i> {{ podcast.category }}
    </router-link>
    <a class="podcast-meta-item" :href="podcast.audio"><i class="fa fa-download"></i> Download (MP3)</a>
  </div>

  <PodcastLinks :podcast="podcast.links"></PodcastLinks>

  <main class="main" id="main">
    <div class="section-negative">
      <div class="container">
        <div class="row mt-70 mb-50">
          <div class="col-md-8 mb-50">
            <div class="page-content">
              <figure>
                <img src="http://localhost/photofills" :alt="podcast.name" :title="podcast.name" />
              </figure>
              <div>{{ podcast.description }}</div>

              <PodcastGallery v-if="podcast.gallery"></PodcastGallery>
            </div>

            <hr/>
            <PodcastSinglePagination :prev="podcast.previous" :next="podcast.next"></PodcastSinglePagination>
            <hr/>

            <PodcastComments v-if="podcast.comments" :comments="podcasts.comment"></PodcastComments>
            <hr />

            <!-- ===== FORM COMMENTS ===== -->
            <form action="#" class="form-comment form-validate">
              <fieldset class="row">
                <legend class="col-md-12">Leave a comment</legend>
                <div class="col-md-8 mb-20">
                  <label for="name" class="label-control">Name*:</label>
                  <input type="text" id="name" name="name" class="form-control" required />
                </div>
                <div class="col-md-8 mb-20">
                  <label for="email" class="label-control">Email*:</label>
                  <input type="email" id="email" name="email" class="form-control" required />
                </div>
                <div class="col-md-8 mb-20">
                  <label for="website" class="label-control">Website:</label>
                  <input type="text" id="website" name="website" class="form-control" />
                </div>
                <div class="col-md-12 mb-20">
                  <label for="comment" class="label-control">Comment*:</label>
                  <textarea name="comment" id="comment" rows="8" class="form-control" required></textarea>
                </div>
                <div class="col-md-5">
                  <input type="submit" class="btn btn-lg btn-block btn-success" value="Send comment" />
                </div>
              </fieldset>
            </form>
          </div>

          <aside class="col-md-4">
            <div class="page-sidebar">
              <SearchWidget></SearchWidget>
              <LastPodcastWidget></LastPodcastWidget>
            </div>
          </aside>
        </div>
      </div>
    </div>
  </main>
</div>
</template>

<script>
import PodcastHero from '@/components/Podcasts/PodcastHero.vue'
import PodcastLinks from '@/components/Podcasts/PodcastLinks.vue'
import PodcastGallery from '@/components/Podcasts/PodcastGallery.vue'
import PodcastSinglePagination from '@/components/Podcasts/PodcastSinglePagination.vue'
import PodcastComments from '@/components/Podcasts/PodcastComments.vue'
import SearchWidget from '@/components/Widgets/Sidebar/SearchWidget.vue'
import LastPodcastWidget from '@/components/Widgets/Sidebar/LastPodcastWidget.vue'

export default {
  name: 'podcast-show',
  data () {
    return {
      action: '',
      podcast: null,
      error: null
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.$http.get(`podcasts/${to.params.slug}-${to.params.id}`).then(r => {
        vm.setData(r.data)
      })
    })
  },
  beforeRouteUpdate (to, from, next) {
    this.podcast = null
    this.$http.get(`podcasts/${to.params.slug}-${to.params.id}`).then(r => {
      this.action = r.data.action
      this.podcast = r.data.podcast
    })
  },
  methods: {
    setData (data) {
      this.action = data.action
      this.podcast = data.podcast
    }
  },
  components: {
    PodcastHero,
    PodcastLinks,
    PodcastGallery,
    PodcastSinglePagination,
    PodcastComments,
    SearchWidget,
    LastPodcastWidget
  }
}
</script>
