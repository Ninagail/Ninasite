<template>
    <div class="arrow-geo" @click="$emit('click')" role="button" tabindex="0" aria-label="Scroll down">
        <span></span>
        <span></span>
        <span></span>
    </div>
</template>

<script>
export default {
    name: "ArrowGeo",
};
</script>

<style scoped>
.arrow-geo {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    gap: 6px;
    width: 30px;
    animation: bounce 2s infinite;
    outline: none;
}

.arrow-geo:focus {
    outline: 2px solid #ed87b3;
    outline-offset: 4px;
}

.arrow-geo span {
    display: block;
    width: 20px;
    height: 3px;
    background: #ed87b3;
    border-radius: 2px;
    position: relative;
}

.arrow-geo span:nth-child(1) {
    transform: rotate(45deg);
    margin-left: 8px;
}

.arrow-geo span:nth-child(2) {
    width: 12px;
    height: 3px;
    margin-left: 6px;
}

.arrow-geo span:nth-child(3) {
    transform: rotate(-45deg);
    margin-left: 8px;
}

@keyframes bounce {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(8px);
    }
}
</style>
