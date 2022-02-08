<template>
  <aside class="menu side-menu is-hidden-mobile mt-4">
    <p class="menu-label">
      <a href="#" v-scroll-to="'#intro'">Introduction</a>
    </p>
    <ul class="menu-list">
      <li><a href="#" v-scroll-to="'#intro'">Introduction</a></li>
      <li><a href="#" v-scroll-to="'#mlgans'">Machine Learning & GANs</a></li>
    </ul>
    <p class="menu-label">
      <a href="#" v-scroll-to="'#stylegan2019'">StyleGAN 1</a>
    </p>
    <ul class="menu-list">
      <li><a href="#" v-scroll-to="'#stylegan2019'">StyleGAN 1</a></li>
      <li><a href="#" v-scroll-to="'#runningsg'">Running StyleGAN</a></li>
      <li><a href="#" v-scroll-to="'#gensamplessg1'">Generated Samples</a></li>
      <li><a href="#" v-scroll-to="'#sg1qh'"><em>Qinghua</em></a></li>
      <li><a href="#" v-scroll-to="'#sg1diverse'">Diverse</a></li>
    </ul>
    <p class="menu-label">
      <a href="#" v-scroll-to="'#sg2april'">StyleGAN 2</a>
    </p>
    <ul class="menu-list">
      <li><a href="#" v-scroll-to="'#sg2april'">StyleGAN 2</a></li>
      <li><a href="#" v-scroll-to="'#sg2glaze'">This Glaze Does Not Exist.</a></li>
      <li><a href="#" v-scroll-to="'#tvdnev2'">"This Vessel Does Not Exist" v2</a></li>
      <li><a href="#" v-scroll-to="'#translern2'">Transfer Learning</a></li>
      <li><a href="#" v-scroll-to="'#beetlevas2'">Beetlevase</a></li>
    </ul>
    <p class="menu-label">
      <a href="#" v-scroll-to="'#gpt3july'">GPT-3, July 2020</a>
    </p>
    <ul class="menu-list">
      <li><a href="#" v-scroll-to="'#gpt3july'">GPT-3</a></li>
      <li><a href="#" v-scroll-to="'#tiaqdne'">This inspirational art quote does not exist.</a></li>
      <li><a href="#" v-scroll-to="'#artquotes2'">Art Quotes 2</a></li>
      <li><a href="#" v-scroll-to="'#potteryhaikus'">Pottery Haikus</a></li>
      <li><a href="#" v-scroll-to="'#artstatements'">Artist Statements</a></li>
    </ul>
    <p class="menu-label">
      <a href="#" v-scroll-to="'#genrecipedec'">Generated Recipes</a>
    </p>
    <ul class="menu-list">
      <li><a href="#" v-scroll-to="'#genrecipedec'">GPT-2 Generated Recipes</a></li>
      <li><a href="#" v-scroll-to="'#genrecipemar'">In the Real World!</a></li>
    </ul>
    <p class="menu-label">
      <a href="#" v-scroll-to="'#quickdraw'">Google Quick, Draw!</a>
    </p>
    <ul class="menu-list">
      <li><a href="#" v-scroll-to="'#quickdraw'">What is a vase?</a></li>
    </ul>
    <p class="menu-label">
      <a href="#" v-scroll-to="'#sg3intro'">StyleGAN 3</a>
    </p>
    <ul class="menu-list">
      <li><a href="#" v-scroll-to="'#sg3intro'">Embryonic vessels</a></li>
    </ul>

  </aside>

</template>

<script>
export default {
  name: 'Sidebar',
}
</script>

<style>
.side-menu {
    position: sticky;
    display: inline-block;
    vertical-align: top;
    max-height: 100vh;
    overflow-y: auto;
    width: 240px;
    top: 0;
    bottom: 0;
    padding: 30px;
}
</style>