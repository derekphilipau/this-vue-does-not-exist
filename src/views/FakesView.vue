<template>
  <div class="fakes">
    <RandomGallery 
      fileExtension='jpg'
      imgBaseUrl='http://thisvesseldoesnotexist.s3-website-us-west-2.amazonaws.com/public/v2/fakes/'
      :idLength=7
      :minId=1
      :maxId=20000
      :pageSize=20
      />
  </div>
</template>

<script>
import RandomGallery from '../components/RandomGallery.vue'

export default {
  name: 'FakesView',
  components: {
    RandomGallery
  }
}
</script>
