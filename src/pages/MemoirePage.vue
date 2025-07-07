<template>
    <Header />
    <Memoire />

</template>

<script>
import Memoire from '../components/Memoire.vue';
import Header from '../components/Header.vue';

export default {
    name: "MemoirePage",
    components: {
        Header,
        Memoire,

    },
    mounted() {
        window.scrollTo(0, 0);
    }

}
</script>