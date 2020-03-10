<template>
    <div class="subjects pt-4" v-if=" username !== 'admin' && username !== '' ">
      <ul>
        <li v-for="subject in getSubjects">
          <h2>{{ subject }}</h2>
        </li>
      </ul>
    </div>
</template>

<script lang="ts">
  import { Vue, Component, Prop } from 'nuxt-property-decorator'
  import { namespace } from "vuex-class";

  const discretionStore = namespace('discretion');

  @Component({

  })
  export default class Subjects extends Vue{
    @discretionStore.Getter private getSubjects;
    @Prop() username;
  }
</script>

<style scoped>

</style>
