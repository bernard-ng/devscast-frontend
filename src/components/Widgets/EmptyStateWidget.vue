<template>
<section class="page-error" style="background-image: url(assets/img/error-background.jpg)">
  <div class="page-error-inner">
    <div class="container">
      <div class="page-error-content text-center">
        <h2>Nothing to show</h2>
        <p class="mb-40">The page you are looking for doesn't have data to show. <br /> Don't worry... It happens to the best of us.</p>
        <router-link class="btn btn-info" :to="{name: 'home'}">Back to home</router-link>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: 'EmptyStateWidget'
}
</script>
