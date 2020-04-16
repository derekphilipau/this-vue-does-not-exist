<template>
  <div class="zoom-image" v-if="imgUrl">
    <a href="#" @click.prevent="showImageModal">
      <figure class="image">
        <img :src="imgUrl" :alt="caption ? caption : ''" />
        <figcaption v-if="caption">
          {{ caption }}
        </figcaption>
      </figure>
    </a>
    <div class="modal" v-bind:class="isModalOpen ? 'is-active' : ''">
      <div class="modal-background" @click="isModalOpen = false"></div>
      <div class="modal-content">
        <a href="#" @click.prevent="hideImageModal">
          <figure class="image">
            <img :src="largeImgUrl ? largeImgUrl : imgUrl" :alt="caption ? caption : ''" />
            <figcaption v-if="caption">
              {{ caption }}
            </figcaption>
          </figure>
        </a>
      </div>
      <button class="modal-close is-large" aria-label="close" @click="isModalOpen = false"></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalImage',
  props: {
    imgUrl: String,
    largeImgUrl: String,
    caption: String
  },
  data() {
    return {
      isModalOpen: false
    };
  },
  methods: {
    showImageModal() {
      this.isModalOpen = true;
    },
    hideImageModal() {
      this.isModalOpen = false;
    }
  },
}
</script>

<style scoped>
.modal-content {
  width: 100%;
}
.modal figcaption {
  color: #efefef;
}
</style>
