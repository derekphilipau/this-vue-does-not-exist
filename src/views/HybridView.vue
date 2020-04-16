<template>
  <div class="hybrid">
    <RandomGallery 
      fileExtension='jpg'
      imgBaseUrl='http://thisvesseldoesnotexist.s3-website-us-west-2.amazonaws.com/public/v2/beetlevase/gallery/'
      :idLength=7
      :minId=1
      :maxId=293
      :pageSize=20
      />
  </div>
</template>

<script>
import RandomGallery from '../components/RandomGallery.vue'

export default {
  name: 'HybridView',
  components: {
    RandomGallery
  }
}
</script>
