<template>
  <div id="app">
    <img alt="thrill logo" src="./assets/vueKill.jpg">
    <Tongue msg="👅👅👅"/>
    <HelloWorld msg="A Vue to a Thrill"/>
    <Button />

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background: url(./assets/specklePaint.jpg);
  background-size: contain;
  background-repeat: repeat;
}
</style>
