<template>
<footer class="footer">
  <section class="section-positive">
    <div class="container">
      <div class="row mt-70 mb-30">
        <div class="col-sm-3 mb-40">
          <h2 class="title-separator white">Sitemap</h2>
          <ul class="footer-list">
            <li><router-link :to="{name: 'home'}">Home</router-link></li>
            <li><router-link :to="{name: 'podcasts.index'}">Podcasts</router-link></li>
            <li><router-link :to="{name: 'about'}">About</router-link></li>
            <li><router-link :to="{name: 'contact'}">contact</router-link></li>
          </ul>
        </div>

        <div class="col-sm-3 mb-40">
          <h2 class="title-separator white">Lastest Episodes</h2>
          <ul class="footer-complement">
            <li v-for="p in latestPodcasts" :key="p.id">
              <router-link :to="{name: 'podcasts.show', params:{id: p.id, slug: p.slug }}">
                  {{ podcast.name }}
              </router-link>
              <span>{{ p.created_at }}</span>
            </li>
          </ul>
        </div>

        <div class="col-sm-3 mb-40">
          <h2 class="title-separator white">Who is helping?</h2>
          <ul class="footer-complement">
            <li v-for="d in donates" :key="d.name">
              <a :href="d.link">{{ d.name }}</a>
              <span>Donation - U$ {{ d.amout }}</span>
            </li>
          </ul>
        </div>

        <div class="col-sm-3 mb-40">
          <h2 class="title-separator white">We are social</h2>
          <ul class="social-list">
            <li v-for="social in socials" class="social-item" :key="social.link">
              <a :href="social.link" target="_blank">
                <i :class="social.icon"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section class="footer-credits">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 text-right">
          <a href="https://github.com/bernard-ng">bernard-ng</a> - 2018. All rights reserved.
        </div>
      </div>
    </div>
  </section>
</footer>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      latestPodcasts: [],
      donates: [
        { name: '@bernard-ng', link: 'https://git.com', amout: '10' },
        { name: '@ijoboy', link: 'https://git.com', amout: '20' },
        { name: '@mahid_hm', link: 'https://git.com', amout: '50' }
      ],
      socials: [
        { link: 'https://facebook.com/idd', icon: 'fa fa-facebook' },
        { link: 'https://facebook.com/iddd', icon: 'fa fa-instagram' },
        { link: 'https://facebook.com/ide', icon: 'fa fa-google-plus' },
        { link: 'https://facebook.com/id4', icon: 'fa fa-soundcloud' },
        { link: 'https://facebook.com/id44', icon: 'fa fa-pinterest' },
        { link: 'https://facebook.com/idsdf', icon: 'fa fa-youtube' },
        { link: 'https://facebook.com/idfd', icon: 'fa fa-spotify' },
        { link: 'https://facebook.com/iddf', icon: 'fa fa-twitter' }
      ]
    }
  }
}
</script>
