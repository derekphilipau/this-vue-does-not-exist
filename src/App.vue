<template>
  <div id="app">
    <Navbar/>
    <transition name="fade">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'app',
  components: {
    Navbar
  }
}
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css?family=Lora');

// Set your brand colors
$purple: #8A4D76;
$pink: #FA7C91;
$brown: #757763;
$beige-light: #D0D1CD;
$beige-lighter: #EFF0EB;

// Update Bulma's global variables
$family-sans-serif: "Lora", sans-serif;
$grey-dark: $brown;
$grey-light: $beige-light;
$primary: $purple;
$link: $pink;

// Update some of Bulma's component variables
$control-border-width: 2px;
$input-background-color: $beige-lighter;
$input-border-color: transparent;
$input-shadow: none;

// Import the rest of Bulma
@import "../node_modules/bulma";

body {
  margin: 0;
  margin-top: 52px;
  padding: 0;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>