<template>
    <Header />
    <Visuals />

</template>

<script>
import Visuals from '../components/Visuals.vue';
import Header from '../components/Header.vue';

export default {
    name: "VisualsPage",
    components: {
        Header,
        Visuals,

    },
}
</script>