<template>
<section id="about-us" class="section-negative">
  <div class="container">
    <h2 class="title-default text-center">Behind the microphone</h2>

    <div class="row mb-30">

      <div v-for="u in users" :key='u.name' class="col-lg-4 col-lg-offset-0 col-md-8 col-md-offset-2 col-sm-12 mb-40">
        <div class="team-card">
          <figure class="team-card-image">
            <img src="http://localhost/photofills" :alt="u.name" :title="u.name" />
          </figure>

          <div class="team-card-content">
            <h2 class="team-card-title">{{ u.name }}</h2>
            <p class="team-card-job">{{ u.role }}</p>
            <p class="team-card-description">
              {{ u.description }}
            </p>
            <ul class="team-card-social">
              <li v-for="social in u.socials" :key='social.link' class="social-item">
                <a :href="social.link" target="_blank">
                  <i :class="social.icon"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

  </div>
</section>
</template>

<script>
export default {
  name: 'AboutSection',
  data () {
    return {
      users: [
        {
          name: 'bernard-ng',
          role: 'Founder / Web Developer',
          description: 'This is a boxed podcast layout. Lorem ipsum dolor sit amet, consectetur adipisicing elit..',
          socials: [
            { link: 'https://facebook.com/id1', icon: 'fa fa-facebook' },
            { link: 'https://facebook.com/id2', icon: 'fa fa-instagram' },
            { link: 'https://facebook.com/id3', icon: 'fa fa-google-plus' },
            { link: 'https://facebook.com/id4', icon: 'fa fa-soundcloud' },
            { link: 'https://facebook.com/id5', icon: 'fa fa-pinterest' },
            { link: 'https://facebook.com/id6', icon: 'fa fa-youtube' },
            { link: 'https://facebook.com/id7', icon: 'fa fa-spotify' },
            { link: 'https://facebook.com/id8', icon: 'fa fa-twitter' }
          ]
        },
        {
          name: 'Ijoboy',
          role: 'Founder / Web Developer',
          description: 'This is a boxed podcast layout. Lorem ipsum dolor sit amet, consectetur adipisicing elit..',
          socials: [
            { link: 'https://facebook.com/id8', icon: 'fa fa-facebook' },
            { link: 'https://facebook.com/id67', icon: 'fa fa-instagram' },
            { link: 'https://facebook.com/id6', icon: 'fa fa-google-plus' },
            { link: 'https://facebook.com/id5', icon: 'fa fa-soundcloud' },
            { link: 'https://facebook.com/id4', icon: 'fa fa-twitter' }
          ]
        },
        {
          name: 'Mahid_hm',
          role: 'Founder / Web Developer',
          description: 'This is a boxed podcast layout. Lorem ipsum dolor sit amet, consectetur adipisicing elit..',
          socials: [
            { link: 'https://facebook.com/id4', icon: 'fa fa-facebook' },
            { link: 'https://facebook.com/id333', icon: 'fa fa-instagram' },
            { link: 'https://facebook.com/id33', icon: 'fa fa-google-plus' },
            { link: 'https://facebook.com/id3', icon: 'fa fa-soundcloud' }
          ]
        }
      ]
    }
  }
}
</script>
