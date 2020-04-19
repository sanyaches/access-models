<template>
    <div class="objects pt-4">
      <h3>Hello, {{ getCurrentUser }}</h3>
      <table class="table">
        <tr>
          <th>Object</th>
          <th>Read</th>
          <th>Write</th>
          <th>Edit</th>
        </tr>
        <tr v-for="(object, index) in getObjects" :key="index">
          <td>{{ object }}</td>
          <td>
            <div
              class="btn btn-lg btn-outline-primary"
              :class="getUserData.rights[index][0] === '1' ? 'btn-outline-success' : 'btn-outline-danger'"
              @click="hyperVise({
                action: 'read',
                objectIndex: index
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
                objectIndex: index
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
                objectIndex: index
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
  export default class Objects extends Vue{
    @discretionStore.Getter private getObjects;
    @discretionStore.Getter private getCurrentUser;
    @discretionStore.Getter private getUserData;

    @discretionStore.Action private hyperVise;

    @Prop() username;
  }
</script>

<style scoped>

</style>
