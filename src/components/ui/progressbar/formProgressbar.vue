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

<style scoped>
.progress-bar-container {
    width: 100%;
    border-radius: 18px;
    overflow: hidden;
}

.progress-bar {
    border: 2px solid #2879FD;
    transition: width 0.3s ease;
}
</style>