<template>
    <div class="shorts-wrapper">
        <Header />

        <div class="carousel-container">
            <button class="arrow left" @click="scrollLeft">‹</button>

            <div class="carousel" ref="carousel">
                <div class="video-slide" v-for="(short, index) in shorts" :key="index">
                    <iframe
                        :src="short.url"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                        class="yt-iframe"
                    ></iframe>

                    <div class="video-title">
                        {{ short.name }}
                    </div>
                    </div>

            </div>

            <button class="arrow right" @click="scrollRight">›</button>
        </div>
    </div>
</template>

<script>
import Header from '../components/Header.vue';

export default {
    name: 'Shorts',
    components: { Header },
    data() {
        return {
            shorts: [
                { name: 'PORNSTAR', url: 'https://www.youtube.com/embed/2pu_CBBf94I?rel=0&modestbranding=1&controls=1' },
                { name: 'PROFY', url: 'https://www.youtube.com/embed/jdIs2dGggsw?rel=0&modestbranding=1&controls=1' },
                { name: 'ANOMALIE', url: 'https://www.youtube.com/embed/tN8dYUZs_TI?rel=0&modestbranding=1&controls=1' }
                ],
            showTitles: [], // tableau pour savoir quel titre afficher
        };
    },
    mounted() {
        // Au départ on affiche tous les titres
        this.showTitles = this.shorts.map(() => true);
    },
    methods: {
        scrollLeft() {
            this.$refs.carousel.scrollBy({ left: -window.innerWidth, behavior: 'smooth' });
        },
        scrollRight() {
            this.$refs.carousel.scrollBy({ left: window.innerWidth, behavior: 'smooth' });
        },
        hideTitle(index) {
            this.$set(this.showTitles, index, false);
        },
        showTitle(index) {
            this.$set(this.showTitles, index, true);
        },
        playVideo(index) {
            const video = this.$refs.videos[index];
            video.play();
            this.hideTitle(index);
        },
        togglePlayPause(index) {
            const video = this.$refs.videos[index];
            if (video.paused) {
                video.play();
                this.hideTitle(index);
            } else {
                video.pause();
                this.showTitle(index);
            }
        },
    },
};
</script>

<style scoped>
.shorts-wrapper {
    padding-top: 80px;
    height: calc(100vh - 80px);
    overflow: hidden;
    position: relative;
}

.carousel-container {
    display: flex;
    align-items: center;
    height: 100%;
    position: relative;
}

.carousel {
    display: flex;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
    height: 100%;
    flex: 1;
    scroll-behavior: smooth;
}

.video-slide {
    flex: 0 0 100%;
    height: 100%;
    scroll-snap-align: start;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}

video {
    width: 60%;
    min-width: 320px;
    min-height: 180px;
    height: auto;
    border-radius: 12px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    cursor: pointer;
}


.video-title {
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    color: #f7cee2;
    font-size: 2rem;
    font-family: 'Gloucester MT Extra Condensed', serif;
    text-shadow: 1px 1px 4px #000;
    cursor: pointer;
}
.yt-iframe {
  width: 60%;
  min-width: 320px;
  aspect-ratio: 16/9;
}


/* Arrows */
.arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 5rem;
    background: none;
    border: none;
    color: #ed87b3;
    cursor: pointer;
    z-index: 10;
    padding: 10px;
    user-select: none;
    transition: opacity 0.3s ease;
}

.arrow.left {
    left: 10px;
}

.arrow.right {
    right: 10px;
}

.arrow:hover {
    opacity: 0.7;
}
</style>
