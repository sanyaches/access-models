<template>
  <b-container>
    <Matrix :username="username"/>

    <b-form @submit.prevent="onSubmit" @reset.prevent="onReset" v-if="show">
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

    <Subjects :username="username"/>
  </b-container>
</template>

<script lang="ts">
  import Matrix from "../../components/Matrix.vue";
  import Subjects from "../../components/Subjects.vue";
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
    private username = '';

    private form = {
      username: ''
    };

    private show = true;


    private onSubmit() {
      // alert(JSON.stringify(this.form))
      this.username = this.form.username;
    };
    private onReset() {
      // Reset our form values
      this.form.username = '';
      this.username = '';
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    };
  }
</script>

<style scoped>

</style>
