<template>
  <div id="app">
    <router-view></router-view>
    <div class="bot-nav">
      <Narbar></Narbar>
    </div>
  </div>
</template>

<script>
import Narbar from './components/Navbar'

export default {
  name: 'App',
  components: {
    Narbar
  }
}
</script>

<style>
#app {
  font-family: 'Vollkorn', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #f2f6ff;
}

.bot-nav {
  height: 100px;
}
</style>
