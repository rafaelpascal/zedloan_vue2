<template>
    <div class="app-layout">
        <main style="padding: 0%;">
            <router-view />
        </main>
    </div>
</template>

<script>
export default {
    name: 'AppLayout',
};
</script>

<style scoped>
.app-layout {
    /* display: flex; */
    width: 100%;
    /* overflow-y: auto; */
    /* background: #000; */
    padding: 0%;
    margin: 0%;
}

/* Styles here */
</style>