<template>
  <div v-if="podcast" class="podcast-card" :class="type">
    <figure class="podcast-image">
      <router-link :to="{name: 'podcasts.show', params:{id: p.id, slug: p.slug}}">
        <img :src="p.thumb" :alt="p.name" :title="p.name" />
      </router-link>
    </figure>
    <div class="podcast-content">
      <span class="podcast-date">{{ p.created_at }}</span>
      <h2 class="podcast-title">
        <router-link :to="{name: 'podcasts.show', params:{id: p.id, slug: p.slug}}">
          {{ p.name | truncate(40) }}
        </router-link>
      </h2>
      <p class="podcast-excerpt">
        <router-link :to="{name: 'podcasts.show', params:{id: p.id, slug: p.slug}}">
          {{ p.description | truncate(100) }}
        </router-link>
      </p>
      <ul class="podcast-meta">
        <li class="item">
          <router-link :to="{name: 'categories.show', params:{id: p.categories_id}}" class="podcast-tag" rel="tag">
            {{ p.category }}
          </router-link>
        </li>
        <li class="item"><i class="fa fa-clock-o"></i> {{ p.duration }} m</li>
        <li class="item">
          <router-link :to="{name: 'podcasts.show', params:{id: p.id, slug: p.slug}}" class="podcast-play">
            <i class="fa fa-play"></i> Play Episode
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PodcastCard',
  props: {
    podcast: { Object, required: true },
    type: { String, default: 'boxed' }
  },
  computed: {
    p () {
      return this.podcast
    }
  }
}
</script>
