<template>
    <Header />
    <Cyberpunk />

</template>

<script>
import Cyberpunk from '../components/Cyberpunk.vue';
import Header from '../components/Header.vue';

export default {
    name: "CyberpunkPage",
    components: {
        Header,
        Cyberpunk,

    },
}
</script>