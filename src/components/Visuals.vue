<template>
    <div class="visuals-gallery">
        <div class="gallery-grid">
            <div v-for="(image, index) in images" :key="index" class="gallery-item">
                <img :src="image.src" :alt="image.alt" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Visuals",
    data() {
        return {
            images: [
                { src: "/galerie/image1.png", alt: "Image 1" },
                { src: "/galerie/image2.png", alt: "Image 2" },
                { src: "/galerie/image3.png", alt: "Image 3" },
                // Ajoute autant d’images que tu veux ici
            ]
        };
    }
};
</script>

<style>
.visuals-gallery {
    padding: 60px 40px;
    padding-top: 80px;

    min-height: 100vh;
}

.gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 2rem;
    justify-items: center;
}

.gallery-item img {
    width: 100%;
    max-width: 1280px;
    height: auto;
    object-fit: cover;
    border-radius: 10px;
    transition: transform 0.3s ease, filter 0.3s ease;
    filter: grayscale(20%);
    cursor: pointer;
}

.gallery-item img:hover {
    transform: scale(1.02);
    filter: grayscale(0%);
}
</style>