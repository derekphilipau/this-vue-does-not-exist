<template>
  <div id="app">
    <RandomGallery 
      imgBaseUrl="/img/sample/"
      fileExtension="jpg"
      :idLength=7
      :minId=1
      :maxId=500
      :pageSize=20 
      />
  </div>
</template>

<script>
import RandomGallery from './components/RandomGallery.vue'

export default {
  name: 'app',
  components: {
    RandomGallery
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  margin: 0;
  padding: 0;
}
</style>
