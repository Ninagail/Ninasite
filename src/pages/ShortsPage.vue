<template>
    <Header />
    <Shorts />

</template>

<script>
import Shorts from '../components/Shorts.vue';
import Header from '../components/Header.vue';

export default {
    name: "ShortsPage",
    components: {
        Header,
        Shorts,

    },
}
</script>