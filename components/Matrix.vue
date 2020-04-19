<template>
  <div class="matrixes">
    <div class="matrix">
      <h3 class="mb-4">Discretionary matrix to edit</h3>
      <table class="table">
        <tr>
          <th/>
          <th
            v-for="(object, index) in getObjects"
            :key="index"
          >
            {{ object }}
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

    <div class="matrix" v-if="getCurrentModel === 'HRU'">
      <h3 class="mb-4">HRU Matrix</h3>
      <table class="table">
        <tr>
          <th/>
          <th
            v-for="(object, index) in getObjects"
            :key="index"
          >
            {{ object }}
          </th>
        </tr>

        <tr
          v-for="(user, userIndex) in getUsers"
          :key="userIndex"
        >
          <td><h4>{{ user.username }}</h4></td>
          <td
            :id="`hru_${userIndex}_${index}`"
            v-for="(right, index) in user.hru"
            :key="index"
            contenteditable
            @input="changeRight($event, userIndex, index)"
          >
            {{ right }}
          </td>
        </tr>
      </table>
      <div @click="createSubject('admin')" class="matrix__add-object matrix_addition">+</div>
      <div class="matrix__add-subject matrix_addition">+</div>
    </div>
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
    @discretionStore.Getter private getObjects;
    @discretionStore.Getter private getCurrentModel;
    @discretionStore.Getter private canEdit;
    @discretionStore.Mutation private updateRight;
    @Prop() objects;

    private changeRight (event, userIndex, indexRight) {
      let newRight = event.target.innerText;
      if (event.target.id.includes('hru')) {
        this.updateRight({newRight, userIndex, indexRight, hru: true});
      } else {
        this.updateRight({newRight, userIndex, indexRight});
      }

      console.log(`Try change right for ${this.getUsers[userIndex].username}-Object${indexRight+1} : ${newRight}`);
    }
  }
</script>

<style scoped>
  .matrix {
    padding-bottom: 1rem;
    position: relative;
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
  .matrix_addition {
    position: absolute;

    width: 30px;
    height: 30px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 30px;
    border-radius: 50%;

    background: #3b8070;
    color: #ffffff;
    cursor: pointer;
  }

  .matrix__add-object {
    top: 50px;
    right: -20px;
  }

  .matrix__add-subject {
    bottom: 9px;
    left: -7px;
  }
</style>
