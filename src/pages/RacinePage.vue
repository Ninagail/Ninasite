<template>
    <Header />
    <Racine />

</template>

<script>
import Racine from '../components/Racine.vue';
import Header from '../components/Header.vue';

export default {
    name: "RacinePage",
    components: {
        Header,
        Racine,

    },
     mounted() {
        window.scrollTo(0, 0);
    },
}
</script>