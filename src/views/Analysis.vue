<template>
  <div id="analysis">
    <h1>Analysis</h1>
    <div>
      <b-button block variant="info" href="/#/bloodpressure" size="lg"
        >Blood Pressure</b-button
      >
    </div>
    <br />
    <div>
      <b-button block variant="info" href="/#/heartrate" size="lg">Heart Rate</b-button>
    </div>
    <br />
    <div>
      <b-button block variant="info" href="/#/temperature" size="lg" 
        >Temperature</b-button
      >
    </div>
    <br />
    <div>
      <b-button block variant="info" href="/#/sleepcycle" size="lg"
        >Sleep Cycles</b-button
      >
    </div>
    <br>
        <div>
      <b-button block variant="secondary" href="/#/health-risk" size="lg"
        >Back</b-button
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Analysis",
};
</script>