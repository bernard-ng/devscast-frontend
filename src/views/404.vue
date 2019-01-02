<template>
<div class="404">
  <main class="main" id="main">
    <section class="page-error" style="background-image: url('http://localhost/photofills')">
      <div class="page-error-inner">
        <div class="container">
          <div class="page-error-content text-center">
            <h2>Page not Found</h2>
            <p class="mb-40">The page you are looking for doesn't exist. <br /> Don't worry... It happens to the best of us.</p>
            <router-link class="btn btn-info" to="/">Back to home</router-link>
          </div>
        </div>
      </div>
    </section>
  </main>
</div>
</template>

<script>
export default {
  name: '404'
}
</script>
