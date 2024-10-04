<template>
    <div class="container">
        <div class="sidebar">
            <router-link to="/" class="nav-link" active-class="active-link"
                exact-active-class="exact-active-link">Home</router-link>
            <router-link to="/profile" class="nav-link" active-class="active-link"
                exact-active-class="exact-active-link">Profile</router-link>
            <router-link to="/offers" class="nav-link" active-class="active-link"
                exact-active-class="exact-active-link">Loan Offers</router-link>
            <router-link to="/accounts" class="nav-link" active-class="active-link"
                exact-active-class="exact-active-link">Accounts</router-link>
        </div>
        <div class="content">
            <!-- <button class="toggle-button" @click="toggleSidebar">
                <menu-icon class="text-blue-500" />
            </button> -->

            <div class="form-container">
                <form @submit.prevent="handleSubmit" class="form">
                    <div class="form-inner">
                        <button class="back-button" @click="handleCloseNewAccount">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            <p class="back-button-text">Back</p>
                        </button>
                        <h2 class="form-title">PROFILE</h2>
                        <div class="input-group">
                            <input type="text" v-model="myName" placeholder="Additional Details" class="input-field" />
                            <button class="edit-button">edit</button>
                        </div>
                        <div class="input-group">
                            <input type="text" v-model="myPhone" placeholder="Additional Details" class="input-field" />
                            <button class="edit-button">edit</button>
                        </div>
                        <div class="input-group">
                            <input type="text" v-model="myEmail" placeholder="Additional Details" class="input-field" />
                            <button class="edit-button">edit</button>
                        </div>

                        <div class="input-group">
                            <button type="submit" class="submit-button">
                                Change password
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

        <div class="sidebar-overlay" v-if="isSidebarOpen" @click="toggleSidebar"></div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            isSidebarOpen: false,
            formsubmitted: false,
            myName: 'Stephen Michael',
            myPhone: '07035957197',
            myEmail: 'rafaelpascal234@gmail.com'
        };
    },
    methods: {
        toggleSidebar() {
            this.isSidebarOpen = !this.isSidebarOpen;
        },
        handleSubmit() {
            // Add form submit logic here
            this.formsubmitted = true;
        },
        handleCloseNewAccount() {
            // Add logic to handle back button click
        }
    }
};
</script>

<style scoped>
.sidebar {
    width: 20%;
    display: flex;
    background: #000;
    /* height: 100%; */
    flex-direction: column;
    justify-content: center;
    align-items: start;
    padding-left: 10px;
}

.nav-link {
    width: 100%;
    color: white;
    font-family: Montserrat, sans-serif;
    text-transform: uppercase;
    font-size: 22px;
    text-align: left;
    padding: 24px;
    font-weight: 600;
    display: block;
    text-decoration: none;
}

.nav-link.active-link {
    background-color: rgba(255, 255, 255, 0.2);
    color: #2879FD;
    width: 100%;
}

.nav-link.exact-active-link {
    font-weight: bold;
}

/* Main container setup */
.container {
    position: relative;
    display: flex;
    width: 100%;
    height: 100vh;
}

/* Sidebar wrapper */
.sidebar-wrapper {
    position: absolute;
    z-index: 20;
    height: 100%;
    background-color: black;
    transition: all 0.3s ease-in-out;
}

/* Sidebar states */
.sidebar-hidden {
    width: 0;
    display: none;
}

.sidebar-visible {
    width: 70%;
}

.sidebar-lg-visible {
    width: 304px;
    display: flex;
}

/* Content area */
.content {
    flex: 1;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* padding-top: 2%; */
    width: 100%;
    padding-left: 2%;
    padding-right: 2%;
    position: relative;
    z-index: 0;
}

/* Sidebar toggle button */
.toggle-button {
    display: block;
    position: sticky;
    top: 0;
    left: 0;
    padding: 16px;
    background-color: white;
    color: black;
    z-index: 20;
}

/* Form container */
.form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.form {
    width: 100%;
    max-width: 541px;
    display: flex;
    flex-direction: column;
    padding: 0 8px;
    justify-content: center;
    align-items: center;
    border: 1px solid #8F8F8F;
    border-radius: 12px;
    height: 751px;
}

.form-inner {
    padding: 24px;
    height: 100%;
    width: 100%;
}

.back-button {
    margin-top: 16px;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    gap: 12px;
    border: none;
    background-color: white
}

.back-button svg {
    width: 24px;
    height: 24px;
}

.back-button-text {
    color: black;
    font-size: 22px;
    font-family: 'Montserrat', sans-serif;
    text-transform: uppercase;
    font-weight: 400;
}

.form-title {
    color: black;
    margin-bottom: 40px;
    font-size: 18px;
    font-family: 'Montserrat', sans-serif;
    text-transform: uppercase;
    font-weight: 600;

}

.input-group {
    border: 1px solid #2879FD;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 24px;
    padding-top: 20px;
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-radius: 12px;
}

.input-field {
    font-size: 18px;
    padding: 0 20px;
    font-weight: 400;
    /* height: 100%; */
    border-radius: 12px;
    /* padding-left: 16px; */
    /* padding-right: 16px; */
    outline: none;
    border: none;
    width: 100%;
}

.edit-button {
    color: black;
    font-size: 18px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    border: none;
    background-color: white;
}

.submit-button {
    width: 100%;
    border-radius: 12px;
    text-align: left;
    color: black;
    background-color: white;
    border: none;
    font-size: 18px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
}

/* Overlay for sidebar on mobile */
.sidebar-overlay {
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 10;
}
</style>