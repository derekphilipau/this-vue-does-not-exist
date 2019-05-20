<template>
  <div class="container">
    <div class="grid">

      <div class="grid-item" v-for="(id, $index) in list" :key="$index">
        <div class="grid-item-wrapper">
          <div class="grid-item-container">
            <img class="grid-img" :src="getImageUrl(id)" />
          </div>
        </div>
      </div>
    </div>
    <infinite-loading @infinite="infiniteHandler">
      <div slot="spinner">Loading...</div>
      <div slot="no-more">No more images</div>
      <div slot="no-results">No more results</div>
    </infinite-loading>
  </div>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading';

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
  data() {
    return {
      page: 1,
      list: [],
      randomIds: [],
      pad: ''
    };
  },
  components: {
    InfiniteLoading
  },
  mounted() {
    this.randomIds = this.getRandomizedIdArray(this.minId, this.maxId);
    this.pad = this.pad.padStart(this.idLength, '0');
  },
  // /getRandomizedIdArray(min, max)
  methods: {
    infiniteHandler($state) {
      console.log('Loading...');
      let data = this.randomIds.splice(0, this.pageSize);
      if (data.length) {
        this.page += 1;
        this.list.push(...data);
        $state.loaded();
      } else {
        $state.complete();
      }
    },
    getRandomizedIdArray(min, max) {
      let a = [];
      let len = max - min + 1;
      for (var i = 0; i < len; ++i) {
        a[i] = this.getId(min + i);
      }
      a = this.shuffle(a);
      return a;
    },
    getId(i) {
      return (i+'').padStart(this.idLength, '0');
    },
    getImageUrl(id) {
      return this.imgBaseUrl + id + '.' + this.fileExtension;
    },
    /**
     * https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
     * Shuffles array in place. ES6 version
     * @param {Array} a items An array containing the items.
     */
    shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.container {
  margin: 0 auto;
}

.grid {
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  min-height: 100%;
}

.grid-item {
  flex-basis: 10%;
  -ms-flex: auto;
  position: relative;
  box-sizing: border-box;
}

.grid-row a {
  text-decoration: none;
}

.grid-item-wrapper {
  -webkit-box-sizing: initial;
  -moz-box-sizing: initial;
  box-sizing: initial;
  background: #aaa;
  margin: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
  -webkit-transition: padding 0.15s cubic-bezier(0.4,0,0.2,1), margin 0.15s cubic-bezier(0.4,0,0.2,1), box-shadow 0.15s cubic-bezier(0.4,0,0.2,1);
  transition: padding 0.15s cubic-bezier(0.4,0,0.2,1), margin 0.15s cubic-bezier(0.4,0,0.2,1), box-shadow 0.15s cubic-bezier(0.4,0,0.2,1);
  position: relative;
}

.grid-item-container {
  height: 100%;
  width: 100%;
  position: relative;
}

.grid-img {
    object-fit: cover;
    width: 100%;
    height: 100%;
}

.grid-item:hover .grid-item-wrapper {
  filter: brightness(50%);
}

@media(max-width: 1333px) {
  .grid-item {
    flex-basis: 20%;
  }
}

@media(max-width: 1073px) {
   .grid-item {
    flex-basis: 25%;
  }
}

@media(max-width: 815px) {
  .grid-item {
    flex-basis: 33.33%;
  }
}

</style>
