<template>
    <div class="project-container">
        <div class="text-section">
            <h1>JARDIN</h1>
            <p>
                Jardin is a serie of photographs taken in a little garden.
            </p>
        </div>

        <div class="media-section">
            <div class="photo-grid">
                <img src="/projets/jardin/jardin1.jpg" alt="photo jardin 1" />
                <img src="/projets/jardin/jardin2.jpg" alt="photo jardin 2" />
                <img src="/projets/jardin/jardin3.jpg" alt="photo jardin 3" />
                <img src="/projets/jardin/jardin4.jpg" alt="photo jardin 4" />
                <img src="/projets/jardin/jardin5.jpg" alt="photo jardin 5" />
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

.media-section h2 {
    font-family: 'Gloucester MT Extra Condensed', serif;
    color: #f7cee2;
    font-weight: bold;
    padding-top: 20px;
}

.photo-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    padding-top: 60px;
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

  .text-section h1 {
    font-size: 2.5rem;
    text-align: center;
    padding-top: 40px;
  }

  .text-section p {
    font-size: 1rem;
    max-width: 100%;
    text-align: left;
  }

  .media-section {
    max-width: 100%;
    gap: 16px;
  }

  .photo-grid {
    grid-template-columns: 1fr;
    gap: 16px;
    padding-top: 30px;
  }

  .photo-grid img {
    width: 100%;
    height: auto;
  }
}

</style>
