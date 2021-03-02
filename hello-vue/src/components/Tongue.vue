<template>
  <div class="tongue">
    <div>{{ msg }}</div>
  </div>
</template>

<script>
export default {
  name: 'Tongue',
  props: {
    msg: String,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
