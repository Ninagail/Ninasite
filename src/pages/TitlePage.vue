<template>
    <Header />
    <Title />

</template>

<script>
import Title from '../components/Title.vue';
import Header from '../components/Header.vue';

export default {
    name: "TitlePage",
    components: {
        Header,
        Title,

    },
}
</script>