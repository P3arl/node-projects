<template>
  <div class="home">
    <img src="../assets/mongodb.jpg">
    <img src="../assets/expressjs.png" alt="">
    <img alt="Vue logo" src="../assets/logo.png" width="150" height="150">
    <img src="../assets/nodejs_logo_2016.png" alt="" width="150" height="100">
    <NotesComponent msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import NotesComponent from '@/components/NotesComponent.vue'

export default {
  name: 'Home',
  components: {
    NotesComponent
  }
}
</script>
