<template>
  <div id="exercise" class="accordion" role="tablist">
    <h1>Indoor exercise</h1>
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
        :id="'accordion-' + index"
        accordion="my-accordion"
        role="tabpanel"
      >
        <b-card-body>
          <b-img :src="exercise.images" fluid alt="Responsive image"></b-img>
          <b-card-text>{{ exercise.intro }}</b-card-text>
          <b-card-text>{{ exercise.benefitsIntro }}</b-card-text>
          <ul class="text-left">
            <li v-for="(benefit, index) in exercise.benefits" :key="index">
              {{ benefit }}
            </li>
          </ul>
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
          name: "Pilates",
          images: "/images/pilates.jpg",
          intro: `
          Pilates is a popular low-impact form of exercise that was developed a century ago. In pilates exercises, breathing, alignment, concentration and core strength are emphasized, and typically involves mats, pilates balls, and other inflated accessories to help build strength without the stress of higher-impact exercises. Pilates has been shown to improve balance, develop core strength and increase flexibility in older adults.
        `,
          benefitsIntro:
            "Some great pilates exercises for older adults include:",
          benefits: [
            "Mermaid movement",
            "Side circles",
            "Food slides",
            "Step ups",
            "Leg circle",
          ],
          tips: `Tips: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad,
            nihil maiores. Dolorum repudiandae officia, consequuntur, porro
            eveniet, alias eum repellat corrupti natus quae
            nesciunt?`,
          video: "https://www.youtube.com/embed/ooWPm9vsGTE",
        },
        {
          name: "Dumbbell Strength training",
          images: "/images/dumbbellstrength.jpg",
          intro: `
        Strength training has been shown to alleviate the symptoms of diabetes, osteoporosis, back pain, and depression, while helping you manage your weight. Strength training also contributes to a higher metabolism and enhanced glucose control. Dumbbell exercises are some of the best ways for seniors to strength train, if they are performed with the proper precautions. Dumbbells allow seniors to isolate muscle groups to strengthen, while improving balance and flexibility.
        `,
          benefitsIntro: "Some ideal dumbbell workouts for seniors include:",
          benefits: [
            "Bent-over row",
            "Tricep extension",
            "Bicep curl",
            "Overhead press",
            "Front raise",
          ],
          tips: `Tips: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad,
            nihil maiores. Dolorum repudiandae officia, consequuntur, porro
            eveniet, alias eum repellat corrupti natus quae
            nesciunt?`,
          video: "https://www.youtube.com/embed/wIyzNOirdb8",
        },
        {
          name: "chair yoga",
          images: "/images/chairyoga.jpg",
          intro: `Like water aerobics, chair yoga is a low-impact form of exercise that improves muscle strength, mobility, balance and flexibility, all of which are crucial health aspects for seniors. Chair yoga is an accessible form of yoga that provides less stress on muscles, joints, and bones than more conventional forms of yoga.
        As an added bonus, chair yoga has been shown to improve mental health in older adults. Regular chair yoga participants have better quality sleep, lower instances of depression, and report a general sense of well-being.`,
          benefitsIntro: "Great chair yoga exercises for seniors include:",
          benefits: [
            "Overhead stretch",
            "Seated cow stretch",
            "Seated cat stretch",
            "Seated mountain pose",
            "Seated twist",
          ],
          tips: `Tips: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad,
            nihil maiores. Dolorum repudiandae officia, consequuntur, porro
            eveniet, alias eum repellat corrupti natus quae
            nesciunt?`,
          video: "https://www.youtube.com/embed/-Ts01MC2mIo",
        },
        {
          name: "Resistance band workout",
          images: "/images/resistance.jpg",
          intro:
            "Resistance bands are stretchy strips of rubber that add resistance to workouts with reduced stress on your body. Resistance band workouts are user-friendly, and accessible for beginners. This form of exercise is growing more popular among seniors because of the relatively cheap up-front costs of materials, which makes resistance band workouts ideal for at-home exercise. Additionally, these exercises are ideal for strengthening your core, which improves posture, mobility, and balance.",
          benefitsIntro: "Resistance band workouts for seniors include:",
          benefits: [
            "Leg press",
            "Tricep extension",
            "Triceps press",
            "Lateral raise",
            "Bicep curl",
            "Band pull apart",
          ],
          tips:
            "Tips: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad,nihil maiores. Dolorum repudiandae officia, consequuntur, porro eveniet, alias eum repellat corrupti natus quae nesciunt?",
          video: "https://www.youtube.com/embed/ZP9FKXGoBg8",
        },
      ],
    };
  },
};
</script>
<style>
.text {
  text-align: left;
}
</style>