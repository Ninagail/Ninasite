<template>
    <div class="project-container">
        <div class="text-section">
            <h1>TITLE SEQUENCE</h1>

            <p>
                This Title sequence is made about a fictional movie imagined with Lilou Bernard. We wrote the script and
                then shot and edited the footage, thinking about how to present the different person that worked on the
                fictional movie. 

            </p>
        </div>
       <div class="video-section">
  <iframe
    class="yt-iframe"
    src="https://www.youtube.com/embed/2EvVFT8J_Wo?si=flLKnMm0ZjWM3pJY"
    title="TITLE SEQUENCE"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  
  ></iframe>
</div>

    </div>
</template>

<script>
export default {
    name: 'TitleSequence'
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
    
}

.project-container {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    padding: 40px 80px;
    color: white;
    justify-content: space-between;
    color: #f7cee2;
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

  .video-section video {
    width: 100%;
    height: auto;
  }
}

</style>
