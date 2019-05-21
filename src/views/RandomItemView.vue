<template>
  <div class="random-image">
    <img class="grid-img" :src="getRandomImage()" />
  </div>
</template>

<script>
import galleryMixin from '../galleryMixin';

export default {
  name: 'RandomItemView',
  props: {
  },
  mixins: [galleryMixin],
  data() {
    return {
      currentId: null,
      pad: '',
      fileExtension: 'jpg',
      imgBaseUrl: 'http://thisvesseldoesnotexist.s3-website-us-west-2.amazonaws.com/public/originals/',
      idLength: 7,
      minId: 1,
      maxId: 100000,
      pageSize: 20
    };
  },
  components: {
  },
  mounted() {
    this.pad = this.pad.padStart(this.idLength, '0');
  },
  methods: {
    getRandomImage() {
      return this.getImageUrl(this.getId(this.getRandom(this.minId, this.maxId), this.idLength), this.imgBaseUrl, this.fileExtension);
    }
  }
}
</script>