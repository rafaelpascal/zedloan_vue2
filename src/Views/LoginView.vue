<template>
    <div class="container">
        <div class="header">
            <h2 class="title">ZEDLA LOAN</h2>
            <div class="divider"></div>
        </div>
        <div class="login-container">
            <div class="login-header">
                <div class="status-indicator"></div>
                <h2 class="login-prompt">Login to accept loan offer</h2>
            </div>
            <div class="input-container">
                <h2 class="input-label">Email Address</h2>
                <input type="text" class="input-field" placeholder="enter the correct email address">
            </div>
            <div class="input-container">
                <h2 class="input-label">Password</h2>
                <input type="text" class="input-field" placeholder="enter the correct password">
            </div>
            <button class="login-button">LOGIN NOW</button>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.container {
    background-color: #2879FD;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100vh;
}

.header {
    width: 100%;
}

.title {
    color: white;
    font-family: 'Montserrat', sans-serif;
    text-transform: uppercase;
    font-size: 44px;
    text-align: left;
    font-weight: 600;
    margin-left: 8rem;
}

.divider {
    width: 208px;
    background-color: white;
    height: 4px;
    margin-left: 8rem;

}

.login-container {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    max-width: 524px;
    height: 502px;
    border-radius: 24px;
    padding: 1rem;
    background-color: #fff;
    margin-right: 8rem;

}

.login-header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    gap: 0.5rem;
    /* 2 units in Tailwind */
}

.status-indicator {
    height: 8px;
    width: 8px;
    border-radius: 50%;
    background-color: #2879FD;
}

.login-prompt {
    color: #6E717C;
    font-size: 18px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
}

.input-container {
    width: auto;
}

.input-label {
    color: #000;
    margin-bottom: 0.5rem;
    /* Adjust spacing */
    font-size: 22px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
}

.input-field {
    width: 100%;
    padding: 1.25rem;
    /* 5 units in Tailwind */
    background-color: #ECF3FF;
    color: #7F7F7F;
    outline: none;
    font-size: 22px;
    text-align: center;
    border: none;
    border-radius: 4px;
}

.login-button {
    width: 100%;
    background-color: #2879FD;
    font-weight: bold;
    font-size: 16px;
    font-family: 'Montserrat', sans-serif;
    height: 66px;
    color: #fff;
    border-radius: 4px;
}
</style>
