<template>
  <div class="dress">
    <RandomGallery 
      fileExtension='jpg'
      imgBaseUrl='http://thisvesseldoesnotexist.s3-website-us-west-2.amazonaws.com/public/v2/dresses/'
      :idLength=7
      :minId=1
      :maxId=506
      :pageSize=20
      />
  </div>
</template>

<script>
import RandomGallery from '../components/RandomGallery.vue'

export default {
  name: 'DressView',
  components: {
    RandomGallery
  }
}
</script>
