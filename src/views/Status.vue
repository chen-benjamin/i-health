<template>
  <div id="status">
    <h1>Status</h1>
    <b-list-group>
      <b-list-group-item>
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-6 mx-auto">
              <div class="row">
                <div class="col-4">
                  <img src="/images/heart.gif" alt="" width="150">
                </div>
                <div class="col-4 my-auto">
                  <h3>{{ heartRate }}</h3>
                </div>
                <div class="col-4 my-auto">
                  <span>Hear Rate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </b-list-group-item>
      <b-list-group-item>
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-6 mx-auto">
              <div class="row">
                <div class="col-4">
                  <img src="/images/blood.gif" alt="" width="150">
                </div>
                <div class="col-4 my-auto">
                  <h3>{{ bpH }}/{{ bpL }}</h3>
                </div>
                <div class="col-4 my-auto">
                  <span>Blood Pressure</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </b-list-group-item>
      <b-list-group-item>
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-6 mx-auto">
              <div class="row">
                <div class="col-4"></div>
                <div class="col-4 my-auto">
                  <h3>{{ temperature }}</h3>
                </div>
                <div class="col-4 my-auto">
                  <span>Temperature</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </b-list-group-item>
      <b-list-group-item>
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-6 mx-auto">
              <div class="row">
                <div class="col-4"></div>
                <div class="col-4 my-auto">
                  <h3>99</h3>
                </div>
                <div class="col-4 my-auto">
                  <span>Oxygen Saturation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </b-list-group-item>
      <b-list-group-item>
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-6 mx-auto">
              <div class="row">
                <div class="col-4"></div>
                <div class="col-4 my-auto">
                  <h3>{{ steps }}</h3>
                </div>
                <div class="col-4 my-auto">
                  <span>Steps</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  name: 'Status',
  mounted: function() {
    this.intervalId = setInterval(() => this.random(), 10000);
  },
  beforeDestroy: function() {
    clearInterval(this.intervalId)
  },
  data: () => {
    return {
      intervalId: null,
      heartRate: 72,
      bpH: 109,
      bpL: 88,
      temperature: 36.6,
      steps: 3096
    }
  },
  methods: {
    random() {
      this.heartRate = 70 + Math.floor(Math.random() * 10)
      this.bpH = 100 + Math.floor(Math.random() * 10)
      this.bpL = 65 + Math.floor(Math.random() * 10)
      this.temperature = (36 + Math.random()).toFixed(1)
      this.steps++
    }
  }
}
</script>

<style scoped>
h1 {
  margin: 20px;
  font-size: 1.8rem;
  color: #070c51;
}

.list-group-item {
  background-color: black;
  color: white;
}
</style>
