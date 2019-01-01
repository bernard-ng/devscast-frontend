<template>
  <div class="posdcasts-show">

    <PodcastHero :podcast="podcast"></PodcastHero>

    <main class="main" id="main">
      <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi dolore ipsa consectetur tenetur fuga. Beatae accusantium laboriosam inventore mollitia quis fuga sapiente quia, perferendis corporis exercitationem, natus minima itaque ea?</div>
      <div>Voluptate, harum quod consequatur vitae iste et assumenda asperiores inventore recusandae ad laboriosam sint cumque temporibus ducimus quas labore similique nemo. Culpa nobis, temporibus minima aperiam eos tempora obcaecati. Culpa.</div>
      <div>Molestiae ad eum nemo enim cum eos aut fugit eveniet laborum ullam? Adipisci, veritatis modi maxime harum iure quisquam quas illum porro necessitatibus excepturi sunt consequatur eum fugit aliquam. Id.</div>
      <div>Id ipsa quidem numquam delectus illum iure aut rem repellat dolorem quod, consequatur unde suscipit nesciunt, eius doloremque nihil voluptatem? Aperiam aut molestiae commodi, qui optio quae quas nemo fugiat.</div>
      <div>Aliquam aperiam iusto reiciendis, autem perspiciatis ab nam id similique fugiat beatae nihil hic natus suscipit? Neque consequatur, veniam facilis, commodi autem sed illo officia eaque corrupti porro, expedita et!</div>
      <div>Perspiciatis eius reiciendis, itaque laboriosam facilis voluptatem, at magnam accusamus unde facere beatae inventore nostrum minima, ducimus alias veniam quidem? A numquam, aliquam beatae officiis obcaecati quo reiciendis dolores quisquam.</div>
      <div>Pariatur culpa impedit asperiores odio voluptatem repellendus, distinctio debitis non veritatis enim voluptas eveniet possimus, labore modi tempore assumenda, deserunt at cumque aliquam quisquam minus quod! Tenetur reiciendis deserunt corrupti?</div>
      <div>Rerum et est pariatur temporibus perferendis aperiam, eveniet quos soluta! Velit ex error molestias, amet voluptatibus aspernatur autem incidunt provident, commodi aliquam minima nam tempore ipsa at hic maxime quaerat!</div>
    </main>
  </div>
</template>

<script>
import PodcastHero from '@/components/Podcasts/PodcastHero.vue'

export default {
  name: 'podcast-show',
  data () {
    return  {
      action: '',
      podcast: null,
      error: null,
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
    PodcastHero
  },
}
</script>
