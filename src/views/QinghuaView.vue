<template>
  <div class="qinghua">
    <RandomGallery 
      fileExtension='jpg'
      imgBaseUrl='https://thisvesseldoesnotexist.s3-us-west-2.amazonaws.com/public/qinghua/'
      :idLength=7
      :minId=1
      :maxId=1000
      :pageSize=20
      />
  </div>
</template>

<script>
import RandomGallery from '../components/RandomGallery.vue'

export default {
  name: 'QinghuaView',
  components: {
    RandomGallery
  }
}
</script>
