<template>
  <b-container>
    <div class="d-flex justify-content-center mb-4">
      <b-button
        @click="setShowLoginForm(true)"
        v-if="!getCurrentUser && !getShowLoginForm"
        variant="primary"
        class="btn-lg"
      >
        Login
      </b-button>
      <b-button
        @click="exit"
        v-if="getCurrentUser"
        variant="danger"
        class="btn-lg"
      >
        Exit
      </b-button>
    </div>

    <h1 class="text-lg-center text-monospace mb-5"> Discretionary security models </h1>

    <Matrix v-if="getShowEditMatrix && isAdmin" />

    <b-form @submit.prevent="onSubmit" @reset.prevent="exitForm" v-if="getShowLoginForm">
      <b-form-group
        id="input-group-1"
        label="Login:"
        label-for="input-1"
        description="Write your login here."
      >
        <b-form-input
          id="input-1"
          v-model="form.username"
          required
          placeholder="Enter login"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Sign in</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>

    <Subjects v-if="getShowSubjectAccess" />
  </b-container>
</template>

<script lang="ts">
  import Matrix from "../components/Matrix.vue";
  import Subjects from "../components/Subjects.vue";
  import {
    Vue,
    Component,
    Prop
  } from 'nuxt-property-decorator'
  import { namespace } from 'vuex-class';

  const discretionStore = namespace('discretion');

  @Component({
    components: {
      Subjects,
      Matrix
    },
  })
  export default class DiscretionaryPage extends Vue {
    @discretionStore.Mutation private setCurrentUser;
    @discretionStore.Mutation private setShowLoginForm;
    @discretionStore.Mutation private setShowEditMatrix;
    @discretionStore.Mutation private setShowSubjectAccess;
    //todo: move to action
    @discretionStore.Mutation private exit;

    @discretionStore.Getter private getCurrentUser;
    @discretionStore.Getter private getShowLoginForm;
    @discretionStore.Getter private getShowEditMatrix;
    @discretionStore.Getter private getShowSubjectAccess;
    @discretionStore.Getter private isAdmin;

    private form = {
      username: ''
    };

    private onSubmit() {
      this.setCurrentUser(this.form.username);
      this.setShowLoginForm(false);
      this.clearForm();

      if (this.isAdmin) {
        this.setShowEditMatrix(true);
      }
      else {
        this.setShowSubjectAccess(true)
      }
    };

    private clearForm() {
      // Reset our form values
      this.form.username = '';
    }

    private exitForm() {
      this.clearForm();
      this.exit();
    };
  }
</script>

<style scoped>

</style>
