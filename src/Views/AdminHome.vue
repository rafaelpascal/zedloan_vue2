<template>
    <div class="container">
        <div class="sidebar">
            <h2 class="nav-link">ZEDLA
                LOAN</h2>
            <router-link to="/" class="nav-link" active-class="active-link"
                exact-active-class="exact-active-link">Home</router-link>
        </div>
        <div class="main-content">
            <button class="toggle-sidebar" v-if="isMobile" @click="toggleSidebar">
                <menu-icon class="menu-icon" />
            </button>
            <div v-if="!ishomecards" class="nothomecardscontainer">
                <button class="back-button" @click="handleBack">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        class="icon">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    <p class="back-text">Back</p>
                </button>
                <button class="create-loan-button">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        class="icon">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                    </svg>
                    <p> CREATE LOAN OFFER</p>
                </button>
            </div>
            <div v-if="ishomecards" class="createbtnContainer">
                <button class="create-loan-button">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        class="icon">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                    </svg>
                    <p> CREATE LOAN OFFER</p>
                </button>
                <div class="btnContainer">
                    <button class="btnLoans" @click="handleLoanOut">
                        <h2 class="customText">TOTAL LOANS OUT
                        </h2>
                        <h2 class="customHeading">13,580,000</h2>

                    </button>
                    <button class="btnLoans" @click="handleRepaymentHis">
                        <h2 class="customText">TOTAL PAYMENT
                        </h2>
                        <h2 class="customHeading">13,580,000</h2>

                    </button>
                    <button class="btnLoans">
                        <h2 class="customText">TOTAL OUTSTANDING
                        </h2>
                        <h2 class="customHeading">4,280,000</h2>

                    </button>
                </div>
                <div class="btnContainer">
                    <button class="btnLoans" @click="handleisnewApplication">
                        <h2 class="customText">NEW APPLICATIONS
                        </h2>
                        <h2 class="customHeading">8</h2>

                    </button>
                    <button class="btnLoans">
                        <h2 class="customText">ONGOING LOANS
                        </h2>
                        <h2 class="customHeading">16</h2>

                    </button>
                    <button class="btnLoans">
                        <h2 class="customText">COMPLETED LOANS
                        </h2>
                        <h2 class="customHeading">10</h2>

                    </button>
                </div>
                <div class="btnContainer">
                    <button class="btnLoans" @click="handleisdeliquencies">
                        <h2 class="customText">DELINQUENCIES
                        </h2>
                        <h2 class="customHeading">0</h2>

                    </button>
                </div>
            </div>

            <div v-if="isloanout" class="loanOutContainer lg">
                <div class="loanTableWrapper">
                    <h2>TOTAL LOANS OUT</h2>
                    <div class="loanTableHeading">
                        <table class="loanTable">
                            <thead>
                                <tr>
                                    <th>FULL NAME</th>
                                    <th>DATE</th>
                                    <th>LOAN AMOUNT</th>
                                    <th>INTEREST RATE</th>
                                    <th>DURATION</th>
                                    <th>REPAYMENTS</th>
                                    <th>TOTAL</th>
                                    <th>DELINQUENT?</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(user, index) in users" :key="index">
                                    <td class="loanUserName">
                                        <img src="../assets/icons/avatar.svg" alt="" class="loanUserImage">
                                        <p>{{ user.name }}</p>
                                    </td>
                                    <td>{{ user.date }}</td>
                                    <td>{{ user.amount }}</td>
                                    <td>{{ user.interest }}</td>
                                    <td>{{ user.duration }}</td>
                                    <td>{{ user.rapayment }}</td>
                                    <td>{{ user.total }}</td>
                                    <td>{{ user.deliquent }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div v-if="repaymentHistory" class="loanOutContainer lg">
                <div class="loanTableWrapper">
                    <h2>REPAYMENT HISTORY</h2>
                    <div class="loanTableHeading">
                        <table class="loanTable">
                            <thead>
                                <tr>
                                    <th>FULL NAME</th>
                                    <th>DATE</th>
                                    <th>LOAN AMOUNT</th>
                                    <th>INTEREST RATE</th>
                                    <th>DURATION</th>
                                    <th>REPAYMENTS</th>
                                    <th>TOTAL</th>
                                    <th>DELINQUENT?</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(user, index) in users" :key="index">
                                    <td class="loanUserName">
                                        <img src="../assets/icons/avatar.svg" alt="" class="loanUserImage">
                                        <p>{{ user.name }}</p>
                                    </td>
                                    <td>{{ user.date }}</td>
                                    <td>{{ user.amount }}</td>
                                    <td>{{ user.interest }}</td>
                                    <td>{{ user.duration }}</td>
                                    <td>{{ user.rapayment }}</td>
                                    <td>{{ user.total }}</td>
                                    <td>{{ user.deliquent }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div v-if="isnewApplication" class="loanOutContainer lg">
                <div class="loanTableWrapper">
                    <h2>NEW APPLICATIONS</h2>
                    <div class="loanTableHeading">
                        <table class="loanTable">
                            <thead>
                                <tr>
                                    <th>FULL NAME</th>
                                    <th>DATE</th>
                                    <th>LOAN AMOUNT</th>
                                    <th>INTEREST RATE</th>
                                    <th>DURATION</th>
                                    <th>REPAYMENTS</th>
                                    <th>TOTAL</th>
                                    <th>DELINQUENT?</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(user, index) in users" :key="index">
                                    <td class="loanUserName">
                                        <img src="../assets/icons/avatar.svg" alt="" class="loanUserImage">
                                        <p>{{ user.name }}</p>
                                    </td>
                                    <td>{{ user.date }}</td>
                                    <td>{{ user.amount }}</td>
                                    <td>{{ user.interest }}</td>
                                    <td>{{ user.duration }}</td>
                                    <td>{{ user.rapayment }}</td>
                                    <td>{{ user.total }}</td>
                                    <td>{{ user.deliquent }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
        <div class="overlay" v-if="isSidebarOpen" @click="toggleSidebar"></div>
    </div>
</template>


<script>

export default {

    data() {
        return {
            ishomecards: true,
            isloanout: false,
            repaymentHistory: false,
            isnewApplication: false,
            isdeliquencies: false,
            users: [
                { name: "John Doe", date: "1/2/2024", amount: "2000", interest: "3%/month", duration: "3 months", rapayment: "1500/month", total: "55,000", deliquent: "No" },
                { name: "John Doe", date: "1/2/2024", amount: "2000", interest: "3%/month", duration: "3 months", rapayment: "1500/month", total: "55,000", deliquent: "No" },
                { name: "John Doe", date: "1/2/2024", amount: "2000", interest: "3%/month", duration: "3 months", rapayment: "1500/month", total: "55,000", deliquent: "No" }
            ],
            application: [
                { name: "John Doe", date: "1/2/2024", amount: "2000", interest: "3%/month", duration: "3 months", rapayment: "1500/month", bank: "GTbank" },
                { name: "John Doe", date: "1/2/2024", amount: "2000", interest: "3%/month", duration: "3 months", rapayment: "1500/month", bank: "GTbank" },
                { name: "John Doe", date: "1/2/2024", amount: "2000", interest: "3%/month", duration: "3 months", rapayment: "1500/month", bank: "GTbank" }
            ],
            repayments: [
                { name: "John Doe", date: "1/2/2024", amount: "2000", bank: "GT Bank", number: "71371828168", balance: "20000", deliquent: "Nil" },
                { name: "John Doe", date: "1/2/2024", amount: "2000", bank: "GT Bank", number: "71371828168", balance: "20000", deliquent: "Nil" },
                { name: "John Doe", date: "1/2/2024", amount: "2000", bank: "GT Bank", number: "71371828168", balance: "20000", deliquent: "Nil" }
            ]
        };
    },
    methods: {
        handleLoanOut() {
            this.ishomecards = false;
            this.isloanout = true;
        },
        handleRepaymentHis() {
            this.ishomecards = false;
            this.isloanout = false;
            this.repaymentHistory = true;
        },
        handleisnewApplication() {
            this.ishomecards = false;
            this.isloanout = false;
            this.repaymentHistory = false;
            this.isnewApplication = true;
        },
        handleisdeliquencies() {
            this.ishomecards = false;
            this.isloanout = false;
            this.repaymentHistory = false;
            this.isnewApplication = false;
            this.isdeliquencies = true;
        },
        handleBack() {
            this.ishomecards = true;
            this.isloanout = false;
            this.repaymentHistory = false;
            this.isnewApplication = false;
            this.isdeliquencies = false;
        }
    }
};
</script>


<style scoped>
.back-button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    border: none;
}

.back-text {
    font-size: 22px;
    text-transform: uppercase;
    color: #000;
    padding-left: 10px;
}

.loanOutContainer {
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    width: 100%;
    /* margin: auto; */
    align-items: flex-end;
}

.nothomecardscontainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.loanOutContainer.lg {
    width: 90%;
}

.loanTableWrapper {
    width: 100%;
    border: 2px solid #ddd;
    border-radius: 0.5rem;
    /* Rounded corners */
    padding: 1rem;
    /* Padding */
}

.loanTableHeading {
    margin-top: 1rem;
}

.loanTable {
    min-width: 100%;
    background-color: white;
}

.loanTable thead {
    background-color: #2879FD;
    border-radius: 0.5rem;
}

.loanTable th {
    padding: 0.75rem 1.5rem;
    border-bottom: 2px solid #ccc;
    text-align: left;
    font-size: 0.875rem;
    font-weight: 400;
    color: #fff;
    letter-spacing: 0.05rem;
}

.loanTable tbody tr {
    background-color: white;
}

.loanTable td {
    padding: 1rem 1.5rem;
    font-size: 0.875rem;
    font-weight: 400;
    color: #1f2937;
}

.loanUserName {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.75rem;
}

.loanUserImage {
    margin-right: 0.75rem;
}

.customHeading {
    font-family: 'Montserrat', sans-serif;
    font-size: 35px;
    font-weight: 400;
    color: #000000;
    text-align: left;
}

.customText {
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
    font-weight: 400;
    color: #6E717C;
    text-align: left;
}

.btnLoans {
    display: flex;
    width: 286px;
    padding: 10px;
    height: 148px;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    border: 1px solid #2879FD;
    border-radius: 4px;
    background-color: #fff;

}

.btnContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: auto;
    margin: 20px 0;
}

.createbtnContainer {
    margin: 0 30px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    align-items: end;
}

.create-loan-button {
    width: 100%;
    margin: 6% 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    border: 1px solid #0961E3;
    background-color: #fff;
    font-weight: 600;
    font-size: 0.9375rem;
    font-family: 'Montserrat', sans-serif;
    height: 61px;
    color: #0961E3;
    border-radius: 4px;
    cursor: pointer;
}

@media (min-width: 1024px) {
    .create-loan-button {
        width: 238px;
    }
}

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

/* Main content styles */
.main-content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    width: 70%;
    padding: 0 30px;
    z-index: 0;
}

.toggle-sidebar {
    position: sticky;
    background-color: white;
    width: 100%;
    top: 0;
    left: 0;
    padding: 1rem;
    color: black;
    z-index: 20;
}

.copy-button {
    background: none;
    border: none;
    cursor: pointer;
}

.copy-icon {
    display: inline-block;
}

.icon {
    width: 24px;
    height: 24px;
    stroke: #000;
}

.menu-icon {
    color: blue;
}

.content {
    padding-left: 1rem;
    padding-right: 1rem;
    width: 100%;
}

/* Info Cards */
.info-cards {
    display: flex;
    gap: 2rem;
    padding-top: 1rem;
    align-items: center;
    flex-direction: row;
}

.card {
    width: 100%;
    height: 197px;
    background-color: #0961E3;
    border-radius: 0.5rem;
}

.card-content {
    padding: 2.5rem;
}

.card h2 {
    color: #F9FAFC;
    font-size: 1.25rem;
}

.card h1 {
    color: #F9FAFC;
    font-size: 1.875rem;
    font-weight: bold;
}

.card h3 {
    color: #F9FAFC;
    text-align: right;
    padding: 1rem;
    font-size: 1.125rem;
}

/* Instant Repayment */
.instant-repayment {
    padding-top: 1.5rem;
}

.repayment-actions {
    display: flex;
    gap: 0.25rem;
    align-items: center;
}

.repayment-amount {
    width: 181px;
    height: 76px;
    border: 1.5px solid #2879FD;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
}

.repay-now {
    width: 161px;
    background-color: #0961E3;
    border-radius: 4px;
    height: 60px;
    font-size: 1rem;
    font-weight: bold;
    color: white;
}

/* Progress Bar Section */
.progress-section {
    margin-top: 1.5rem;
}

/* Remaining Amount */
.remaining-amount {
    margin-top: 0.5rem;
}

/* Repayments */
.repayments {
    background-color: #ECF5FF;
    padding: 20px;
    margin-top: 1rem;
    border-radius: 12px;
    width: 551px;

}

/* Overlay */
.overlay {
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 10;
}

/* Modal */
.modal-content {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    justify-content: space-between;
    align-items: center;
}

.custom-heading {
    text-align: center;
    font-size: 45px;
    color: #2879FD;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    text-transform: uppercase;
}

.payment-options {
    width: 417px;
    background-color: #ECF5FF;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    border-radius: 12px;
    height: 307px;
}

.options-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.option {
    display: flex;
    align-items: center;
}

.custom-radio {
    appearance: none;
    border-radius: 50%;
    border: 2px solid #8F8F8F;
    width: 23px;
    height: 23px;
    position: relative;
    outline: none;
    cursor: pointer;
    transition: background-color 0.2s, border-color 0.2s;
    background-color: #fff;
}

.custom-radio:checked {
    border-color: #0961E3;
    background-color: #0961E3;
}

.custom-radio:checked::after {
    content: '';
    display: block;
    width: 23px;
    height: 23px;
    border-radius: 50%;
    border: 2px solid #0961E3;
    background-color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.pay-now-button {
    margin-top: 1rem;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.pay-now-button button {
    width: 166px;
    background-color: #0961E3;
    font-weight: bold;
    font-size: 1rem;
    height: 51px;
    color: white;
    border-radius: 4px;
}

/* Transfer Info */
.transfer-info {
    width: 570px;
    background-color: #ECF5FF;
    border-radius: 12px;
    padding: 0.625rem;
}

.transfer-info h2 {
    text-align: center;
    font-size: 2.8125rem;
    color: #2879FD;
    font-weight: bold;
    text-transform: uppercase;
}

.transfer-info p {
    text-align: center;
    font-size: 1.25rem;
    color: #000;
    font-weight: bold;
    text-transform: uppercase;
}

.amount-info {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.amount-box {
    width: 209px;
    margin-top: 0.5rem;
    padding: 0.5rem;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
}

.amount-box h2 {
    font-size: 30px;
    color: #0961E3;
    font-weight: bold;
    text-transform: uppercase;
}

.bank-info {
    margin-top: 0.5rem;
}

.bank-info ul {
    list-style: none;
    padding: 0;
}

.bank-info li {
    display: flex;
    justify-content: start;
    align-items: start;
    border-bottom: 2px solid #0961E3;
    /* padding: 1rem; */
}

.copy-button {
    padding: 0.5rem;
    background-color: transparent;
    border: none;
    cursor: pointer;
}

.copy-icon {
    width: 24px;
    height: 24px;
}

/* Reference Info */
.reference-info {
    margin-top: 0.5rem;
    background-color: white;
    width: 289px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

/* .reference-info h2 {
    display: flex;
    justify-content: space-between;
} */

.reference-info .copy-button {
    margin-left: 1rem;
}

/* Confirm Transfer */
.confirm-transfer {
    margin-top: 1rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.confirm-transfer button {
    width: 315px;
    background-color: #0961E3;
    font-weight: bold;
    font-size: 1rem;
    height: 51px;
    color: white;
    border-radius: 4px;
}

/* Payment Status */
.payment-status {
    margin-top: 1rem;
    text-align: center;
}

.payment-status p {
    margin-top: 1rem;
    font-size: 1.125rem;
    color: #2879FD;
    font-weight: bold;
}

.payment-status span {
    color: #174591;
}

.return-to-dashboard {
    display: flex;
    justify-content: flex-end;
    margin-top: 1rem;
}

.return-to-dashboard button {
    text-decoration: underline;
    font-size: 0.8125rem;
    color: #000;
    text-transform: uppercase;
}

.toggle-sidebar {
    display: none;
}

@media (max-width: 768px) {
    .toggle-sidebar {
        display: block;
    }

    .modal-content {
        display: flex;
        flex-direction: column;
    }

    .payment-options {
        width: 100%;
        background-color: #ECF5FF;
        display: flex;
        flex-direction: column;
        padding: 2rem;
        border-radius: 12px;
        height: auto;
    }

    .transfer-info {
        width: 100%;
        background-color: #ECF5FF;
        border-radius: 12px;
        padding: 0.625rem;
    }


}

@media (max-width: 768px) {
    .sidebar {
        display: block;
    }

    .main-content {
        margin-left: 0;
    }
}

/* Fade In/Out Animations */
@keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

@keyframes fadeOut {
    from {
        opacity: 1;
    }

    to {
        opacity: 0;
    }
}

.fade-in {
    animation: fadeIn 0.5s ease-in;
}

.fade-out {
    animation: fadeOut 0.5s ease-out;
}
</style>