<template>
    <Header />
    <Concert />

</template>

<script>
import Concert from '../components/Concert.vue';
import Header from '../components/Header.vue';

export default {
    name: "ConcertPage",
    components: {
        Header,
        Concert,

    },
}
</script>