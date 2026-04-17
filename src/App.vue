<template>
 <Navbar/>
 <router-view />
</template>
<script setup>
import Navbar from './components/Navbar.vue';
</script>
<style>
body {
  margin: 0;
  background-image: linear-gradient(
    90deg,
    #cb343b 25%,
    #f4b0bc 25%,
    #f4b0bc 50%,
    #cb343b 50%,
    #cb343b 75%,
    #f4b0bc 75%,
    #f4b0bc 100%
  );
  background-size: 200px 200px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
