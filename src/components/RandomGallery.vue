<template>
  <div class="grid-container">
    <div class="columns gallery-columns is-multiline is-mobile" v-if="this.list">
      <div class="column gallery-column is-one-fifth-desktop is-one-quarter-tablet is-one-third-mobile" 
          v-for="(id, $index) in list" :key="$index">
        <figure @click="showImageModal(id)" class="image is-square">
          <img class="grid-img" :src="getImageUrl(id, imgBaseUrl, fileExtension)" />
        </figure>
      </div>
    </div>
    <div class="randomloader">
      <infinite-loading spinner="circles" @infinite="infiniteHandler">
        <div slot="spinner">Loading...</div>
        <div slot="no-more">No more images.</div>
        <div slot="no-results">No more images.</div>
      </infinite-loading>
    </div>
    <div class="refresh-me">
      <a @click="reload()">
        <img src="/img/icon/refresh.svg" width="32" height="32" />
      </a>
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
import { clearInterval } from 'timers';

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
      canInfiniteScroll: false,
      scrollIntervalId: null
    };
  },
  components: {
    InfiniteLoading
  },
  mounted() {
    this.pad = this.pad.padStart(this.idLength, '0');
    this.init();
    setTimeout(() => this.canInfiniteScroll = true, 2000);
    // Page Scroll not working very well...
    //setTimeout(this.startPageScroll, 2000);
  },
  destroyed() {
      if (this.scrollIntervalId) {
        clearInterval(this.scrollIntervalId);
        this.scrollIntervalId = null;
      }
  },
  methods: {
    init() {
      if (this.scrollIntervalId) {
        clearInterval(this.scrollIntervalId);
        this.scrollIntervalId = null;
      }
      this.randomIds = this.getRandomizedIdArray(this.minId, this.maxId, this.idLength);
      let ids = this.randomIds.splice(0, this.initialPageSize);
      if (ids.length) {
        this.list.push(...ids);
      }
      window.scrollTo(0,0);
    },
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
    reload() {
      this.canInfiniteScroll = false;
      this.list = [];
      this.init();
      setTimeout(() => this.canInfiniteScroll = true, 2000);
    },
    startPageScroll() {
      this.scrollIntervalId = setInterval(function() { window.scrollBy(0,1); }, 50);
    }
  },
}
</script>

<style >
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
  .infinite-loading-container .infinite-status-prompt {
    margin: 40px 0;
    font-size: 20px;
  }
</style>
