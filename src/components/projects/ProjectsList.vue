<template>
  <section class="our-project container" id="my_projects">
    <h2 class="content-heading">My finished projects</h2>
    <p class="paragraph paragraph_project">
      You can find here my recent projects (screenshots are real projects &
      clickable links).
    </p>
    <div class="project_item" v-for="project in projects" :key="project.alt">
      <a :href="project.link" target="_blank">
        <img
          class="project_img"
          :src="require(`@/assets/img/${project.imgSrc}`)"
          :alt="project.alt"
          :width="project.width"
          :height="project.height"
        />
        <p class="project_text_small">{{ project.projectText }}</p>
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProjectsList",
  inject: ["projects"],
};
</script>

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
  color: #fff;
  text-shadow: 0 0 7px #10395e;
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
