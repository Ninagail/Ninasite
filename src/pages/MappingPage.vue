<template>
    <Header />
    <Mapping />

</template>

<script>
import Mapping from '../components/Mapping.vue';
import Header from '../components/Header.vue';

export default {
    name: "MappingPage",
    components: {
        Header,
        Mapping,

    },
}
</script>