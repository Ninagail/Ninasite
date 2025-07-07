<template>
    <nav :class="['nav-background', { compact: isCompact }]">
        <div class="nav-left">
            <router-link class="home-button" to="/">NINA GAILLARD</router-link>
        </div>

        <!-- Hamburger menu (mobile only) -->
        <div class="hamburger" @click="toggleMenu">
            <span></span>
            <span></span>
            <span></span>
        </div>

        <!-- Navigation links -->
        <div v-if="!isHome" :class="['nav-buttons', { open: isMenuOpen }]">
            <router-link class="button" to="/Projets"
                :class="{ active: $route.path === '/Projets' }">PROJECTS</router-link>
            <router-link class="button" to="/Shorts" :class="{ active: $route.path === '/Shorts' }">SHORTS</router-link>
            <router-link class="button" to="/About" :class="{ active: $route.path === '/About' }">ABOUT</router-link>
        </div>
    </nav>
</template>


<script>
export default {
    name: 'Header',
    data() {
        return {
            isMenuOpen: false
        };
    },
    computed: {
        isHome() {
            return this.$route.path === '/';
        },
        isCompact() {
            return this.$route.path !== '/';
        }
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        }
    }
};

</script>

<style>
@font-face {
    font-family: 'Gloucester MT Extra Condensed';
    src: url('/font/gloucester-mt-extra-condensed.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}

.nav-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 80px;
    z-index: 1000;
    /* plus haut que tout le reste */
    /* background: url('/galerie/fondheader.png');*/
    backdrop-filter: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 40px;
}


.nav-left {
    flex-shrink: 0;
}

.home-button {
    font-family: 'Gloucester MT Extra Condensed', serif;
    font-size: 3rem;
    color: #f7cee2;
    text-decoration: none;
    transition: color 0.3s ease;
}

.home-button:hover {
    color: #ed87b3;
}

.nav-buttons {
    display: flex;
    gap: 4rem;
}

.button {
    font-family: 'Gloucester MT Extra Condensed', serif;
    font-size: 2rem;
    color: #f7cee2;
    text-decoration: none;
    transition: color 0.3s ease;
}

.button:hover,
.button.active {
    color: #ed87b3;
}

/* Quand on n'est PAS sur la page d'accueil => compact */
.nav-background.compact .home-button {
    font-size: 2rem;
}

.nav-background.compact .button {
    font-size: 1.2rem;
    letter-spacing: 1px;
}

/* Mobile */
.hamburger {
    display: none;
    flex-direction: column;
    gap: 5px;
    cursor: pointer;
}

.hamburger span {
    width: 25px;
    height: 3px;
    background-color: #f7cee2;
    border-radius: 2px;
    transition: 0.3s;
}

@media screen and (max-width: 768px) {
    .nav-background {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1000;
    }

    .hamburger {
        display: flex;
        flex-direction: column;
        gap: 5px;
        cursor: pointer;
    }

    .hamburger span {
        width: 25px;
        height: 3px;
        background-color: #f7cee2;
        border-radius: 2px;
        transition: 0.3s;
    }

    .nav-buttons {
        position: absolute;
        top: 80px;
        /* descend en-dessous du header */
        right: 0;
        width: 80px;
        background-color: rgba(247, 206, 226, 0.6);
        display: none;
        flex-direction: column;
        align-items: center;
        gap: 1.5rem;
        padding: 20px 0;
        z-index: 999;
    }

    .nav-buttons.open {
        display: flex;
    }

    .home-button {
        font-size: 2rem;
    }

    .button {
        font-size: 1.5rem;
        color: #f7cee2;
    }
}
</style>
