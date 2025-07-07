<template>
    <Header />
    <Montage />

</template>

<script>
import Montage from '../components/Montage.vue';
import Header from '../components/Header.vue';

export default {
    name: "MontagePage",
    components: {
        Header,
        Montage,

    },
}
</script>