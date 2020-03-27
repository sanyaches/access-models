<template>
    <div class="subjects pt-4">
      <h2>Hello, {{ getCurrentUser }}</h2>
      <table class="table">
        <tr>
          <th>Subject</th>
          <th>Read</th>
          <th>Write</th>
          <th>Edit</th>
        </tr>
        <tr v-for="(subject, index) in getSubjects" :key="index">
          <td>{{ subject }}</td>
          <td>{{ getUserRights[index][0] }}</td>
          <td>{{ getUserRights[index][1] }}</td>
          <td>{{ getUserRights[index][2] }}</td>
        </tr>
      </table>
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
    @discretionStore.Getter private getCurrentUser;
    @discretionStore.Getter private getUserRights;

    @Prop() username;
  }
</script>

<style scoped>

</style>
