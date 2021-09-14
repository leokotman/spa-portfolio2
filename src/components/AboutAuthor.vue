<template>
  <main>
    <v-card elevation="2" outlined shaped class="about_author">
      <h1>Lev Kotman</h1>
      <h3 class="card-heading">Front-end web-developer</h3>
      <p class="paragraph">
        I started programming in 2020, during worldwide crisis. I have come to
        development after the long journey to myself. The information here is
        updated according to the new skills acquired.
      </p>
    </v-card>
    <section class="exp_skills">
      <v-card width="50%">
        <v-list dense>
          <v-subheader>
            <h2 class="content-heading">Experience</h2>
          </v-subheader>
          <v-list-item-group>
            <v-list-item
              v-for="exp in experience"
              :key="exp.dates"
              class="exp_item"
            >
              <v-list-item-content>{{ exp.dates }}</v-list-item-content>
              <v-list-item-content>
                <strong>{{ exp.format }}</strong>
                {{ exp.description }}
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
      <v-card width="50%">
        <v-list class="skills_list">
          <v-list-item-group>
            <v-subheader> 
              <h2 class="content-heading">Hard Skills</h2>
            </v-subheader>
            <v-list-item class="skills_item">
              <v-list-item-content
                v-for="hard in skills.hardSkills"
                :key="hard.index"
              >
                {{ hard }}
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
          <v-list-item-group>
            <v-subheader> 
              <h2 class="content-heading">Soft Skills</h2>
            </v-subheader>
            <v-list-item class="skills_item">
              <v-list-item-content
                v-for="soft in skills.softSkills"
                :key="soft.index"
              >
                {{ soft }}
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
    </section>
  </main>
</template>

<script>
export default {
  inject: ["experience", "skills"],
};
</script>

<style>
.v-card.about_author {
  padding: 2rem;
}
.v-card h1,
.v-card h3 {
  text-align: center;
}

.card-heading {
  text-align: left;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: 0.05em;
  color: #1f3f68;
  margin-bottom: 14px;
}
.paragraph {
  font-size: 16px;
  line-height: 26px;
  letter-spacing: 0.05em;
  max-width: 60%;
  margin: 0 auto;
  color: #1f3f68;
  opacity: 0.6;
}
.content-heading {
  text-align: center;
  font-weight: 300;
  font-size: 1.5rem;
  line-height: 3rem;
  letter-spacing: 0.05em;
  color: #000000;
  width: 100%;
}

.exp_skills {
  display: flex;
  flex-wrap: wrap;
}
.v-list.skills_list {
  display: flex;
}

.skills_list .v-list-item-group {
  width: 50%;
}

.exp_item .v-list-item__content:first-of-type {
  max-width: 30%;
}
.v-list-item.skills_item {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
}


</style>
