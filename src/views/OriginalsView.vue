<template>
  <div class="originals">
    <RandomGallery 
      :fileExtension=fileExtension
      :imgBaseUrl=imgBaseUrl
      :idLength=idLength
      :minId=minId
      :maxId=maxId
      :pageSize=pageSize       
      />
  </div>
</template>

<script>
import RandomGallery from '../components/RandomGallery.vue'

export default {
  name: 'OriginalsView',
  components: {
    RandomGallery
  },
  data() {
    return {
      fileExtension: process.env.VUE_APP_ORIGINALS_EXTENSION,
      imgBaseUrl: process.env.VUE_APP_ORIGINALS_BASE_URL,
      idLength: process.env.VUE_APP_ORIGINALS_ID_LENGTH,
      minId: process.env.VUE_APP_ORIGINALS_MIN_ID,
      maxId: process.env.VUE_APP_ORIGINALS_MAX_ID,
      pageSize: process.env.VUE_APP_ORIGINALS_PAGE_SIZE
    };
  }
}
</script>
