<template>
    <div class="subjects pt-4">
      <h3>Hello, {{ getCurrentUser }}</h3>
      <table class="table">
        <tr>
          <th>Subject</th>
          <th>Read</th>
          <th>Write</th>
          <th>Edit</th>
        </tr>
        <tr v-for="(subject, index) in getSubjects" :key="index">
          <td>{{ subject }}</td>
          <td>
            <div
              class="btn btn-lg btn-outline-primary"
              :class="getUserData.rights[index][0] === '1' ? 'btn-outline-success' : 'btn-outline-danger'"
              @click="hyperVise({
                action: 'read',
                subjectIndex: index
              })"
            >
              Read
            </div>
          </td>
          <td>
            <div
              class="btn btn-lg"
              :class="getUserData.rights[index][1] === '1' ? 'btn-outline-success' : 'btn-outline-danger'"
              @click="hyperVise({
                action: 'write',
                subjectIndex: index
              })"
            >
              Write
            </div>
          </td>
          <td>
            <div
              class="btn btn-lg btn-outline-primary"
              :class="getUserData.rights[index][2] === '1' ? 'btn-outline-success' : 'btn-outline-danger'"
              @click="hyperVise({
                action: 'edit',
                subjectIndex: index
              })"
            >
              Edit
            </div>
          </td>
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
    @discretionStore.Getter private getUserData;

    @discretionStore.Action private hyperVise;

    @Prop() username;
  }
</script>

<style scoped>

</style>
