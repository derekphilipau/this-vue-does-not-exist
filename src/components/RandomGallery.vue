<template>
  <div class="grid-container">
    <div class="columns gallery-columns is-multiline is-mobile" v-if="this.list">
      <div class="column gallery-column is-one-fifth-desktop is-one-quarter-tablet is-one-third-mobile" v-for="(id, $index) in list" :key="$index">
        <a href="#" @click="showImageModal(id)">
          <img class="grid-img" :src="getImageUrl(id, imgBaseUrl, fileExtension)" />
        </a>
      </div>
    </div>
    <div class="loader">
      <infinite-loading @infinite="infiniteHandler">
        <div slot="spinner">Loading...</div>
        <div slot="no-more">No more images</div>
        <div slot="no-results">No more results</div>
      </infinite-loading>
    </div>
    <div class="modal" v-bind:class="modalImageUrl ? 'is-active' : ''">
      <div class="modal-background" @click="modalImageUrl = ''"></div>
      <div class="modal-content">
        <p class="image">
          <img :src="modalImageUrl" alt="">
        </p>
      </div>
      <button class="modal-close is-large" aria-label="close" @click="modalImageUrl = ''"></button>
    </div>
  </div>
</template>

<script>
//import Vue from 'vue'
import InfiniteLoading from 'vue-infinite-loading';
import galleryMixin from '../galleryMixin';

export default {
  name: 'RandomGallery',
  props: {
    imgBaseUrl: String,
    maxId: Number,
    minId: Number,
    idLength: Number,
    pageSize: Number,
    fileExtension: String
  },
  mixins: [galleryMixin],
  data() {
    return {
      page: 1,
      list: [],
      randomIds: [],
      pad: '',
      modalImageUrl: '',
      initialPageSize: 100,
      canInfiniteScroll: false
    };
  },
  components: {
    InfiniteLoading
  },
  mounted() {
    this.pad = this.pad.padStart(this.idLength, '0');
    this.randomIds = this.getRandomizedIdArray(this.minId, this.maxId, this.idLength);
    let ids = this.randomIds.splice(0, this.initialPageSize);
    if (ids.length) {
      this.list.push(...ids);
    }
    this.setCanInfiniteScroll();
  },
  methods: {
    infiniteHandler($state) {
      if (this.canInfiniteScroll) {
        let ids = this.randomIds.splice(0, this.pageSize);
        if (ids.length) {
          this.page += 1;
          this.list.push(...ids);
          $state.loaded();
        } else {
          $state.complete();
        }
      }
    },
    showImageModal(id) {
      this.modalImageUrl = this.getImageUrl(id, this.imgBaseUrl, this.fileExtension);
    },
    setCanInfiniteScroll() {
      // https://stackoverflow.com/questions/40251873/wait-at-least-2-seconds-if-ajax-completed-before-transition-next-with-vue-js
      // Create a new Promise and resolve after 2 seconds
      new Promise((resolve) => {
          setTimeout(resolve, 2000);  // "resolve" is already a function, no need for another anonymous function here
      });
      // and do the other stuff here...
      this.canInfiniteScroll = true;
    }
  },
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
  .gallery-column:hover  {
    filter: brightness(75%);
  }
</style>
