<template>
  <div>
    <the-navigation></the-navigation>
    <router-view></router-view>
    <router-view name="footer"></router-view>
  </div>
</template>

<script>
import TheNavigation from "./components/TheNavigation.vue";

export default {
  name: "App",
  components: {
    TheNavigation,
  },
  data() {
    return {
      experience: [
        {
          dates: "Oct 2021",
          format: "Job",
          description:
            "Web-developer. Tech stack: Vue.js + Ejs. Project: business orders' and items' stock system. Fixed problems with frontend, new users' regitration.",
        },
        {
          dates: "2020 – today",
          format: "Education",
          description:
            "Front-end courses (Youtube; Udemy; Freecodecamp; GeekBrains - web-development React, QA; Codewars), making pet projects",
        },  
        {
          dates: "2019 – 2020",
          format: "Job",
          description: "Bank representative (Tinkoff)",
        },
        {
          dates: "2018 – 2020",
          format: "Job",
          description: "Psychologist (consultation, private practice)",
        },
        {
          dates: "2015 – 2019",
          format: "Education",
          description: "RSUH (Psychology Institute) – bachelor",
        },
        {
          dates: "2009 – 2014",
          format: "Education",
          description:
            "NRNU Mephi (Institute of International Relations) – specialist",
        },
        {
          dates: "2015",
          format: "Job",
          description:
            "Adminstrator (State budgetary institution on culture 'Sovremennik')",
        },
      ],
      skills: {
        hardSkills: [
          "HTML5",
          "CSS3, SCSS",
          "JavaScript",
          "VueJS",
          "ReactJS",
        ],
        softSkills: [
          "Analytical mind",
          "Creative thinking",
          "Attentive towards details",
          "Conflicts' managment",
        ],
      },
      address: "Montenegro, Herceg Novi",
      contacts: ["+382(68)498-108"],
      webLinks: [
        { name: "My Github profile", link: "https://github.com/leokotman" },
        { name: "Facebook", link: "https://www.facebook.com/leokotman" },
        { name: "levkotman@gmail.com", link: "mailto:levkotman@gmail.com" },
      ],
      projects: [
        {
          link: "https://leokotman.github.io/local_lang_vue/",
          imgSrc: "project6.png",
          alt: "Serbian-English learning app",
          width: "1140",
          height: "600",
          projectText: "Serbian-English learning app"
        },
        {
          link: "https://leokotman.github.io/forum_lp/",
          imgSrc: "project7.png",
          alt: "Forum Registration landing page",
          width: "1140",
          height: "600",
          projectText: "Security Forum registration landing page"
        },
        {
          link: "https://leokotman.github.io/JesKotman-artist/",
          imgSrc: "project2.png",
          alt: "project2-artists-page",
          width: "1140",
          height: "600",
          projectText: "Artist's landing page"
        },
        {
          link: "https://leokotman.github.io/4-HTML5-CSS3/",
          imgSrc: "project1.png",
          alt: "project1-course-site",
          width: "1140",
          height: "480",
          projectText: "Website Landing page"
        },
        {
          link: "https://leokotman.github.io/rockstone-swiper/",
          imgSrc: "project3.png",
          alt: "project3-mobile-React-app",
          width: "",
          height: "350",
          projectText: "Messages & Current time – Swiper React mobile app"
        },
        {
          link: "https://leokotman.github.io/drum-kit/",
          imgSrc: "project4.png",
          alt: "project4-drumkit-vanillajs",
          width: "",
          height: "350",
          projectText: "Play drums on Vanilla JS"
        },
        {
          link: "https://leokotman.github.io/My-portfolio/",
          imgSrc: "project5.png",
          alt: "project5-first-portfolio",
          width: "",
          height: "350",
          projectText: "First Portfolio"
        },
      ]
    };
  },
  provide() {
    return {
      experience: this.experience,
      skills: this.skills,
      address: this.address,
      contacts: this.contacts,
      webLinks: this.webLinks,
      projects: this.projects,
    };
  },
};
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

main {
  max-width: 80%;
  margin: 0 auto;
  padding-bottom: 150px;
}
</style>
