<template>
  <div id="demo">
    <div>
      <b-jumbotron
        header="BootstrapVue"
        lead="Bootstrap v4 Components for Vue.js 2"
      >
        <p>For more information visit website</p>
        <b-button variant="primary" href="#">More Info</b-button>
      </b-jumbotron>
    </div>
    <h1 v-if="isActive">If statement demo</h1>
    <b-button-group>
      <b-button @click="filterFood('Protein')">Protein</b-button>
      <b-button @click="filterFood('Carbohydrates')">Carbohydrates</b-button>
      <b-button @click="filterFood('Fats')">Fats</b-button>
    </b-button-group>
    <b-list-group v-if="selected.length > 0">
      <b-list-group-item v-for="food, index in selected" :key="index">{{ food.foodName }}</b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  name: "Demo",
  data() {
    return {
      isActive: true,
      selected: [],
      foods: [
        {
          foodID: 1,
          foodName: "Egg",
          nutrient: "Protein",
        },
        {
          foodID: 2,
          foodName: "Fish",
          nutrient: "Protein",
        },
        {
          foodID: 3,
          foodName: "Beans",
          nutrient: "Carbohydrates",
        },
        {
          foodID: 4,
          foodName: "Fiber-rich vegetables",
          nutrient: "Carbohydrates",
        },
        {
          foodID: 5,
          foodName: "Nuts",
          nutrient: "Fats",
        },
        {
          foodID: 6,
          foodName: "Vegetable oils",
          nutrient: "Fats",
        },
        {
          foodID: 7,
          foodName: "Vegetables",
          nutrient: "Vitamins",
        },
        {
          foodID: 8,
          foodName: "Fruits",
          nutrient: "Vitamins",
        },
        {
          foodID: 9,
          foodName: "Beans",
          nutrient: "Minerals",
        },
        {
          foodID: 10,
          foodName: "Mushrooms",
          nutrient: "Minerals",
        },
        {
          foodID: 11,
          foodName: "Fruits",
          nutrient: "Water",
        },
        {
          foodID: 12,
          foodName: "Vegetables",
          nutrient: "Water",
        },
      ],
    };
  },
  methods: {
    filterFood(type) {
      this.selected = this.foods.filter(food => {
        return food.nutrient == type
      })
    }
  }
};
</script>
