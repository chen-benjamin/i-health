<template>
  <div id="sleepcycle">
    <h1>Sleep Cycle</h1>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <b-card
            title="Sample Blood Pressure Graph"
            img-src="/images/line-graph3.png"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 30rem"
            class="mx-auto h-100"
          >
            <b-card-text>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Reprehenderit eius quae tenetur, dignissimos debitis eaque
              deserunt laboriosam temporibus.
            </b-card-text>
            <b-button href="#/temperature" variant="light">Back</b-button>
            <b-button href="#/analysis" variant="primary">Finish</b-button>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SleepCycle",
};
</script>