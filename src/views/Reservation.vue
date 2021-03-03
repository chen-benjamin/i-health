<template>
  <div id="reservation">
    <div class="container">
      <div></div>
      <div>
        <h1>Reservation</h1>
        <b-form>
          <b-form-group label="Select Expert Type:">
            <b-form-radio name="expertType" value="Doctor" required
              >Doctor</b-form-radio
            >
            <b-form-radio name="expertType" value="Nutritionist" required
              >Nutritionist</b-form-radio
            >
            <b-form-radio name="expertType" value="Fitness Instructor" required
              >Fitness Instructor</b-form-radio
            >
          </b-form-group>

          <label for="example-datepicker">Choose a Date</label>
          <b-form-datepicker
            id="example-datepicker"
            name="date"
            class="mb-2"
            required
          ></b-form-datepicker>
          <b-form-group label="Select Time:">
            <b-form-timepicker
              name="time"
              locale="en"
              required
            ></b-form-timepicker>
          </b-form-group>

          <b-form-group label="Do you have a specific expert to appoint?">
            <b-form-radio
              v-model="isActive"
              id="expert"
              name="haveExpert"
              value="true"
              required
              >Yes</b-form-radio
            >
            <b-form-radio
              v-model="isActive"
              id="noExpert"
              name="haveExpert"
              value="false"
              required
              >No</b-form-radio
            >
          </b-form-group>
          <!-- <div class="mt-2">Value: '{{ value }}'</div> -->

          <b-form-group
            v-if="isActive == 'true'"
            id="expertName"
            name="expertName"
            label="Enter Expert Name:"
            label-for="input-2"
          >
            <b-form-input
              id="input-2"
              placeholder="Enter expert name"
              required
            ></b-form-input>
          </b-form-group>

          <b-button type="submit" variant="primary"
            ><a href="/views/ReservationSuccess.vue">Submit</a></b-button
          >
          <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Reservation",
  data() {
    return {
      isActive: null,
      haveExpert: "",
      form: {
        expertType: "",
        date: "",
        time: "",
        haveExpert: "",
        expertName: "",
      },
      show: true,
    };
  },
  methods: {
    displayExpert() {
      console.log(typeof this.isActive);
    },
  },
};
</script>
<style scoped>
.container {
  text-align: left;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
}
a:link,
a:visited {
  text-decoration: none;
}
A:link {
  color: white;
  text-decoration: none;
}
A:visited {
  color: white;
  text-decoration: none;
}
A:hover {
  color: white;
  text-decoration: none;
}
A:active {
  color: white;
  text-decoration: none;
}
</style>