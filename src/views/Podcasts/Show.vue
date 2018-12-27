<template>
  <div class="posdcasts-index">
     <kbd>{{ podcast }}</kbd>
  </div>
</template>

<script>
export default {
  name: 'podcast-show',
  data () {
    return  {
      action: '',
      loading: false,
      error: null,
      podcast: null
    }
  },
  created () {
    let id = this.$route.params.id
    let slug = this.$route.params.slug
    this.loading = true

    this.$http.get(`http://localhost:8081/podcasts/${slug}-${id}`).then(r => {
      this.podcast = r.data.podcast
      this.action = r.data['api.action']
      this.loading = false
    })
  }
}
</script>
