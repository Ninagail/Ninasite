<template>
    <Header />
    <Projets />

</template>

<script>
import Projets from '../components/Projets.vue';
import Header from '../components/Header.vue';

export default {
    name: "ProjetsPage",
    components: {
        Header,
        Projets,

    },
}
</script>
