<template>
  <mainPage/>
</template>

<script>
import mainPage from './components/mainPage.vue'

export default {
  name: 'App',
  components: {
    mainPage
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Secular+One&display=swap');

* {
    font-family: "Secular One", sans-serif;
    text-align: center;
    margin: 0px;
    padding: 0px;
    line-height: 200%;
    word-break: keep-all;
}

body {
  height: 100vh;
  background: linear-gradient(50deg, #ffcaa6, #f86594);
}
</style>
