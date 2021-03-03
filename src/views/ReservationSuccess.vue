<template>
  <div id="reservationSuccess">

    <div class="container">
      <div class="row">
        <div class="col-12">
          <b-card
            title="You have booked a reservation!"
            img-src="/images/success.png"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem"
            class="mx-auto h-100"
          >
            <b-button href="#" variant="primary">Home</b-button>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReservationSuccess",
};
</script>