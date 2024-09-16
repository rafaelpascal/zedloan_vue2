<template>
    <div class="container">
        <div class="sidebar">
            <SideBar />
        </div>
        <div class="main-content">
            <button class="toggle-sidebar" v-if="isMobile" @click="toggleSidebar">
                <menu-icon class="menu-icon" />
            </button>
            <div class="content">
                <div class="due-info">
                    <h2>Next Due: <span>21/08/2024</span><span class="due-days">16 days</span></h2>
                    <div class="info-cards">
                        <div class="card remaining-loan">
                            <div class="card-content">
                                <h2>REMAINING LOAN</h2>
                                <h1>120,000</h1>
                            </div>
                            <h3>N130,000</h3>
                        </div>
                        <div class="card repaid-amount">
                            <div class="card-content">
                                <h2>REPAID AMOUNT</h2>
                                <h1>10,000</h1>
                            </div>
                            <h3>1/4</h3>
                        </div>
                    </div>
                </div>
                <div class="instant-repayment">
                    <h2>INSTANT REPAYMENT</h2>
                    <div class="repayment-actions">
                        <div class="repayment-amount">
                            <h3>10,000+</h3>
                        </div>
                        <button class="repay-now" @click="toggleisPaynow">Repay Now</button>
                    </div>
                </div>
                <div class="progress-section">
                    <ProgressBar :value="50" :max="100" />
                </div>
                <h2 class="remaining-amount">Remaining: 120,000</h2>
                <div class="repayments">
                    <h2 style="font-weight: 400; font-size: 16px; margin-bottom: 10px;">REPAYMENTS</h2>
                    <div style="padding: 0%; margin: 0%;">
                        <ul style="padding: 0%; margin: 0%;">
                            <li v-for="item in items" :key="item.id"
                                style="display: flex; border-bottom: 2px solid #0961E3; padding: 10px 0; width: 100%; justify-content: space-between; align-items: center;">
                                <span>{{ item.amount }}</span>
                                <span>{{ item.date }}</span>
                                <span>{{ item.bank }}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="overlay" v-if="isSidebarOpen" @click="toggleSidebar"></div>

        <!-- Modal -->
        <ModalView class="" :show="isPaynow" @update:show="isPaynow = $event">
            <div class="modal-header">
                <button class="modal-close" @click="closeModal">
                    <svg class="modal-close-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12">
                        </path>
                    </svg>
                </button>
            </div>
            <div class="modal-content">
                <div class="payment-options">
                    <div class="options-list">
                        <div v-for="option in options" :key="option.value" class="option">
                            <input type="radio" :id="option.value" name="options" :value="option.value"
                                v-model="selectedOption" class="custom-radio" />
                            <label :for="option.value">{{ option.label }}</label>
                        </div>
                    </div>
                    <div class="pay-now-button">
                        <button>PAY NOW</button>
                    </div>
                </div>
                <div class="transfer-info">
                    <h2 class="custom-heading">TRANSFER</h2>
                    <p
                        style="text-align: center; font-size: 20px; color: #000; font-weight: 700; text-transform: uppercase;">
                        TO THE FOLLOWING
                        ACCOUNT</p>
                    <div class="amount-info">
                        <p
                            style="text-align: center; font-size: 12px; color: #000; font-weight: 400; text-transform: uppercase;">
                            TO THE AMOUNT YOU WILL SEND</p>
                        <div class="amount-box">
                            <h2
                                style="text-align: center; font-size: 20px; color: #2879FD; font-weight: 700; text-transform: uppercase;">
                                N26,500</h2>
                            <img src="../assets/CopyIcon.svg" alt="">
                        </div>
                    </div>
                    <div class="bank-info">
                        <ul>
                            <li v-for="bank in banks" :key="bank.id">
                                <div>
                                    <p
                                        style="text-align: left; padding: 0%; font-size: 16px; color: #2879FD; font-weight: 400; text-transform: uppercase;">
                                        {{ bank.description }}</p>
                                    <p
                                        style="text-align: left; padding: 0%; font-size: 35px; color: #000; font-weight: 500; text-transform: uppercase;">
                                        {{ bank.accountNo || bank.accountName || bank.bank }}</p>
                                </div>
                                <button v-if="bank.copy === true"
                                    @click="copyToClipboard(bank.accountNo || bank.accountName || bank.bank)"
                                    class="copy-button">
                                    <img src="../assets/CopyIcon.svg" alt="">
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div class="reference-info">
                        <h2 style="text-align: left; font-size: 15px; color: #7F7F7F; font-weight: 400;">Narration/Ref:
                            <span style="color: #0961E3;">{{ reference }}</span>
                        </h2>
                        <button @click="copyref(reference)" class="copy-button">
                            <img src="../assets/CopyIcon.svg" alt="">
                        </button>
                    </div>
                    <div class="confirm-transfer">
                        <button>I HAVE DONE THE TRANSFER</button>
                    </div>
                    <div class="payment-status">
                        <p>Checking for the payment <span>N26,500</span></p>
                        <p>You will be notified when your payment is successful.</p>
                    </div>
                    <div class="return-to-dashboard">
                        <button>RETURN TO DASHBOARD</button>
                    </div>
                </div>
            </div>
        </ModalView>
    </div>
</template>


<script>
import SideBar from '../components/ui/sidebar/SideBar.vue';
import ProgressBar from '../components/ui/progressbar/ProgressBar.vue';
import ModalView from '../components/ui/modal/ModalView.vue';

export default {
    components: {
        SideBar,
        ProgressBar,
        ModalView,
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
    position: absolute;
    height: 100%;
    z-index: 20;
    background-color: black;
    transition: all 0.3s;
    width: 20%;
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
    /* flex: 1; */
    height: 100%;
    /* padding-top: 4%; */
    width: 60%;
    margin-left: 414px;
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
    /* Adjust color as needed */
}

.menu-icon {
    color: blue;
}

.content {
    padding-left: 1rem;
    padding-right: 1rem;
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