<template>
  <div id="exercise" class="accordion" role="tablist">
    <h1>Outdoor exercise</h1>

    <b-card
      no-body
      class="mb-1"
      v-for="(exercise, index) in exercises"
      :key="index"
    >
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle="'accordion-' + index" variant="info">{{
          exercise.name
        }}</b-button>
      </b-card-header>
      <b-collapse
        :id="'accordion-'+index"
        accordion="my-accordion"
        role="tabpanel"
      >
        <b-card-body>
          <b-img :src="exercise.images" alt="Responsive image"></b-img>
          <b-card-text>{{ exercise.intro }}</b-card-text>
          <b-card-text>{{ exercise.benefitsIntro }}</b-card-text>
          <ul class="text-left"><li v-for="(benefit,index) in exercise.benefits" :key="index">{{benefit}}</li></ul>
          <b-card-text>{{ exercise.tips }}</b-card-text>
          <iframe
            fluid alt="Responsive image"
            :src="exercise.video"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      exercises: [
        {
          name: "Walking",
          images: "/images/walking.jpg",
          intro:
            " One of the least stressful and accessible forms of exercise is walking. For some seniors, walking is a bigger challenge than others, so distance and step goals differ from person to person. For the general population, 10,000 steps per day is advised for a healthy lifestyle, but those with difficulty walking or joint pain may settle for a smaller number as a goal. A PLOS One study found that walking 10,000 steps lowered the ten-year outlook for mortality by 46%. Walking promotes a healthy lifestyle, while strengthening muscles, lowering your risk of heart disease, stroke, diabetes, and colon cancer. ",
          benefitsIntro: "Ideas for walking exercises for seniors:",
          benefits: [
            "Find a moderate trail through a park",
            "Find a walk-friendly race to train for",
            "Walk the perimeter of a familiar building",
            "Find an audiobook or a playlist for stimulation during your walk",
          ],
          tips:
            "Tips: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, nihil maiores. Dolorum repudiandae officia, consequuntur, porro eveniet, alias eum repellat corrupti natus quae nesciunt?",
          video: "https://www.youtube.com/embed/4qlzesDNir8",
        },
        {
          name: "Yoga/Tai Chi",
          images: "/images/taichi.jpg",
          intro:
            "As we age, our sense of balance worsens, which is why we should be doing everything we can to improve our balance. Exercises like yoga and tai chi are great ways to do just that. It’s recommended that you attend a class first to understand and perform the movements accurately and then you can do them on your own anywhere you choose. Some yoga and tai chi classes are even held outside, giving you the opportunity to exercise outdoors while improving your balance.",
          benefitsIntro: null,
          benefits: null,
          tips:
            "Tips: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, nihil maiores. Dolorum repudiandae officia, consequuntur, porro eveniet, alias eum repellat corrupti natus quae nesciunt?",
          video: "https://www.youtube.com/embed/cEOS2zoyQw4",
        },
      ],
    };
  },
};
</script>
<style>
  .main-section{
  display:grid;
  grid-template-columns: 1fr 2fr 1fr;
}
</style>