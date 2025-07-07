<template>
    <div class="project-container">
        <div class="text-section">
            <h1>RACINES</h1>
            <p>

                Racine is a project in progress that blends multiple media. Composed of audiovisual installations,
                photographic series, and performances, it explores relationships and boundaries through trees. By
                placing
                trees and nature at the center, it highlights the absurdities of this world.
            </p>
        </div>

        <div class="media-section">
          <iframe
                class="yt-iframe"
                src="https://www.youtube.com/embed/OE9VqvAe_cA?rel=0&modestbranding=1&controls=1"
                title="Feu"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
          ></iframe>

            <h2>Feu</h2>
            <div class="photo-grid">
                <img src="/projets/racines/fog.png" alt="racine photo 1" />
                <img src="/projets/racines/soleil.png" alt="racine photo 2" />
                <img src="/projets/racines/fleurbleu.png" alt="racine photo 3" />
                <img src="/projets/racines/fleurvert.png" alt="racine photo 4" />

                <!-- Ajoute autant d'images que tu veux ici -->
            </div>
            <h2>La nuit les arbres dansent</h2>
            <div class="photo-grid">
                <img src="/projets/racines/danse.jpg" alt="racine photo 6" />
                <img src="/projets/racines/arbreamoureux.jpg" alt="racine photo 7" />
                <img src="/projets/racines/guirlande.jpg" alt="racine photo 5" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.project-container {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    padding: 40px 80px;
    color: #f7cee2;
    justify-content: space-between;
    font: helvetica, sans-serif;
}

.text-section h1 {
    font-family: 'Gloucester MT Extra Condensed', serif;
    color: #ed87b3;
    padding-top: 100px;

}


.text-section p {
    flex: 1;
    min-width: 300px;
    max-width: 400px;
    font-size: medium;
    padding-top: 20px;
}

.media-section {
    flex: 2;
    min-width: 300px;
    max-width: 800px;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.media-section video {
    padding-top: 60px;
    width: 100%;

}

.media-section h2 {
    font-family: 'Gloucester MT Extra Condensed', serif;
    color: #f7cee2;
    font-style: bold;

}

.photo-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    padding-top: 20px;
}

.photo-grid img {
    width: 100%;
    border-radius: 10px;
    object-fit: cover;
}
.yt-iframe {
  width: 100%;
  aspect-ratio: 16 / 9;
  margin-top: 60px;
}


@media screen and (max-width: 768px) {
  .project-container {
    flex-direction: column;
    padding: 40px 20px;
    gap: 20px;
  }

  .text-section h1 {
    font-size: 2.5rem;
    padding-top: 60px;
    text-align: center;
  }

  .text-section p {
    max-width: 100%;
    font-size: 1rem;
    text-align: left;
  }

  .media-section {
    max-width: 100%;
    padding-bottom: 40px;
  }

  .media-section video {
    width: 100%;
    height: auto;
  }

  .media-section h2 {
    font-size: 1.8rem;
    text-align: center;
  }

  .photo-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .photo-grid img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
}

</style>
