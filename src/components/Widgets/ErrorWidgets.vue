<template>
<section class="page-error" style="background-image: url(assets/img/error-background.jpg)">
  <div class="page-error-inner">
    <div class="container">
      <div class="page-error-content text-center">
        <h2>{{ error }}</h2>
        <p class="mb-40">{{ message }}</p>
        <router-link class="btn btn-info" :to="{name: 'home'}">Back to home</router-link>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: 'ErrorWidget',
  props: {
    error: {String, default: 'Oups Something went wrong'},
    message: {String, default: ''}
  }
}
</script>
