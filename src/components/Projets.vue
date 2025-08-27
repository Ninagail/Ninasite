<template>
    <div class="projets-wrapper">
        <Header />

        <div class="gallery">
            <router-link v-for="(project, index) in projects" :key="index" :to="'/' + project.name"
                class="project-card">
                <img :src="project.cover" :alt="project.name" />
                <h3>{{ project.name }}</h3>
            </router-link>

        </div>
    </div>
</template>

<script>
import Header from '../components/Header.vue';

export default {
    name: 'Projets',
    components: { Header },
    data() {
        return {
            projects: [
                { name: 'Racines', cover: '/Ninasite/projets/soleil.jpg' },

                { name: 'Title', cover: '/Ninasite/projets/title.jpg' },
                { name: 'Montage', cover: '/Ninasite/projets/photo.jpg' },
                { name: 'Memoire', cover: '/Ninasite/projets/memoire.jpg' },
                { name: 'Cyberpunk', cover: '/Ninasite/projets/cyberpunk.jpg' },
                { name: 'Jardin', cover: '/Ninasite/projets/jardin.jpg' },

                { name: 'Mapping', cover: '/Ninasite/projets/maping.jpg' },
                { name: 'Concert', cover: '/Ninasite/projets/concert.jpg' },





                // ajoute d'autres projets ici
            ]
        }
    }
};
</script>

<style scoped>
.projets-wrapper {
    padding-top: 80px;
    /* pour le header fixe */
    max-width: 1400px;
    margin: 0 auto;
    padding-left: 60px;
    padding-right: 60px;
}

.gallery {
    column-count: 3;
    column-gap: 20px;
    padding-top: 20px;
}

.project-card {
    break-inside: avoid;
    margin-bottom: 20px;
    display: inline-block;
    width: 100%;
    text-decoration: none;
}


.project-card img {
    max-width: 400px;
    max-height: 450px;
    /* important pour garder les proportions naturelles */
    border-radius: 8px;
    object-fit: contain;
    justify-items: left;
    /* ne déforme pas l'image */
    box-shadow: none;
    /* enlève ombre / contour */
    position: relative;
    z-index: 0;

}

.project-card h3 {
    margin-top: 10px;
    font-family: 'Gloucester MT Extra Condensed', serif;
    color: #f7cee2;
}

/* responsive  */
@media screen and (max-width: 1300px) {
    .gallery {
        column-count: 2;
        column-gap: 16px;
    }

    .projets-wrapper {
        padding-left: 30px;
        padding-right: 30px;
    }
}

@media screen and (max-width: 800px) {
    .gallery {
        column-count: 1;
        column-gap: 0;
    }

    .projets-wrapper {
        padding-left: 20px;
        padding-right: 20px;
    }

    .project-card img {
        max-height: 300px;
        max-width: 400px;
        object-fit: cover;
    }

    .project-card h3 {
        font-size: 1.5rem;
    }
    


}
</style>
