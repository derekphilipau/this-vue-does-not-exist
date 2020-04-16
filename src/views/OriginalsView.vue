<template>
  <div class="originals">
    <RandomGallery 
      fileExtension='jpg'
      imgBaseUrl='http://thisvesseldoesnotexist.s3-website-us-west-2.amazonaws.com/public/v2/originals/'
      :idLength=7
      :minId=1
      :maxId=10000
      :pageSize=20
      />
  </div>
</template>

<script>
import RandomGallery from '../components/RandomGallery.vue'

export default {
  name: 'OriginalsView',
  components: {
    RandomGallery
  }
}
</script>
