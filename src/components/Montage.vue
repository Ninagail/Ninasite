<template>
    <div class="project-container">
        <div class="text-section">
            <h1>MONTAGE PHOTO</h1>
            <p>
                This editing is made from the photographs of James Marcus Haney in order to highlight his work.
                
            </p>
        </div>
        <div class="video-section">
           <iframe
            class="yt-iframe"
            src="https://www.youtube.com/embed/PutBx3KZS8A?rel=0&modestbranding=1&controls=1"
            title="Montage Photo"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>

        </div>
    </div>
</template>

<script>
export default {
    name: 'MontagePhoto'
}
</script>

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



.video-section {
    flex: 2;
    min-width: 300px;
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-top: 60px;
}



.yt-iframe {
  width: 100%;
  aspect-ratio: 16 / 9;
  
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

  .video-section {
    max-width: 100%;
    padding-top: 20px;
  }

  video {
    width: 100%;
    height: auto;
  }
}

</style>
