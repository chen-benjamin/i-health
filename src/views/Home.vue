<template>
  <div id="home">
    <h1>Home</h1>
    <div>
      <b-button block variant="primary" href="/#/health-risk"><span>Potential Health Risk</span></b-button>
      <b-button block variant="primary" href="/#/reservation">Make a reservation</b-button>
      <b-button block variant="primary" href="/#/diet">Diet Suggestion</b-button>
      <b-button block variant="primary" href="/#/exercise">Exercise Suggestion</b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
h1 {
  margin: 20px;
  font-size: 1.8rem;
  color: #070c51;
}

a.btn {
  border-radius: 20px;
  border: none;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-block {
  width: 90%;
  margin: 0 auto;
}

.btn:nth-child(1) {
  background-image: linear-gradient(to right, rgb(248, 87, 166) 0%, rgb(255, 88, 88) 51%, rgb(248, 87, 166) 100%);
}
.btn:nth-child(2) {
  background-image: linear-gradient(to right, rgb(0, 210, 255) 0%, rgb(58, 123, 213) 51%, rgb(0, 210, 255) 100%);
}
.btn:nth-child(3) {
  background-image: linear-gradient(to right, rgb(255, 81, 47) 0%, rgb(240, 152, 25) 51%, rgb(255, 81, 47) 100%);
}
.btn:nth-child(4) {
  background-image: linear-gradient(to right, rgb(76, 184, 196) 0%, rgb(60, 211, 173) 51%, rgb(76, 184, 196) 100%);
}
</style>
