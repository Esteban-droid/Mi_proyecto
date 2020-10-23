<template>
  <div id="app">
    <div id="nav">
      <img alt="Vue logo" src="./assets/psicologia.png">
      <router-link to="/">Home</router-link> |
      <!-- <router-link to="/principal">Principal Page</router-link> -->
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>