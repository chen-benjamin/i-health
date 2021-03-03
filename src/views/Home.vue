<template>
  <div id="home">
    <div class="container">
      <div class="row">
        <div class="col-12 col-sm-6 col-xl-3 p-0">
          <a href="/#/health-risk">
            <b-card
              title="Potential Health Risk"
              img-src="https://placem.at/things?w=500&random=1"
              img-alt="Image"
              img-top
              tag="article"
              class="mx-auto h-100"
            >
            </b-card>
          </a>
        </div>
        <div class="col-12 col-sm-6 col-xl-3 p-0">
          <a href="/#/reservation">
            <b-card
              title="Make a reservation"
              img-src="https://placem.at/place?w=500&random=1"
              img-alt="Image"
              img-top
              tag="article"
              class="mx-auto h-100"
            >
            </b-card>
          </a>
        </div>
        <div class="col-12 col-sm-6 col-xl-3 p-0">
          <a href="/#/diet">
            <b-card
              title="Diet Suggestion"
              img-src="https://placem.at/people?w=500&random=7"
              img-alt="Image"
              img-top
              tag="article"
              class="mx-auto h-100"
            >
            </b-card>
          </a>
        </div>
        <div class="col-12 col-sm-6 col-xl-3 p-0">
          <a href="/#/exercise">
            <b-card
              title="Exercise Suggestion"
              img-src="https://placem.at/people?w=500&random=5"
              img-alt="Image"
              img-top
              tag="article"
              class="mx-auto h-100"
            >
            </b-card>
          </a>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
a, a:hover {
  text-decoration: none;
  color: black;
}
</style>
