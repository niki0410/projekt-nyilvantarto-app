<template>
  <div class="background d-flex flex-column justify-content-center align-items-center p-4 bg-white mt-5 m-5">
    <div class="welcome mt-1">👋🏻👋🏻👋🏻</div>

    <div class="d-flex flex-column m-5 gap-2">
      <RouterLink to="/ProjectList" class="btn btn-home d-flex justify-content-center align-items-center">
        📜 Projektek listája
      </RouterLink>
      <RouterLink to="/ProjectForm" class="btn btn-home d-flex justify-content-center align-items-center">
        ➕ Új projekt hozzáadása
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.background {
  border-radius: 10px;
}

.welcome {
  font-weight: bold;
  font-size: 25px;
}

.btn-home {
  background-color: #cb343b !important;
  border-color: #cb343b !important;
  height: 100px;
  width: 400px;
  color: #fff !important;
  text-decoration: none;
}
.btn-home:hover{
    background-color: #f4b0bc !important;
  border-color: #f4b0bc !important;
}
</style>