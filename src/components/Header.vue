<template>
<header class="header scrolling sticky" itemscope itemtype="http://schema.org/Organization">
  <div class="container">
    <h1 class="logo">
      <router-link :to="{name: 'home'}">
        <span itemprop="logo"><strong>Dev</strong>cast</span>
      </router-link>
    </h1>

    <nav class="navigation">
      <ul class="menu">
        <router-link :to="{name: 'home'}" tag="li" class="menuitem">
          <a>Home</a>
        </router-link>

        <router-link :to="{name: 'podcasts.index'}" tag="li" class="menuitem">
          <a>Podcasts</a>
        </router-link>

        <router-link :to="{name: 'about'}" tag="li" class="menuitem">
          <a>About</a>
        </router-link>

        <router-link :to="{name: 'contact'}" tag="li" class="menuitem">
          <a>Contact</a>
        </router-link>
      </ul>

      <a href="#" class="btn-hamburguer-menu"><i class="fa fa-bars"></i></a>
    </nav>
  </div>
</header>
</template>

<script>
export default {
  name: 'Header'
}
</script>
