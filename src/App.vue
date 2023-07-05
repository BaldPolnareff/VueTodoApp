<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
</script>

<template>
    <div class="wrapper">
      <NavBar />
    </div>

  <RouterView />

</template>

<style lang="scss">

// Importing the Rubik font from google fonts
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700&display=swap');


* {
  font-family: "Rubik", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
}

</style>
