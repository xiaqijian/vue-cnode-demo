<template>
  <div id="app" v-cloak>
    <!-- <img src="./assets/logo.png"> -->
    <cnodenav></cnodenav>
    <div class="app-left">
       <router-view/>
    </div>
    <cnodefooter></cnodefooter>
  </div>
</template>

<script>
import cnodenav from "./components/nav"
import cnodefooter from "./components/footer"


export default {
  name: 'App',
  components: {
    cnodenav,
    cnodefooter
  },
  mounted () {
    this.$store.commit('changelogin');
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center;*/
  color: #2c3e50;
  /* margin-top: 60px;*/
}
body {
  margin:0;
  background:#eae5e5;
}
.app-left {
  width:90%;
  padding:20px;
  /* background:#fff;*/
  margin-left:20px;
  margin-top:30px;
}
.bg {
  background:#fff;
  padding:10px;
  width:80%;
}
</style>
