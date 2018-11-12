<template>
  <div>
    <ul class="sidenav" id="slide-out">
      <li>
        <div class="user-view">
          <div class="background">
            <img src="@/assets/bg.jpg" style="width: 100%;">
          </div>
          <img class="circle" id="user-cion" src="@/assets/icon.png">
          <span class="white-text name">Randomizer for Agricola</span>
          <span class="white-text email">「教養特論：アグリコラ拡張学」付録</span>
        </div>
      </li>
      <li><router-link class="sidenav-close" to="/east_india_company"><i class="material-icons">location_city</i>東インド会社</router-link></li>
      <li><router-link class="sidenav-close" to="/field_messenger"><i class="material-icons">crop_original</i>畑の使者</router-link></li>
      <li><router-link class="sidenav-close" to="/contortionist"><i class="material-icons">gesture</i>ヘビ女</router-link></li>
      <li><router-link class="sidenav-close" to="/veterinarian"><i class="material-icons">loyalty</i>獣医</router-link></li>
      <li class="divider"></li>
      <li><a href="https://agricola.jizinet.work/" target="_blank">ぶらつき学生ポータル(外部サイト)</a></li>
    </ul>
    <header class="navbar-fixed">
      <nav>
        <div class="nav-wrapper orange">
          <div class="hide-on-med-and-down left">
            <router-link to="/" class="breadcrumb">Randomizer for Agricola</router-link>
            <router-link v-if="this.$route.path !== '/'" :to="this.$route.path" class="breadcrumb">{{ this.$route.name }}</router-link>
          </div>
          <router-link :to="this.$route.path" class="hide-on-large-only" style="font-size: 1.3em;">{{ this.$route.name }}</router-link>
          <a v-if="this.$route.path === '/'" href="#" data-target="slide-out" class="sidenav-trigger"><i class="material-icons">menu</i></a>
          <router-link v-else to="/" id="back-trigger" class="hide-on-large-only"><i class="material-icons">arrow_back</i></router-link>
          <ul class="right hide-on-med-and-down">
            <li><router-link class="sidenav-close" to="/east_india_company">東インド会社</router-link></li>
            <li><router-link class="sidenav-close" to="/field_messenger">畑の使者</router-link></li>
            <li><router-link class="sidenav-close" to="/contortionist">ヘビ女</router-link></li>
            <li><router-link class="sidenav-close" to="/veterinarian">獣医</router-link></li>
            <li><a href="https://agricola.jizinet.work/" target="_blank">ぶらつき学生ポータル</a></li>
          </ul>
        </div>
      </nav>
    </header>
  </div>
</template>
<script>
  export default {
    mounted() {
      let sideNav = document.querySelector('.sidenav');
      M.Sidenav.init(sideNav, {});
    },
  }
</script>
<style scoped>
  #back-trigger {
    float: left;
    position: relative;
    z-index: 1;
    height: 56px;
    margin: 0 18px;
  }
  #back-trigger i {
    height: 56px;
    line-height: 56px;
  }
  @media only screen and (min-width: 601px) {
    #back-trigger, #back-trigger i {
      height: 64px;
      line-height: 64px;
    }
  }
</style>