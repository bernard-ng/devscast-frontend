<template>
<section class="podcast-hero" style="height: 80vh">
  <div class="podcast-hero-inner">
    <div class="container">
      <div class="podcast-hero-content">
      <span class="podcast-hero-date">{{ podcast.created_at }}</span>
      <h2 class="podcast-hero-title">
        <router-link :to="{name: 'podcasts.show', params:{id: podcast.id, slug: podcast.slug}}">
          {{ podcast.name | truncate(30) }}
        </router-link>
      </h2>
      <p>{{ podcast.description | truncate(150) }}</p>
      <ul class="podcast-hero-meta">
        <li class="item">
          <router-link :to="{name: 'categories.show', params:{name: podcast.category}}" class="podcast-hero-tag" rel="tag">
            {{ podcast.category }}
          </router-link>
        </li>
        <li class="item"><i class="fa fa-clock-o"></i> {{ podcast.duration }}</li>
        <li class="item">
          <a :href="podcast.audio" class="podcast-hero-download">
            <i class="fa fa-download"></i> Download
          </a>
        </li>
      </ul>
      </div>
    </div>

    <PodcastPlayer :audioSrc="podcast.audio"></PodcastPlayer>
  </div>
</section>
</template>

<script>
import PodcastPlayer from '@/components/Podcasts/PodcastPlayer.vue'

export default {
  name: 'PodcastHero',
  props: {
    podcast: { Object, required: true }
  },
  components: {
    PodcastPlayer
  }
}
</script>
