<template>
  <div class="podcast-hero-player-content">
      <div class="container">
        <audio :src="audioSrc"></audio>
      </div>
    </div>
</template>

<script>
export default {
  name: 'PodcastPlayer',
  props: {
    audioSrc: { String, required: true }
  }
}
</script>
