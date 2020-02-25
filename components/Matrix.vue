<template>
  <div class="div" v-if=" username === 'admin' ">
    <h1>Discretionary matrix to edit</h1>
  </div>

</template>

<script>
  export default {
    name: "Matrix",
    props: ['username'],
  }
</script>

<style scoped>

</style>
