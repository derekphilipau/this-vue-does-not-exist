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
      <infinite-loading 
        v-if="isInfinite"
        spinner="circles" @infinite="infiniteHandler">
        <div slot="spinner">Loading...</div>
        <div slot="no-more">No more images.</div>
        <div slot="no-results">No more images.</div>
      </infinite-loading>
      <div :class="isEmbedded ? 'refresh-me-rel' : 'refresh-me'">
        <a @click="reload()">
          <img src="/img/icon/refresh.svg" width="32" height="32" />
          <span class="ml-2">Click to reload</span>
        </a>
      </div>
    </div>
    <div class="modal" v-bind:class="modalImageUrl ? 'is-active' : ''">
      <div class="modal-background" @click="modalImageUrl = ''"></div>
      <div class="modal-content">
        <figure class="image">
          <img :src="modalImageUrl" ref="modalImageRef" v-on:load="modalImageLoaded" alt="" />
          <figcaption v-if="modalImageExternalUrl">
            <a :href="modalImageExternalUrl">{{ modalImageExternalUrl }}</a>
          </figcaption>
        </figure>
      </div>
      <button class="modal-close is-large" aria-label="close" @click="modalImageUrl = ''"></button>
    </div>
  </div>
</template>

<script>
//import Vue from 'vue'
import EXIF from 'exif-js'
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
    initialPageSize: {
      type: Number,
      default: 100
    },
    isInfinite: {
      type: Boolean,
      default: true
    },
    isEmbedded: {
      type: Boolean,
      default: false
    },
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
      modalImageExternalUrl: '',
      image: null,
      imageSourceUrl: null,
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
    if (this.isInfinite) {
      setTimeout(() => this.canInfiniteScroll = true, 2000);
      // Page Scroll not working very well...
      //setTimeout(this.startPageScroll, 2000);
    }
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
      if (!this.isEmbedded) {
        window.scrollTo(0,0);
      }
    },
    infiniteHandler($state) {
      if (this.canInfiniteScroll && this.isInfinite) {
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
    modalImageLoaded() {
      const myThis = this;
      EXIF.getData(this.$refs.modalImageRef, function() {
          if (this.iptcdata && 'headline' in this.iptcdata) {
            myThis.modalImageExternalUrl = this.iptcdata.headline;
          }
      });
    },
    reload() {
      this.canInfiniteScroll = false;
      this.list = [];
      this.init();
      if (this.isInfinite) {
        setTimeout(() => this.canInfiniteScroll = true, 2000);
      }
    },
    startPageScroll() {
      this.scrollIntervalId = setInterval(function() { window.scrollBy(0,1); }, 50);
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
    filter: brightness(90%);
  }
  .infinite-loading-container .infinite-status-prompt {
    margin: 40px 0;
    font-size: 20px;
  }

  /* Refresh button used in multiple views. */
  .refresh-me a
  {
    opacity: 0.5;
    color: black;
    background-color: transparent;
    position: fixed;
    bottom: 15px;
    right: 15px;
  }
  .refresh-me:hover
  {
    opacity: 1;
    background-color: transparent;
  }

  .refresh-me-rel
  {
    position: relative;
    margin-top: 10px;
  }
  .refresh-me-rel a
  {
    opacity: 0.5;
    color: black;
    background-color: transparent;
  }
  .refresh-me-rel:hover
  {
    opacity: 1;
    background-color: transparent;
  }
</style>
