<template>
    <div class="project-container">
        <div class="text-section">
            <h1>MEMOIRE</h1>
            <p>
                The installation is based on texts we’ve wrote about a woman’s story, Claude.<br />
                There are two screens for two points of view. One is Claude’s point of view, which tells the real story,
                and the other is from her granddaughter, who didn’t know her well. After her death, she finds photos and
                imagines what Claude's life could have been. <br />It’s more a performance since we are editing the
                image and sound on live in order to recreate a sort of conversation between the two women.
            </p>
        </div>

        <div class="media-section">
            
          <iframe
            class="yt-iframe"
            src="https://www.youtube.com/embed/TBBH3pbmc2E?rel=0&modestbranding=1&controls=1"
            title="MEMOIRE"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>



            <div class="photo-grid">
                <img src="/projets/memoire/mamie.jpg" alt="racine photo 1" />
                <img src="/projets/memoire/poupees.jpg" alt="racine photo 2" />
                <img src="/projets/memoire/famille.jpg" alt="racine photo 3" />

                <!-- Ajoute autant d'images que tu veux ici -->
            </div>

        </div>
    </div>
</template>



<style scoped>
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

.project-container {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    padding: 40px 80px;
    color: #f7cee2;
    justify-content: space-between;
    font: helvetica, sans-serif;
}

/* .text-section {
    flex: 1;
    min-width: 300px;
    max-width: 400px;
} */

.media-section {
    flex: 2;
    min-width: 300px;
    max-width: 800px;
    display: flex;
    flex-direction: column;
    gap: 20px;
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
