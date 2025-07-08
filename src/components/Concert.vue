<template>
    <div class="project-container">
        <!-- Texte à gauche -->
        <div class="text-section">
            <h1>CONCERT</h1>
            <p>
                Those fotographs where taken during night at la station gare des mines for collectiv radio Flouka and
                DLJL.
            </p>
        </div>

        <!-- Galerie à droite -->
        <div class="media-section">
            <div class="photo-columns">
                <div class="column" v-for="(col, colIndex) in 2" :key="colIndex">
                    <img v-for="(img, index) in getColumnImages(colIndex)" :key="index" :src="img"
                        :alt="'photo concert ' + index" @click="openLightbox(globalIndex(colIndex, index))" />
                </div>
            </div>
        </div>

        <!-- Lightbox -->
        <div v-if="lightboxOpen" class="lightbox" @click.self="closeLightbox">
            <button class="nav prev" @click.stop="prevImage">&#10094;</button>
            <img :src="images[currentIndex]" class="lightbox-image" />
            <button class="nav next" @click.stop="nextImage">&#10095;</button>
            <button class="close-btn" @click="closeLightbox">&times;</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Concert',
    data() {
        return {
            images: [
                '/Ninasite/projets/concert/concert1.jpeg',
                '/Ninasite/projets/concert/concert9.jpeg',

                '/Ninasite/projets/concert/concert3.jpeg',
                '/Ninasite/projets/concert/concert4.jpeg',
                '/Ninasite/projets/concert/concert8.jpeg',
                '/Ninasite/projets/concert/concert6.jpeg',
                '/Ninasite/projets/concert/concert7.jpeg',
                '/Ninasite/projets/concert/concert5.jpg',

                '/Ninasite/projets/concert/concert2.jpeg',
            ],
            lightboxOpen: false,
            currentIndex: 0
        };
    },
    methods: {
        getColumnImages(colIndex) {
            return this.images.filter((_, i) => i % 2 === colIndex);
        },
        globalIndex(col, index) {
            // Convert column index back to global image index
            return col + index * 2;
        },
        openLightbox(index) {
            this.currentIndex = index;
            this.lightboxOpen = true;
        },
        closeLightbox() {
            this.lightboxOpen = false;
        },
        nextImage() {
            this.currentIndex = (this.currentIndex + 1) % this.images.length;
        },
        prevImage() {
            this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
        }
    }
};
</script>

<style scoped>
.project-container {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    padding: 40px 80px;
    color: #f7cee2;
    justify-content: space-between;
    font-family: Helvetica, sans-serif;
}

/* Texte à gauche */
.text-section {
    flex: 1;
    min-width: 300px;
    max-width: 400px;

}

.text-section h1 {
    font-family: 'Gloucester MT Extra Condensed', serif;
    color: #ed87b3;
    padding-top: 100px;
}

.text-section p {
    font-size: medium;
    padding-top: 20px;
}

/* Galerie à droite */
.media-section {
    flex: 2;
    min-width: 300px;
    max-width: 1000px;
    max-height: 400px;
    padding-top: 60px;
}

.photo-columns {
    display: flex;
    gap: 0;
}

.column {
    flex: 1;
    display: flex;
    flex-direction: column;
}

.column img {
    width: 100%;
    display: block;
    border-radius: 0;
    margin: 0;
    padding: 0;
    object-fit: cover;
    cursor: pointer;
}

/* Lightbox */
.lightbox {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(10, 10, 10, 0.95);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
}

.lightbox-image {
    max-width: 90%;
    max-height: 90%;
    border-radius: 8px;
}

.nav {
    position: absolute;
    top: 50%;
    font-size: 3rem;
    color: #ed87b3;
    background: none;
    border: none;
    cursor: pointer;
    user-select: none;
    z-index: 1001;
}

.prev {
    left: 20px;
}

.next {
    right: 20px;
}

.close-btn {
    position: absolute;
    top: 20px;
    right: 30px;
    font-size: 3rem;
    background: none;
    border: none;
    color: #ed87b3;
    cursor: pointer;
}
@media screen and (max-width: 768px) {
  .project-container {
    flex-direction: column;
    padding: 40px 20px;
    gap: 20px;
  }

  .text-section {
    max-width: 100%;
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

  .media-section {
    max-width: 100%;
    padding-top: 30px;
    max-height: none;
  }

  .photo-columns {
    flex-direction: column;
    gap: 16px;
  }

  .column {
    width: 100%;
  }

  .column img {
    width: 100%;
    height: auto;
  }

  .lightbox-image {
    max-width: 95%;
    max-height: 80vh;
  }

  .nav {
    font-size: 2.5rem;
  }

  .close-btn {
    font-size: 2.5rem;
  }
}

</style>
