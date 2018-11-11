<template>
  <div>
    <header class="navbar-fixed">
      <nav class="orange">
        <div class="nav-wrapper">
          <div class="hide-on-med-and-down left">
            <router-link to="/" class="brand-logo">Randomizer for Agricola</router-link>
          </div>
          <router-link to="/" class="hide-on-large-only" style="font-size: 1.3em;">Randomizer for Agricola</router-link>
        </div>
      </nav>
    </header>
  </div>
</template>
<script>
  export default {
    mounted() {
      let el = document.querySelector('.sidenav');
      let instance = M.Sidenav.init(el, {});
    },
  }
</script>
<style scoped>
</style>