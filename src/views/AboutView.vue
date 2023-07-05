<template>
  <div class="about">
    <h1 class="about-title">About this app</h1>
    <p>
      This is a simple todo app built with Vue 3 and TypeScript. It uses the
      Composition API. The app is styled using scss. 

      At the moment, the app is using localStorage to store the todos.
      My next task is to create a backend (probably using Django) and connect it to this app.
    </p>
  </div>
</template>

<style scoped>

.about {
  /* display: flex; */
  justify-content: center;
  height: 100vh;
  color: whitesmoke;
  padding: 20px;
  margin: 60px;
}
.about-title {
  font-size: 3rem;
  font-weight: 500;
  color: whitesmoke;
  margin: 60px;
}

p {
  font-size: 1.6rem;
  font-weight: 300;
  color: whitesmoke;
  margin: 50px;
}
</style>
