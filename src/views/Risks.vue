<template>
  <div id="risks">
    <h1>Potential Health Risks</h1>
    <div>
      <b-card-group deck>
        <b-card
          border-variant="success"
          header="Healthy!"
          header-bg-variant="success"
          header-text-variant="white"
          align="center"
        >
          <b-card-text>Your average blood pressure is all good!</b-card-text>
        </b-card>

        <b-card
          border-variant="success"
          header="Healthy!"
          header-bg-variant="success"
          header-text-variant="white"
          align="center"
        >
          <b-card-text>Your average heart rate is all good!</b-card-text>
        </b-card>

        <b-card
          border-variant="danger"
          header="Danger"
          header-bg-variant="danger"
          header-text-variant="white"
          align="center"
        >
          <b-card-text
            >Your average temperature is high, please consult a
            doctor.</b-card-text
          >
        </b-card>

        <b-card
          border-variant="warning"
          header="Warning"
          header-bg-variant="warning"
          header-text-variant="Black"
          align="center"
        >
          <b-card-text
            >Your average hours of sleep is low, consider consulting a
            doctor.</b-card-text
          >
        </b-card>
      </b-card-group>
      <div>
        <b-button block variant="secondary" href="/#/reservation" size="lg"
          >Book An Appointment</b-button
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Risks",
};
</script>
