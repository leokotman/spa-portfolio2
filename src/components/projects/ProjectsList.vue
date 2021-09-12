<template>
  <section class="our-project container" id="my_projects">
    <h2 class="content-heading">My finished projects</h2>
    <p class="paragraph paragraph_project">
      You can find here my recent projects (screenshots are real projects &
      clickable links).
    </p>
    <div class="project_item">
      <a href="https://leokotman.github.io/4-HTML5-CSS3/" target="_blank"
        ><img
          class="project_img"
          src="../../assets/img/project1.png"
          alt="project1-course-site"
          width="1140"
          height="480"
      /></a>
    </div>
    <div class="project_item">
      <a href="https://leokotman.github.io/JesKotman-artist/" target="_blank">
        <img
          class="project_img"
          src="../../assets/img/project2.png"
          alt="project2-artists-page"
          width="1140"
          height="600"
        />
        <p class="project_text_small">Artist's landing page</p>
      </a>
    </div>
    <div class="project_item">
      <a href="https://leokotman.github.io/rockstone-swiper/" target="_blank">
        <img
          class="project_img"
          src="../../assets/img/project3.png"
          alt="project3-mobile-React-app"
          height="350"
        />
        <p class="project_text_small">
          Messages & Current time – Swiper React mobile app
        </p>
      </a>
    </div>
    <div class="project_item">
      <a href="https://leokotman.github.io/drum-kit/" target="_blank">
        <img
          class="project_img"
          src="../../assets/img/project4.png"
          alt="project4-drumkit-vanillajs"
          height="350"
        />
        <p class="project_text_small">Play drums on Vanilla JS</p>
      </a>
    </div>
    <div class="project_item">
      <a href="https://leokotman.github.io/My-portfolio/" target="_blank">
        <img
          class="project_img"
          src="../../assets/img/project5.png"
          alt="project5-first-portfolio"
          height="350"
        />
        <p class="project_text_small">First Portfolio</p>
      </a>
    </div>
  </section>
</template>

<style scoped>
.our-project {
  max-width: 1140px;
  width: 80%;
  margin: auto;
  padding: 64px 0 64px;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.project_text_small {
  position: absolute;
  font-size: 28px;
  line-height: 46px;
  letter-spacing: 0.05em;
  color: #093964;
  top: 10%;
  left: 20%;
  display: none;
}

.project_img {
  object-fit: contain;
  border: 1px solid #5a98d0;
  border-radius: 10px;
  max-width: 100%;
}

.project_item:hover {
  transform: scale(1.02);
}

.project_item:hover .project_text_small {
  display: inline-block;
}
</style>
