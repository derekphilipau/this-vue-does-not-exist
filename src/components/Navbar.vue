<template>
  <nav class="navbar is-transparent is-fixed-top has-shadow">
    <div class="navbar-brand">
        <a class="navbar-item" href="/">
        This vessel does not exist.
        </a>
        <span
            class="navbar-burger burger"
            :class="{ 'is-active': isMenuActive }"
            @click="isMenuActive = !isMenuActive">
            <span/>
            <span/>
            <span/>
        </span>
    </div>

    <div class="navbar-menu" :class="{ 'is-active': isMenuActive }" id="navbarExampleTransparentExample">
        <div class="navbar-start">
          <router-link class="navbar-item" :to="{ name: 'originals' }">Originals</router-link>
          <router-link class="navbar-item" :to="{ name: 'fakes' }">Fakes</router-link>
          <router-link class="navbar-item" :to="{ name: 'qinghua' }">Qinghua</router-link>
          <router-link class="navbar-item" :to="{ name: 'diverse' }">Diverse</router-link>
          <router-link class="navbar-item" :to="{ name: 'hybrids' }">Hybrids</router-link>
          <router-link class="navbar-item" :to="{ name: 'about' }">About</router-link>
            <!--
            <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link" href="https://bulma.io/documentation/overview/start/">
                Docs
                </a>
                <div class="navbar-dropdown is-boxed">
                <a class="navbar-item" href="https://bulma.io/documentation/overview/start/">
                    Overview
                </a>
                </div>
            </div>
            -->
        </div>

        <div class="navbar-end">
            <div class="navbar-item">
                <div class="field is-grouped">
                    <a class="navbar-item paypal-item" href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=VN8HBLPQG6N3E&currency_code=USD&source=url">
                        Donate: &nbsp;<img src="/img/icon/Paypal.png" width="79" height="24" />
                    </a>
                    <a class="navbar-item patreon-item" href="https://www.patreon.com/bePatron?u=5941215">
                         <img src="/img/icon/Patreon.png" width="25" height="24" />
                    </a>
                </div>
            </div>
        </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'RandomGallery',
  data() {
    return {
      isMenuActive: false
    };
  },
  watch: {
    '$route' () {
      this.closeMenu();
    }
  },
  methods: {
    closeMenu() {
      this.isMenuActive = false
    }
  }
}
</script>

<style lang="scss">
.navbar-brand {
    font-size: 20px;
}
.paypal-item {
  padding-right: 4px !important;
}
</style>