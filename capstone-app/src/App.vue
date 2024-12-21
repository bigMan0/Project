<template>
  <div id="app">
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      message: ''
    };
  },
  mounted() {
    axios.get('http://localhost:5000/')  // Change the URL if your backend is hosted elsewhere
      .then(response => {
        this.message = response.data;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style>
/* Your styles here */
</style>
