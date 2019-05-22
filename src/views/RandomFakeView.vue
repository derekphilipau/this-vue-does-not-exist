<template>
  <div class="random-image" v-if="randomId">
    <div class="columns random-image-columns is-vcentered">
      <div class="column is-half is-offset-one-quarter">
        <img class="grid-img" :src="getRandomImage()" />
      </div>
    </div>
    <div class="refresh-me">
      <a @click="reload()">
        <img src="/img/icon/refresh.svg" width="32" height="32" />
      </a>
    </div>
  </div>
</template>

<script>
import galleryMixin from '../galleryMixin';

export default {
  name: 'RandomFakeView',
  props: {
  },
  mixins: [galleryMixin],
  data() {
    return {
      currentId: null,
      pad: '',
      randomId: null,
      fileExtension: process.env.VUE_APP_FAKES_EXTENSION,
      imgBaseUrl: process.env.VUE_APP_FAKES_BASE_URL,
      idLength: process.env.VUE_APP_FAKES_ID_LENGTH,
      minId: process.env.VUE_APP_FAKES_MIN_ID,
      maxId: process.env.VUE_APP_FAKES_MAX_ID,
      pageSize: process.env.VUE_APP_FAKES_PAGE_SIZE
    };
  },
  components: {
  },
  mounted() {
    this.pad = this.pad.padStart(this.idLength, '0');
    this.randomId = this.getId(this.getRandom(this.minId, this.maxId), this.idLength);
  },
  methods: {
    getRandomImage() {
      return this.getImageUrl(this.randomId, this.imgBaseUrl, this.fileExtension);
    },
    reload() {
      this.randomId = this.getId(this.getRandom(this.minId, this.maxId), this.idLength);
    }
  }
}
</script>

<style scoped>
  .random-image-columns {
    min-height: 80vh;
  }
</style>
