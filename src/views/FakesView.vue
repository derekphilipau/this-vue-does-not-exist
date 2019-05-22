<template>
  <div class="fakes">
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
  name: 'FakesView',
  components: {
    RandomGallery
  },
  data() {
    return {
      fileExtension: process.env.VUE_APP_FAKES_EXTENSION,
      imgBaseUrl: process.env.VUE_APP_FAKES_BASE_URL,
      idLength: process.env.VUE_APP_FAKES_ID_LENGTH,
      minId: process.env.VUE_APP_FAKES_MIN_ID,
      maxId: process.env.VUE_APP_FAKES_MAX_ID,
      pageSize: process.env.VUE_APP_FAKES_PAGE_SIZE
    };
  }
}
</script>
