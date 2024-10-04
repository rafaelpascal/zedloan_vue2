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
        <div class="main-container">
            <!-- <button class="menu-button" @click="toggleSidebar">
                <menu-icon class="icon-menu" />
            </button> -->

            <div class="content-container">
                <!-- <button class="back-button" @click="handleCloseNewAccount">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        class="icon-arrow">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    <p class="back-text">Back</p>
                </button> -->
                <h2>PROFILE</h2>
                <form @submit.prevent="handleSubmit" class="form-container">
                    <div class="form-content">
                        <div class="input-container">
                            <p class="input-label">Loan title</p>
                            <input type="text" v-model="loanTitle" placeholder="Loan Title" class="input-field">
                        </div>
                        <div class="textarea-container">
                            <p class="input-label">Loan description</p>
                            <textarea v-model="loanDescription" placeholder="Loan description"
                                class="textarea-field"></textarea>
                        </div>
                        <div class="input-container">
                            <p class="input-label">Loan amount</p>
                            <input type="text" v-model="loanAmount" placeholder="Loan amount" class="input-field">
                        </div>
                        <div class="input-container">
                            <p class="input-label">Loan duration</p>
                            <div class="loan-duration">
                                <div class="duration-select">
                                    <select v-model="loanDuration" name="duration" id="duration" class="select-field">
                                        <option value="" disabled selected>3</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                    <select v-model="loanDurationUnit" name="months" id="months" class="select-field">
                                        <option value="" disabled selected>Months</option>
                                        <option value="6-months">6</option>
                                        <option value="12-months">12</option>
                                        <option value="24-months">24</option>
                                    </select>
                                </div>
                                <div class="monthly-amount">
                                    <h1>N6,000/month</h1>
                                </div>
                            </div>
                        </div>
                        <div class="input-container">
                            <p class="input-label">Loan interest rate</p>
                            <div class="loan-interest">
                                <div class="interest-select">
                                    <select v-model="loanInterestRate" name="interest" id="interest"
                                        class="select-field">
                                        <option value="" disabled selected>4%</option>
                                        <option value="1">5%</option>
                                        <option value="2">6%</option>
                                        <option value="3">7%</option>
                                    </select>
                                </div>
                                <div class="total-amount">
                                    <h1>Total: N126,000</h1>
                                </div>
                            </div>
                        </div>
                        <div class="input-container">
                            <p class="input-label">Moratorium</p>
                            <div class="moratorium-select">
                                <select v-model="moratorium" name="moratorium" id="moratorium" class="select-field">
                                    <option value="" disabled selected>3 Days</option>
                                    <option value="1">4 Days</option>
                                    <option value="2">5 Days</option>
                                    <option value="3">6 Days</option>
                                </select>
                            </div>
                        </div>
                        <div class="input-container">
                            <p class="input-label">Borrower’s Details</p>
                            <input type="text" v-model="borrowerDetails" placeholder="Borrower’s Details"
                                class="input-field">
                        </div>
                        <div class="input-container">
                            <input type="text" v-model="additionalDetails1" placeholder="Additional Details"
                                class="input-field">
                        </div>
                        <div class="input-container">
                            <input type="text" v-model="additionalDetails2" placeholder="Additional Details"
                                class="input-field">
                        </div>
                        <div class="input-container">
                            <input type="text" v-model="additionalDetails3" placeholder="Additional Details"
                                class="input-field">
                        </div>
                        <div class="button-container">
                            <button v-if="formsubmitted === true" type="submit" class="submit-button">ACCEPT LOAN
                                OFFER</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

        <div class="overlay" v-if="isSidebarOpen" @click="toggleSidebar"></div>
    </div>
</template>


<script>
// import SideBar from '../components/ui/sidebar/SideBar.vue';
// import ProgressBar from '../components/ui/progressbar/ProgressBar.vue';

export default {
    components: {
        // SideBar,
        // ProgressBar,
    },
    data() {
        return {
            items: [
                { id: 1, amount: '19,000', date: "02/5/2026", bank: "Zenith Bank" },
                { id: 2, amount: '19,000', date: "02/5/2026", bank: "Zenith Bank" },
                { id: 3, amount: '19,000', date: "02/5/2026", bank: "Zenith Bank" },
            ],
            banks: [
                { id: 1, description: "Account Number", accountNo: '2004000698', copy: true },
                { id: 3, description: "Bank", bank: "fcmb", copy: false },
                { id: 2, description: "Account Name", accountName: 'ZEDLA ENTERPRISES LTD', copy: false },
            ],
            options: [
                { value: 'option1', label: 'ZENITH BANK' },
                { value: 'option2', label: 'GTBANK' },
                { value: 'option3', label: 'ACCESS BANK' },
                { value: 'option4', label: 'TRANSFER FROM OTHER BANK' }
            ],
            isSidebarOpen: false,
            isPaynow: false,
            copied: false,
            refcopied: false,
            selectedOption: 'option1',
            reference: "0657-hUVp",
            isMobile: false, // New property to track mobile view
        };
    },
    computed: {
        sidebarClasses() {
            return {
                'sidebar': true,
                'sidebar-open': this.isSidebarOpen,
                'sidebar-closed': !this.isSidebarOpen,
            };
        }
    },
    methods: {
        toggleSidebar() {
            this.isSidebarOpen = !this.isSidebarOpen;
        },
        toggleisPaynow() {
            this.isPaynow = !this.isPaynow;
        },

        closeModal() {
            this.isPaynow = false
        },
        copyToClipboard(text) {
            navigator.clipboard.writeText(text).then(() => {
                this.copied = true;
                setTimeout(() => {
                    this.copied = false;
                }, 1000);
            }).catch(err => {
                console.error('Failed to copy text: ', err);
            });
        },
        copyref(text) {
            navigator.clipboard.writeText(text).then(() => {
                this.refcopied = true;
                setTimeout(() => {
                    this.refcopied = false;
                }, 1000);
            }).catch(err => {
                console.error('Failed to copy text: ', err);
            });
        },
        checkMobileView() {
            this.isMobile = window.innerWidth <= 768; // Adjust the breakpoint as needed
        },
    },
    mounted() {
        this.checkMobileView();
        window.addEventListener('resize', this.checkMobileView);
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.checkMobileView);
    }
};
</script>
<style scoped>
.container {
    display: flex;
    width: 100%;
    height: 100vh;
    position: relative;
    padding: 0%;
}


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


.modal-header {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 1rem;
}

.modal-close {
    background: none;
    border: none;
    color: gray;
    cursor: pointer;
    z-index: 50;
}

.modal-close-icon {
    width: 1.5rem;
    height: 1.5rem;
}

.sidebar-open {
    width: 70%;
}

.sidebar-closed {
    width: 0;
}

.main-container {
    flex: 1;
    height: 100%;
    padding-top: 2%;
    width: 100%;
    max-width: 80%;
    /* padding-left: 2%; */
    /* margin-left: 314px; */
    position: relative;
    z-index: 0;
}

.menu-button {
    display: block;
    background-color: white;
    width: 100%;
    position: sticky;
    top: 0;
    padding: 16px;
    color: black;
    z-index: 20;
}

.icon-menu {
    color: #2879FD;
}

.content-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.back-button {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 32px;
    margin-top: 16px;
}

.icon-arrow {
    width: 24px;
    height: 24px;
}

.back-text {
    color: #000;
    font-size: 22px;
    font-weight: 400;
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
}

.form-container {
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

.form-content {
    height: 731px;
    padding: 24px;
    width: 100%;
    overflow-y: auto;
}

.input-container {
    position: relative;
    margin: 32px 0;
    padding: 16px;
    border: 1px solid #2879FD;
    border-radius: 12px;
}

.input-label {
    position: absolute;
    top: -18px;
    left: 24px;
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
    background-color: #ECF3FF;
    padding: 4px 8px;
    border-radius: 12px;
}

.input-field {
    width: 100%;
    /* padding: 16px; */
    border-radius: 12px;
    outline: none;
    border: none;
}

.textarea-container {
    position: relative;
    margin: 32px 0;
    padding: 16px;
    border: 1px solid #2879FD;
    border-radius: 12px;
    height: 100px;
}

.textarea-field {
    width: 100%;
    height: 100%;
    /* padding: 16px; */
    border-radius: 12px;
    outline: none;
    resize: none;
}

.loan-duration,
.loan-interest {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
}

.duration-select,
.interest-select {
    display: flex;
    align-items: center;
    border-right: 1px solid #2879FD;
    width: 50%;
}

.select-field {
    outline: none;
    font-size: 20px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
}

.monthly-amount,
.total-amount {
    width: 50%;
    padding: 8px;
    font-size: 14px;
    color: #2879FD;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
}

.moratorium-select {
    display: flex;
    align-items: center;
    padding: 16px;
    width: 50%;
}

.button-container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.submit-button {
    width: 100%;
    height: 50px;
    background-color: #2879FD;
    margin: 16px 0;
    border-radius: 12px;
    color: white;
    font-weight: bold;
}
</style>