<template>
  <div class="random-image" v-if="randomId">
    <div class="columns gallery-columns is-vcentered is-multiline">
      <div class="column gallery-column is-one-third-widescreen is-half-desktop is-half-tablet">
        <video autoplay loop muted playsinline>
          <source src="https://thisvesseldoesnotexist.s3-us-west-2.amazonaws.com/public/videos/1024_random_204.mp4" type="video/mp4">
        </video>
      </div>
      <div class="column gallery-column is-one-third-widescreen is-half-desktop is-half-tablet">
        <video autoplay loop muted playsinline>
          <source src="https://thisvesseldoesnotexist.s3-us-west-2.amazonaws.com/public/videos/1024_random_291.mp4" type="video/mp4">
        </video>
      </div>
      <div class="column gallery-column is-one-third-widescreen is-half-desktop is-half-tablet">
        <video autoplay loop muted playsinline>
          <source src="https://thisvesseldoesnotexist.s3-us-west-2.amazonaws.com/public/videos/1024_random_293.mp4" type="video/mp4">
        </video>
      </div>
      <div class="column gallery-column is-one-third-widescreen is-half-desktop is-half-tablet">
        <video autoplay loop muted playsinline>
          <source src="https://thisvesseldoesnotexist.s3-us-west-2.amazonaws.com/public/videos/1024_random_370.mp4" type="video/mp4">
        </video>
      </div>
      <div class="column gallery-column is-one-third-widescreen is-half-desktop is-half-tablet">
        <video autoplay loop muted playsinline>
          <source src="https://thisvesseldoesnotexist.s3-us-west-2.amazonaws.com/public/videos/1024_random_466.mp4" type="video/mp4">
        </video>
      </div>
      <div class="column gallery-column is-one-third-widescreen is-half-desktop is-half-tablet">
        <video autoplay loop muted playsinline>
          <source src="https://thisvesseldoesnotexist.s3-us-west-2.amazonaws.com/public/videos/1024_random_508.mp4" type="video/mp4">
        </video>
      </div>
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
  .gallery-columns {
    margin: 0;
    padding: 0;
  }
  .gallery-column {
    margin: 0;
    padding: 0;
    line-height: 0;
  }
</style>
