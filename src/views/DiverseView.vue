<template>
  <div class="diverse">
    <RandomGallery 
      fileExtension='jpg'
      imgBaseUrl='http://thisvesseldoesnotexist.s3-website-us-west-2.amazonaws.com/public/diverse/'
      :idLength=7
      :minId=1
      :maxId=4000
      :pageSize=20
      />
  </div>
</template>

<script>
import RandomGallery from '../components/RandomGallery.vue'

export default {
  name: 'DiverseView',
  components: {
    RandomGallery
  }
}
</script>
