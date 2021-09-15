<template>
  <section>
    <ul>
      <li>
        <v-card>
          <a
            href="https://leokotman.github.io/monster-game/"
            target="_blank"
            title="Beat the monster"
          >
            <img
              src="../../assets/img/game-monster.png"
              alt="monster-game"
              height="400"
            />
          </a>
        </v-card>
      </li>
      <li>
        <v-card>
          <a
            href="https://leokotman.github.io/doodle-jump/"
            target="_blank"
            title="Doodle jump"
          >
            <img
              src="../../assets/img/game-jump.png"
              alt="jump-game"
              height="400"
            />
          </a>
        </v-card>
      </li>
    </ul>
  </section>
</template>

<style scoped>
ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 2rem;
}
ul li {
  list-style-type: none;
}
</style>
