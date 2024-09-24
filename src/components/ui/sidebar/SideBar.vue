<template>
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
</template>

<script>
export default {
    name: 'SideBar'
}
</script>

<style>
.sidebar {
    width: 100%;
    display: flex;
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
    padding-top: 4px;
    padding-bottom: 4px;
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
</style>
