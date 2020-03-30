<template>
  <div class="matrix">
    <h3 class="mb-4">Discretionary matrix to edit</h3>
    <table class="table">
      <tr>
        <th/>
        <th
          v-for="(subject, index) in getSubjects"
          :key="index"
        >
          {{ subject }}
        </th>
      </tr>

      <tr
        v-for="(user, userIndex) in getUsers"
        :key="userIndex"
      >
        <td><h4>{{ user.username }}</h4></td>
        <td
          v-for="(right, index) in user.rights"
          :key="index"
          contenteditable
          @input="changeRight($event, userIndex, index)"
        >
          {{ right }}
        </td>
      </tr>
    </table>
  </div>

</template>

<script lang="ts">
  import {
    Vue,
    Component,
    Prop
  } from 'nuxt-property-decorator'
  import { namespace } from 'vuex-class';

  const discretionStore = namespace('discretion');

  @Component({

  })
  export default class Matrix extends Vue {
    @discretionStore.Getter private getUsers;
    @discretionStore.Getter private getSubjects;
    @discretionStore.Mutation private updateRight;
    @Prop() subjects;

    private changeRight (event, userIndex, indexRight) {
      let newRight = event.target.innerText;
      this.updateRight({newRight, userIndex, indexRight});

      console.log(`Change right for ${this.getUsers[userIndex].username}-Subject${indexRight+1} : ${newRight}`);
    }
  }
</script>

<style scoped>
  .matrix {
    padding-bottom: 1rem;
  }
  table {
    border-collapse: collapse;
  }
  table, th, td {
    border: 1px solid black;
  }
  th, td {
    padding: 3px 5px;
  }
</style>
