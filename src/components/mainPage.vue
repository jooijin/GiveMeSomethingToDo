<template>
  <div class="background">
    <div class="imgWrap">
      <img src="../assets/images/Mc28.gif" width="200" height="200">
    </div>
    <div>
      <button class="showButton" @click="showSomethingToDo">Something To Do</button>
    </div>
    <div class="recommBox">
      <p>{{recommendation}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recommendation : 'What should I do today ... ',
    }
  },
  methods : {
    showSomethingToDo() {
      this.getSomethingToDo();
    },
    getSomethingToDo: function () {
      this.$axios.get('/activity')
          .then((res) => {
            this.recommendation = res.data.activity;
          })
          .catch((error) => {
            console.log(error);
          })
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .background {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .imgWrap {
    margin-bottom: 10vh;
  }
  .showButton {
    height: 50px;
    width: 200px;
    background: white;
    border: none;
    border-radius: 10px;
    color: #f86594;
    font-size: 18px;
  }
  .recommBox {
    margin-top: 10vh;
    height: 10vh;
    width: 80vw;
    color: white;
    font-size: 18px;
  }
</style>
