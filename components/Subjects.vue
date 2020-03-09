<template>
    <div class="subjects pt-4" v-if=" username !== 'admin' && username !== '' ">
      <ul>
        <li v-for="subject in subjects">
          <h2>{{ subject }}</h2>
        </li>
      </ul>
    </div>
</template>

<script>
  export default {
    name: "Subjects",
    props: ['username', 'subjects'],
    data() {
      return {

      }
    }
  }
</script>

<style scoped>

</style>
