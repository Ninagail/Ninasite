import { createRouter, createWebHistory } from 'vue-router';



import HomePage from './pages/HomePage.vue';
import ProjetsPage from './pages/ProjetsPage.vue';
import ShortsPage from './pages/ShortsPage.vue';
import AboutPage from './pages/AboutPage.vue';
import VisualsPage from './pages/VisualsPage.vue';
import CyberpunkPage from './pages/CyberpunkPage.vue';
import JardinPage from './pages/JardinPage.vue';
import MappingPage from './pages/MappingPage.vue';
import MemoirePage from './pages/MemoirePage.vue';
import MontagePage from './pages/MontagePage.vue';
import RacinePage from './pages/RacinePage.vue';
import TitlePage from './pages/TitlePage.vue';
import ConcertPage from './pages/ConcertPage.vue';


const routes = [
    {
        path: '/',
        component: HomePage,
        name : 'HomePage'
    },
    {
        path: '/Projets',
        component: ProjetsPage,
        name : 'ProjetsPage'
    },
    {
        path: '/Shorts',
        component: ShortsPage,
        name : 'ShortsPage'
    },
    {
        path: '/About',
        component: AboutPage,
        name : 'AboutPage'
    },
    {
        path: '/Visuals',
        component: VisualsPage,
        name : 'VisualsPage'
    },
     {
        path: '/Cyberpunk',
        component: CyberpunkPage,
        name : 'CyberpunkPage'
    },
    { path: '/Jardin',
        component: JardinPage,
        name : 'JardinPage'
    },
    { path: '/Mapping',
        component: MappingPage,
        name : 'MappingPage'
    },  
    {
        path: '/Memoire',
        component: MemoirePage,
        name : 'MemoirePage'
    },
    {
        path: '/Montage',
        component: MontagePage,
        name : 'MontagePage'
    },
    {
        path: '/Racines',
        component: RacinePage,
        name : 'RacinePage'
    },
    {
        path : '/Title',
        component: TitlePage,
        name : 'TitlePage'
    },
    {
        path : '/Concert',
        component: ConcertPage,
        name : 'ConcertPage'
    },
    
    
];

const router = createRouter({
    history: createWebHistory('/Ninasite/'), // ✅ indique le sous-répertoire
    routes
});


export default router;
