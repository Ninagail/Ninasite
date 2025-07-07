<template>
    <div class="project-container">
        <div class="text-section">
            <h1>MAPPING WITH TOUCH DESIGNER</h1>
            <p>
                I’m currently working on a vjing touch designer session, in order to be able to controle everything with
                touch without using resolume.
            </p>
        </div>

        <div class="media-section">

            <div class="photo-grid">
                <img src="/projets/mapping/nuage2.png" alt="racine photo 1" />
                <img src="/projets/mapping/cercle.png" alt="racine photo 2" />

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
    color: #f7cee2;
}

.project-container {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    padding: 40px 80px;
    color: #f7cee2;
    justify-content: space-between;
}

.text-section {
    flex: 1;
    min-width: 300px;
    max-width: 400px;
}

.media-section {
    flex: 2;
    min-width: 300px;
    max-width: 800px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-top: 60px;
}

.media-section video {
    padding-top: 60px;
    width: 100%;

}

.photo-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
}

.photo-grid img {
    width: 100%;
    border-radius: 10px;
    object-fit: cover;
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
  }

  .photo-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .photo-grid img {
    width: 100%;
    height: auto;
  }
}

</style>
