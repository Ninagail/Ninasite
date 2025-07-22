<template>
    <div class="about-container">
        <div class="about-text">
            <p>
                Hey, I'm Nina, nice to meet you! I'm currently working on an installation made of photographs, videos,
                and sound.<br>
                <br>
                I studied theater, then did a BTS audiovisuel in Image where I learned the technical side of filmmaking.
                <br>
                I then worked in a structure for refugees, organizing art workshops and making an exhibition with them.
                <br>
                Now I'm finishing a master's at IMAC, where I've learned about digital art, web design, programming, 3D,
                and installation.
            </p>

            <div class="cv-links">
                <a href="/Ninasite/about/cvNina.pdf" download class="cv-button">Telecharger mon CV</a>
                <a href="/Ninasite/about/resumeNina.pdf" download class="cv-button">Download my resume</a>
            </div>

        </div>
        <div class="about-image">
            <img src="/Ninasite/about/nina.png" alt="Nina Gaillard" />
            <div class="contact">
                <p>
                    <a href="mailto:gailnina@orange.fr">gailnina@orange.fr</a> <br>
                    <a href="https://www.instagram.com/vjninadj/" target="_blank" rel="noopener noreferrer"
                        class="instagram-link" aria-label="Instagram">@vjninadj</a>
                </p>
            </div>
        </div>


    </div>
</template>

<script>
export default {
    name: "AboutPage",
};
</script>

<style scoped>
.about-container {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: 100px 120px;
    height: 100vh;
    box-sizing: border-box;
    gap: 60px;
    position: relative;
}

.about-text {
    max-width: 400px;
    color: #f7cee2;
    font-family: 'Gloucester MT Extra Condensed', serif;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    margin-left: -600px;
    margin-top: 75px;
    /* pousse le texte à gauche */
}

.about-text p {
    font-size: 1.35rem;
    line-height: 1.8;
    margin-bottom: 30px;
}

.cv-links {
    display: flex;
    gap: 20px;
    justify-content: flex-start;
}

.cv-button {
    background-color: #f7cee2;
    color: #ed87b3;
    padding: 10px 20px;
    border-radius: 20px;
    font-weight: bold;
    text-decoration: none;
    transition: background-color 0.3s, color 0.3s;
}

.cv-button:hover {
    background-color: #eebbd5;
    color: #ed87b3;
}

.about-image {
    margin-left: 100px;
    /* pousse l'image à gauche */
    margin-top: -10px;
    /* remonte l'image */
}

.about-image img {
    width: 230px;
    height: auto;
    border-radius: 10px;
    object-fit: cover;
}

.about-image-contact {
    display: flex;
    align-items: center;
    gap: 20px;
    /* espace entre image et contact */
    margin-left: -100px;
    /* garde ton décalage vers la gauche sur l'image + contact */
    margin-top: -300px;
    /* comme avant pour remonter */
}

.about-image-contact img {
    width: 500px;
    height: auto;
    border-radius: 10px;
    object-fit: cover;
}

.contact p {
    color: #f7cee2;
    /* rose pâle */
    font-family: 'Gloucester MT Extra Condensed', serif;
    font-size: 1.3rem;
    margin: 0;
}

.contact a {
    color: #f7cee2;
    /* rose foncé */
    text-decoration: none;
}

.contact a:hover {
    color: #ed87b3;

}

@media screen and (max-width: 1024px) {
    .about-container {
        flex-direction: column;
        align-items: center;
        padding: 60px 40px;
        height: auto;
        gap: 40px;
    }

    .about-text {
        margin-left: 0;
        margin-top: 0;
        text-align: center;
        align-items: center;
    }

    .cv-links {
        justify-content: center;
        flex-wrap: wrap;
    }

    .about-image {
        margin-left: 0;
        margin-top: 0;
    }

    .about-image-contact {
        flex-direction: column;
        margin-left: 0;
        margin-top: 0;
        gap: 10px;
    }
}

@media screen and (max-width: 600px) {
    .about-container {
        padding: 40px 20px;
    }

    .about-text p {
        padding-top: 40px;
        font-size: 1.1rem;
        line-height: 1.6;
    }

    .cv-button {
        padding: 8px 16px;
        font-size: 0.9rem;
    }

    .about-image img {
        width: 180px;
    }

    .contact p {
        font-size: 1.1rem;
        text-align: center;
    }

    .contact a {
        display: block;
        margin-top: 5px;
    }
}
</style>