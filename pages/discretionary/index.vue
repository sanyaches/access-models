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

<script>
  import Matrix from "../../components/Matrix";
  import Subjects from "../../components/Subjects";

  export default {
    name: "index",
    components: {
      Subjects,
      Matrix
    },
    data() {
      return {
        username: '',
        form: {
          username: '',
        },
        show: true
      }
    },
    methods: {
      onSubmit() {
        // alert(JSON.stringify(this.form))
        this.username = this.form.username;
      },
      onReset() {
        // Reset our form values
        this.form.username = '';
        this.username = '';
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>

<style scoped>

</style>
