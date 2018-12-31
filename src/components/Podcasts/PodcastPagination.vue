<template>
  <ol class="pagination">
    <li><router-link to="#">1</router-link></li>
    <li><router-link to="#">2</router-link></li>
    <li><router-link to="#">3</router-link></li>
    <li><router-link to="#"><i class="fa fa-angle-right"></i></router-link></li>
  </ol>
</template>

<script>
export default {
  name: 'PodcastPagination',
  props: {
    lastId: { Number, required: true }
  }
}
</script>
