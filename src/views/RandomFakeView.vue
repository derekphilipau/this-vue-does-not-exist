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
      fileExtension: 'jpg',
      imgBaseUrl: 'http://thisvesseldoesnotexist.s3-website-us-west-2.amazonaws.com/public/fakes/',
      idLength: 7,
      minId: 1,
      maxId: 100
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
