<template>
    <Header />
    <Jardin />

</template>

<script>
import Jardin from '../components/Jardin.vue';
import Header from '../components/Header.vue';

export default {
    name: "JardinPage",
    components: {
        Header,
        Jardin,

    },
}
</script>