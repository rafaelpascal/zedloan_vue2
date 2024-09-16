<template>
    <div class="progress-bar-container">
        <div class="progress-bar" :style="{ width: `${progress}%` }"></div>
    </div>
</template>

<script>
export default {
    props: {
        value: {
            type: Number,
            required: true,
            default: 0
        },
        max: {
            type: Number,
            required: true,
            default: 100
        }
    },
    computed: {
        progress() {
            return (this.value / this.max) * 100;
        }
    }
};
</script>

<style>
.progress-bar-container {
    width: 100%;
    max-width: 20%;
    background-color: #e5e5e5;
    border-radius: 9999px;
    height: 1rem;
    overflow: hidden;
    position: relative;
}

.progress-bar {
    background-color: #3b82f6;
    height: 100%;
    transition: width 0.3s ease-in-out;
}
</style>
