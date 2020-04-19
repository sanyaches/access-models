<template>
  <b-container>
    <div class="mb-2">Select model:</div>
    <b-select
      class="mb-4"
      name="model"
      :options="getModels"
      :value="getCurrentModel"
      @input="setModel($event)"
    />
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

    <h1 class="text-lg-center text-monospace mb-5"> Discretionary security models: <strong>{{ getCurrentModel }}</strong> </h1>

    <Matrix v-if="isAuth && isAdmin || isAuth && isHru" />

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

    <Objects v-if="getShowObjectAccess" />
  </b-container>
</template>

<script lang="ts">
  import Matrix from "../components/Matrix.vue";
  import Objects from "../components/Objects.vue";
  import {
    Vue,
    Component,
    Prop
  } from 'nuxt-property-decorator'
  import { namespace } from 'vuex-class';

  const discretionStore = namespace('discretion');

  @Component({
    components: {
      Objects,
      Matrix
    },
  })
  export default class DiscretionaryPage extends Vue {
    @discretionStore.Mutation private setCurrentUser;
    @discretionStore.Mutation private setShowLoginForm;
    @discretionStore.Mutation private setShowEditMatrix;
    @discretionStore.Mutation private setShowObjectAccess;
    @discretionStore.Mutation private setModel;
    // todo: move to actions
    @discretionStore.Mutation private exit;

    @discretionStore.Getter private getCurrentUser;
    @discretionStore.Getter private getShowLoginForm;
    @discretionStore.Getter private getShowEditMatrix;
    @discretionStore.Getter private getShowObjectAccess;
    @discretionStore.Getter private isAdmin;
    @discretionStore.Getter private isAuth;
    @discretionStore.Getter private isHru;
    @discretionStore.Getter private getCurrentModel;
    @discretionStore.Getter private getModels;

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
        this.setShowObjectAccess(true)
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
