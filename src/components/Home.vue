<template>
  <div v-if="$route.path === '/'" class="video-container">
    <video autoplay muted loop playsinline>
      <source src="https://archive.org/download/filmintrosite/filmintrosite.mp4" type="video/mp4" />
    </video>

    <div class="landing-name">
      <h1>NINA GAILLARD</h1>
    </div>

    <div class="cta-button">
      <button @click="goToProjects">MY PROJECTS</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    goToProjects() {
      this.$router.push('/Projets');
    }
  },
  mounted() {
    document.body.style.overflow = 'hidden'; // empêche le scroll
  },
  beforeUnmount() {
    document.body.style.overflow = 'auto'; // réactive le scroll sur les autres pages
  }
};
</script>

<style scoped>
.video-container {
  position: relative;
  height: 100vh;
  overflow: hidden;
}

.video-container video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.landing-name {
  position: absolute;
  top: 30px;
  left: 40px;
  z-index: 2;
}

.landing-name h1 {
  font-family: 'Gloucester MT Extra Condensed', serif;
  font-size: 3rem;
  color: #f7cee2;
}

/* Bouton "My Projects" */
.cta-button {
  position: absolute;
  bottom: 60px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
}

.cta-button button {
  background-color: transparent;
  color: #f7cee2;
  font-family: 'Gloucester MT Extra Condensed', serif;
  font-size: 2.5rem;
  padding: 12px 30px;
  border: none;

  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s;
}

.cta-button button:hover {
  background-color: transparent;
  color: #ed87b3;
  transform: scale(1.05);
}
</style>