<template>
    <div class="project-container">
        <!-- Texte et vidéo -->
        <div class="text-section">
            <h1>CYBERPUNK</h1>
            <p>
                This project is a series of videos created for VJing in a cyberpunk universe. We've made those visuals
                with Aurelien Droissard for a party of a french collectif based in Paris.

            </p>
           <iframe
  class="yt-iframe"
  src="https://www.youtube.com/embed/8EPO_r9N8Y4?rel=0&modestbranding=1&controls=1"
  title="Cyberpunk VJing"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>




        </div>

        <!-- Galerie -->
        <div class="media-gallery">
            <img v-for="(img, i) in images" :key="i" :src="img" :alt="'cyberpunk visuel ' + (i + 1)"
                @click="openLightbox(i)" />
        </div>

        <!-- Lightbox fullscreen -->
        <div class="lightbox" v-if="lightboxOpen" @click.self="closeLightbox">
            <span class="close-btn" @click="closeLightbox">×</span>
            <img :src="images[currentIndex]" alt="Fullscreen image" />
            <button class="nav left" @click.stop="prevImage">‹</button>
            <button class="nav right" @click.stop="nextImage">›</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Cyberpunk',
    data() {
        return {
            lightboxOpen: false,
            currentIndex: 0,
            images: [
                '/projets/cyberpunk/cyberpunk1.png',
                '/projets/cyberpunk/cyberpunk2.png',
                '/projets/cyberpunk/cyberpunk3.png',
                '/projets/cyberpunk/cyberpunk4.png',
                '/projets/cyberpunk/cyberpunk5.png'
            ]
        };
    },
    methods: {
        openLightbox(index) {
            this.currentIndex = index;
            this.lightboxOpen = true;
        },
        closeLightbox() {
            this.lightboxOpen = false;
        },
        prevImage() {
            this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
        },
        nextImage() {
            this.currentIndex = (this.currentIndex + 1) % this.images.length;
        }
    }
};
</script>

<style scoped>
/* Structure principale */
.project-container {
    display: flex;
    flex-wrap: wrap-reverse;
    gap: 40px;
    padding: 40px 60px;
    color: #f7cee2;
    justify-content: space-between;
}

.text-section {
    flex: 1;
    min-width: 300px;
    max-width: 700px;
    display: flex;
    flex-direction: column;
    color: #f7cee2;
}

.text-section h1 {
    font-family: 'Gloucester MT Extra Condensed', serif;
    color: #ed87b3;
    padding-top: 60px;
}

.text-section p {
    font-size: medium;
    padding-top: 20px;
}



.media-gallery {
    flex: 2;
    column-count: 2;
    column-gap: 20px;
    max-width: 600px;
    padding-top: 60px;
}

.media-gallery img {
    width: 100%;
    margin-bottom: 20px;
    border-radius: 10px;
    object-fit: cover;
    display: block;
    cursor: pointer;
    transition: transform 0.2s;
}

.media-gallery img:hover {
    transform: scale(1.02);
}

.yt-iframe {
 width: 100%;
  aspect-ratio: 16 / 9;
  margin-top: 60px;
}


/* Lightbox plein écran */
.lightbox {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.479);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    overflow: hidden;
}

.lightbox img {
    max-width: 90%;
    max-height: 90%;
    border-radius: 10px;
}

.close-btn {
    position: absolute;
    top: 20px;
    right: 30px;
    font-size: 2rem;
    color: #ed87b3;
    cursor: pointer;
}

.nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 3rem;
    color: #ed87b3;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0 20px;
}

.nav.left {
    left: 20px;
}

.nav.right {
    right: 20px;
}
@media screen and (max-width: 768px) {
  .project-container {
    flex-direction: column;
    padding: 40px 20px;
    gap: 20px;
  }

  .text-section h1 {
    font-size: 2.5rem;
    text-align: center;
    padding-top: 40px;
  }

  .text-section p {
    font-size: 1rem;
    text-align: left;
  }

  .text-section video {
    margin-top: 20px;
    width: 100%;
    height: auto;
  }

  .media-gallery {
    column-count: 1;
    column-gap: 0;
    max-width: 100%;
    padding-top: 20px;
  }

  .media-gallery img {
    width: 100%;
    margin-bottom: 16px;
  }

  .lightbox img {
    max-width: 95%;
    max-height: 80vh;
  }

  .nav {
    font-size: 2.5rem;
    padding: 0 15px;
  }

  .close-btn {
    font-size: 2rem;
    top: 10px;
    right: 20px;
  }
}

</style>
