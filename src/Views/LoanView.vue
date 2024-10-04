<template>
    <div class="loanContainer">
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

        <div class="main-content">
            <!-- <button class="lg:hidden sticky bg-white w-full top-0 left-0 p-4 text-black z-20" @click="toggleSidebar">
                <menu-icon class="text-blue-500" />
            </button> -->
            <div v-if="formActive === true" class="form-container">
                <div class="form-content">
                    <div class="form-inner">
                        <div class="form-field">
                            <p class="form-label">Loan title</p>
                            <input type="text" v-model="loanTitle" placeholder="Loan Title" class="input-field">
                        </div>
                        <div class="form-field">
                            <p class="form-label">Loan description</p>
                            <textarea v-model="loanDescription" placeholder="Loan description"
                                class="textarea-field"></textarea>
                        </div>
                        <div class="form-field">
                            <p class="form-label">Loan amount</p>
                            <input type="text" v-model="loanAmount" placeholder="Loan amount" class="input-field">
                        </div>
                        <div class="form-field">
                            <p class="form-label">Loan duration</p>
                            <div class="duration-container">
                                <div class="duration-select-group">
                                    <select v-model="loanDuration" name="duration" id="duration" style="border: none;"
                                        class="select-field">
                                        <option value="" disabled selected>3</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                    <select v-model="loanDurationUnit" name="months" id="months" style="border: none;"
                                        class="select-field">
                                        <option value="" disabled selected>Months</option>
                                        <option value="6-months">6</option>
                                        <option value="12-months">12</option>
                                        <option value="24-months">24</option>
                                    </select>
                                </div>
                                <div class="duration-total">
                                    <h1>N6,000/month</h1>
                                </div>
                            </div>
                        </div>
                        <div class="form-field">
                            <p class="form-label">Loan interest rate</p>
                            <div class="interest-container">
                                <div class="interest-select-group">
                                    <select v-model="loanInterestRate" name="interest" style="border: none;"
                                        id="interest" class="select-field">
                                        <option value="" disabled selected>4%</option>
                                        <option value="1">5%</option>
                                        <option value="2">6%</option>
                                        <option value="3">7%</option>
                                    </select>
                                </div>
                                <div class="interest-total">
                                    <h1>Total: N126,000</h1>
                                </div>
                            </div>
                        </div>
                        <div class="form-field">
                            <p class="form-label">Moratorium</p>
                            <div class="moratorium-container">
                                <select v-model="moratorium" name="moratorium" id="moratorium" style="border: none;"
                                    class="select-field">
                                    <option value="" disabled selected>3 Days</option>
                                    <option value="1">4 Days</option>
                                    <option value="2">5 Days</option>
                                    <option value="3">6 Days</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-field">
                            <p class="form-label">Borrower’s Details</p>
                            <input type="text" v-model="borrowerDetails" placeholder="Borrower’s Details"
                                class="input-field">
                        </div>
                        <div class="form-field">
                            <input type="text" v-model="additionalDetails1" placeholder="Additional Details"
                                class="input-field">
                        </div>
                        <div class="form-field">
                            <input type="text" v-model="additionalDetails2" placeholder="Additional Details"
                                class="input-field">
                        </div>
                        <div class="form-field">
                            <input type="text" v-model="additionalDetails3" placeholder="Additional Details"
                                class="input-field">
                        </div>
                        <div class="button-container">
                            <button @click="handleformSubmit" class="submit-button">CREATE LOAN OFFER</button>
                        </div>
                    </div>
                </div>
            </div>


            <!-- Laon Review -->
            <div v-if="formsubmitted === true" class="form-container2">
                <form @submit.prevent="handleSubmit" class="form2">
                    <div class="form-content2">
                        <!-- Progress bar -->
                        <!-- <div class="progress-bar">
                            <div :class="[loanreviewisActive ? 'progress-step-active' : 'progress-step']">
                                <div class="progress-circle"></div>
                                <h2 class="progress-label-left">Loan Review</h2>
                            </div>
                            <div class="progress-step">
                                <div class="progress-circle"></div>
                                <h2 class="progress-label-center">Add BVN/accounts</h2>
                            </div>
                            <div class="progress-step">
                                <div class="progress-circle"></div>
                                <h2 class="progress-label-right">Mark complete</h2>
                            </div>
                        </div> -->

                        <div class="form-group2">
                            <p class="input-label2">Loan title</p>
                            <input type="text" v-model="loanTitle" placeholder="Loan Title" class="input-field2">
                        </div>

                        <div class="form-field">
                            <p class="form-label">Loan description</p>
                            <textarea v-model="loanDescription" placeholder="Loan description"
                                class="textarea-field"></textarea>
                        </div>

                        <div class="form-group2">
                            <p class="input-label2">Loan amount</p>
                            <input type="text" v-model="loanAmount" placeholder="Loan amount" class="input-field2">
                        </div>

                        <div class="form-group2">
                            <p class="input-label2">Loan duration</p>
                            <div class="duration-container">
                                <div class="duration-select">
                                    <select v-model="loanDuration" style="border: none;" class="select-input">
                                        <option value="" disabled selected>3</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                    <select v-model="loanDurationUnit" style="border: none;" class="select-input">
                                        <option value="" disabled selected>Months</option>
                                        <option value="6-months">6</option>
                                        <option value="12-months">12</option>
                                        <option value="24-months">24</option>
                                    </select>
                                </div>
                                <div class="duration-cost">
                                    <h1>N6,000/month</h1>
                                </div>
                            </div>
                        </div>

                        <div class="form-group2">
                            <p class="input-label2">Loan interest rate</p>
                            <div class="interest-rate-container">
                                <select v-model="loanInterestRate" style="border: none;" class="select-input">
                                    <option value="" disabled selected>4%</option>
                                    <option value="1">5%</option>
                                    <option value="2">6%</option>
                                    <option value="3">7%</option>
                                </select>
                                <div class="total-cost">
                                    <h1>Total: N126,000</h1>
                                </div>
                            </div>
                        </div>

                        <div class="form-group2">
                            <p class="input-label2">Moratorium</p>
                            <div class="moratorium-select">
                                <select v-model="moratorium" style="border: none;" class="select-input">
                                    <option value="" disabled selected>3 Days</option>
                                    <option value="1">4 Days</option>
                                    <option value="2">5 Days</option>
                                    <option value="3">6 Days</option>
                                </select>
                            </div>
                        </div>

                        <div class="form-group2">
                            <p class="input-label2">Borrower’s Details</p>
                            <input type="text" v-model="borrowerDetails" placeholder="Borrower’s Details"
                                class="input-field2">
                        </div>

                        <div class="form-group2">
                            <input type="text" v-model="additionalDetails1" placeholder="Additional Details"
                                class="input-field2">
                        </div>

                        <div class="form-group2">
                            <input type="text" v-model="additionalDetails2" placeholder="Additional Details"
                                class="input-field2">
                        </div>

                        <div class="form-group2">
                            <input type="text" v-model="additionalDetails3" placeholder="Additional Details"
                                class="input-field2">
                        </div>

                        <div class="submit-button-container">
                            <button v-if="formsubmitted === true" type="submit" class="submit-button">ACCEPT LOAN
                                OFFER</button>
                        </div>
                    </div>
                </form>
            </div>


            <!-- Accounts -->
            <div v-if="account === true" class="form-container3">
                <form @submit.prevent="handleSubmit" class="form3">
                    <div class="form-inner3">
                        <!-- Progress bar -->
                        <!-- <div class="progress-bar">
                            <div class="progress-step active">
                                <div class="step-dot"></div>
                                <h2 class="step-label text-left">Loan Review</h2>
                            </div>
                            <div :class="['progress-step', account ? 'active' : 'inactive']">
                                <div class="step-dot"></div>
                                <h2 class="step-label text-center">Add BVN/accounts</h2>
                            </div>
                            <div class="progress-step inactive">
                                <div class="step-dot"></div>
                                <h2 class="step-label text-right">Mark complete</h2>
                            </div>
                        </div> -->

                        <h2 class="accounts-title">ACCOUNTS (3/3)</h2>
                        <div class="step-container">
                            <div class="step-header">
                                <span class="step-number">STEP 1:</span>
                                <p class="step-title">VERIFY YOUR BVN</p>
                                <button class="why-bvn">WHY BVN ?</button>
                            </div>
                            <input type="text" v-model="loanTitle" placeholder="ADD BVN" class="input-field3">
                            <div class="verify-container">
                                <p class="verify-name">STEPHEN MICHAEL</p>
                                <button class="verify-button" @click="handleremoveoverlay">VERIFY NOW</button>
                            </div>
                        </div>

                        <div class="relative">
                            <!-- Overlay -->
                            <!-- <div v-if="showOverlay" class="overlay"></div> -->
                            <div class="relative-content">
                                <div class="step-content">
                                    <div class="step-header">
                                        <span class="step-number">STEP 2:</span>
                                        <p class="step-title">CONNECT YOUR ACCOUNTS FOR REPAYMENT</p>
                                    </div>
                                    <p class="step-description">This account will be automatically debited to repay your
                                        loan as per schedule. <span class="bold-text">Only use account that has
                                            consistent inflow.</span></p>
                                    <button class="account-item connected">
                                        <div class="account-details">
                                            <p class="account-name">Zenith Bank</p>
                                            <!-- <svg class="check-icon">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M5 13l4 4L19 7" />
                                            </svg> -->
                                        </div>
                                        <h2 class="account-status">1/3</h2>
                                    </button>
                                    <button class="account-item" @click="handlenewAccount">
                                        <div class="account-details">
                                            <!-- <svg class="add-icon">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M12 4.5v15m7.5-7.5h-15" />
                                            </svg> -->
                                            <p class="account-name">Add bank</p>
                                        </div>
                                        <h2 class="account-status">2/3</h2>
                                    </button>
                                    <button class="account-item" @click="handlenewAccount">
                                        <div class="account-details">
                                            <!-- <svg class="add-icon">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M12 4.5v15m7.5-7.5h-15" />
                                            </svg> -->
                                            <p class="account-name">Add bank</p>
                                        </div>
                                        <h2 class="account-status">3/3</h2>
                                    </button>
                                </div>
                                <p class="note-text">Fin-Tech bank accounts such as Opay, MoniePoint, Kuda, etc., are
                                    not accepted unless they are business accounts with proof of consistent monthly
                                    inflow in the bank statement.</p>

                                <div class="step-3-container">
                                    <div class="step-header">
                                        <span class="step-number">STEP 3:</span>
                                    </div>
                                    <button class="complete-button" @click="handleMarkcomplete">
                                        <p class="complete-text">MARK COMPLETE</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

            <!-- New Account -->
            <div v-if="newAccount === true" class="form-container4">
                <form @submit.prevent="handleSubmit" class="form4">
                    <div class="form-content4">
                        <button class="back-button4" @click="handleCloseNewAccount">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" class="back-icon4">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            <p class="back-text4">Back</p>
                        </button>
                        <div>
                            <h2 class="header-text4">REPAYMENT BANK ACCOUNT (3/3)</h2>
                        </div>
                        <div class="upload-container4">
                            <label for="file-upload" class="upload-label4">
                                <input id="file-upload" type="file" accept="application/pdf" class="file-input4" />
                                <h2 class="upload-text4">UPLOAD BANK STATEMENT (3-6 months)</h2>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor" class="upload-icon4">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M3 15a4 4 0 004 4h10a4 4 0 100-8h-1a5 5 0 00-9-3 3 3 0 00-4 7zm7 1V8m0 0l-3 3m3-3l3 3" />
                                </svg>
                            </label>
                        </div>
                        <div class="form-group2">
                            <input type="text" v-model="additionalDetails3" placeholder="ENTER ACCOUNT NUMBER"
                                class="input-field2">
                        </div>

                        <div class="select-container4">
                            <div class="select-wrapper4">
                                <select v-model="moratorium" name="moratorium" id="moratorium" class="select-input4">
                                    <option value="" disabled selected>SELECT BANK</option>
                                    <option value="1">Opay</option>
                                    <option value="2">Zenith Bank</option>
                                    <option value="3">GtBank</option>
                                </select>
                            </div>
                        </div>
                        <div class="info-container4">
                            <h2 class="info-text4">STEPHEN MICHAEL</h2>
                        </div>
                        <div class="checkbox-container4">
                            <input type="checkbox" id="myCheckbox" name="myCheckbox" class="checkbox-input4">
                            <p class="checkbox-text4">
                                I hereby consent to a monthly repayment schedule and authorize Zedla to initiate
                                automatic debits from my account to fulfill my loan obligations, effective upon loan
                                disbursement.
                            </p>
                        </div>
                        <button class="submit-button4" @click="handleremoveoverlay">
                            ADD REPAYMENT ACCOUNT
                        </button>
                    </div>
                </form>
            </div>

        </div>

        <div class="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-10" v-if="isSidebarOpen" @click="toggleSidebar">
        </div>

        <!-- Modal -->
        <createdModal :show="isCreated" @update:show="isCreated = $event">
            <div class="flex flex-col justify-between gap-10 items-center">
                <h2 class="font-bold text-[30px] lg:text-[50px] font-Montserrat text-[#0961E3]">Congratulations!</h2>
                <p
                    class="font-normal text-[16px] lg:text-[20px] font-Montserrat text-[#000] w-full lg:w-[70%] text-center">
                    Your loan
                    application
                    has
                    been sent.
                    Our team will review your details
                    and get back to you in 72 hours or less.</p>

                <button>
                    <p class="underline font-normal text-[20px] font-Montserrat text-[#000] w-full text-center">
                        RETURN TO DASHBOARD</p>
                </button>
            </div>
        </createdModal>
    </div>
</template>

<script>
import createdModal from '../components/ui/modal/createdModal.vue';

export default {
    components: {
        createdModal,
    },
    data() {
        return {
            isSidebarOpen: false,
            formsubmitted: false,
            loanreviewisActive: false,
            account: false,
            newAccount: false,
            isCreated: false,
            formActive: true,
            showOverlay: true,
            loanTitle: '',
            loanDescription: '',
            loanAmount: '',
            loanDuration: '',
            loanDurationUnit: '',
            loanInterestRate: '',
            moratorium: '',
            borrowerDetails: '',
            additionalDetails1: '',
            additionalDetails2: '',
            additionalDetails3: '',
        };
    },
    methods: {
        toggleSidebar() {
            this.isSidebarOpen = !this.isSidebarOpen;
        },
        handleMarkcomplete() {
            this.isCreated = true;
        },
        handleformSubmit() {
            this.formsubmitted = true;
            this.loanreviewisActive = true;
            this.formActive = false;
        },
        handlenewAccount() {
            this.account = false;
            this.newAccount = true;
        },
        handleCloseNewAccount() {
            this.account = true;
            this.newAccount = false;
        },
        handleremoveoverlay() {
            this.showOverlay = false;
        },
        handleSubmit() {
            const formData = {
                loanTitle: this.loanTitle,
                loanDescription: this.loanDescription,
                loanAmount: this.loanAmount,
                loanDuration: this.loanDuration,
                loanDurationUnit: this.loanDurationUnit,
                loanInterestRate: this.loanInterestRate,
                moratorium: this.moratorium,
                borrowerDetails: this.borrowerDetails,
                additionalDetails1: this.additionalDetails1,
                additionalDetails2: this.additionalDetails2,
                additionalDetails3: this.additionalDetails3,
            };

            console.log('Form Data:', formData);
            this.account = true;
            this.formsubmitted = false;
            this.formActive = false;
        },
    },
};
</script>

<style scoped>
.loanContainer {
    display: flex;
    width: 100%;
    height: 100vh;
    position: relative;
    padding: 0%;
}

.main-content {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 80%;
    z-index: 0;
}


.sidebar-class {
    position: absolute;
    z-index: 20;
    height: 100%;
    background-color: black;
    transition: all 0.3s;
}

.sidebar {
    transition: width 0.3s;
}

.sidebar-open {
    width: 70%;
}

.sidebar-closed {
    width: 0;
}

.sidebar-lg {
    display: flex;
}

.sidebar-hidden {
    display: none;
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

.form-container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.form-content {
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
    width: 100%;
    height: 731px;
    padding: 0 24px;
    overflow-y: auto;
}

.form-field {
    position: relative;
    margin: 16px 0;
    border: 1px solid #2879FD;
    width: 100%;
    padding: 16px 0;
    border-radius: 12px;
    margin: 30px 0;
}

.form-label {
    position: absolute;
    top: -18px;
    left: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    padding: 4px 16px;
    border-radius: 12px;
    background-color: #ECF3FF;
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
    outline: none;

}

.input-field,
.textarea-field {
    width: auto;
    height: 100%;
    padding: 16px;
    border-radius: 12px;
    outline: none;
    border: none;
}

.textarea-field {
    resize: none;
}

.duration-container,
.interest-container,
.moratorium-container {
    display: flex;
    padding: 8px 16px;
    justify-content: space-between;
    align-items: center;
}

.duration-select-group,
.interest-select-group {
    display: flex;
    width: 50%;
    justify-content: start;
    align-items: center;
    border-right: 1px solid #2879FD;
    padding: 0 8px;
}

.select-field {
    outline: none;
    font-size: 20px;
    font-family: 'Montserrat', sans-serif;
}

.duration-total,
.interest-total {
    width: 50%;
    padding: 0 8px;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    color: #2879FD;
}

.button-container {
    display: flex;
    justify-content: center;
    width: 100%;
}

.submit-button {
    width: 100%;
    height: 50px;
    background-color: #1E40AF;
    color: white;
    font-weight: bold;
    border-radius: 12px;
    margin: 16px 0;
    font-family: 'Montserrat', sans-serif;
    cursor: pointer;
    border: none;
}


/*  */

.form-container2 {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.form2 {
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

.form-content2 {
    height: 731px;
    padding: 0 24px;
    width: 100%;
    overflow-y: auto;
}

.progress-bar {
    margin-top: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
}

.progress-step,
.progress-step-active {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-top: 4px solid #ddd;
    transition: all 0.3s;
}

.progress-step-active {
    border-top-color: #2879FD;
}

.progress-circle {
    position: absolute;
    top: -10px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: #2879FD;
}

.progress-label-left,
.progress-label-center,
.progress-label-right {
    margin-top: 8px;
    font-size: 10px;
    font-weight: bold;
    font-family: 'Montserrat', sans-serif;
    color: #2879FD;
}

.progress-label-left {
    text-align: left;
    width: 100%;
}

.progress-label-center {
    text-align: center;
    width: 100%;
}

.progress-label-right {
    text-align: right;
    width: 100%;
}

.form-group2 {
    position: relative;
    margin: 32px 0;
    border: 1px solid #2879FD;
    padding: 16px;
    border-radius: 12px;
}

.description {
    height: 100px;
    position: relative;
    margin: 32px 0;
    border: 1px solid #2879FD;
    padding: 16px;
    border-radius: 12px;
}

.input-label2 {
    position: absolute;
    top: -18px;
    left: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
    background-color: #ECF3FF;
    padding: 4px 8px;
    border-radius: 12px;
}

.input-field2 {
    height: 100%;
    width: 100%;
    border: none;
    outline: none;
    /* padding: 16px; */
    border-radius: 12px;
}

.textarea-field2 {
    height: 100%;
    width: 100%;
    padding: 16px;
    border-radius: 12px;
    outline: none;
    resize: none;
}

.duration-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 16px;
    height: 100%;
}

.duration-select {
    display: flex;
    justify-content: start;
    align-items: center;
    border-right: 1px solid #2879FD;
    width: 50%;
    padding-right: 8px;
}

.select-input {
    outline: none;
    font-size: 20px;
    font-family: 'Montserrat', sans-serif;
    font-weight: normal;
}

.duration-cost {
    width: 50%;
    padding-left: 8px;
}

.duration-cost h1 {
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    color: #2879FD;
}

.interest-rate-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 16px;
    height: 100%;
}

.total-cost {
    width: 50%;
    padding-left: 8px;
}

.total-cost h1 {
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    color: #2879FD;
}

.moratorium-select {
    display: flex;
    justify-content: start;
    align-items: center;
    width: 50%;
    padding: 0 16px;
}

.submit-button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.submit-button {
    width: 100%;
    height: 50px;
    background-color: #2879FD;
    color: white;
    font-weight: bold;
    border-radius: 12px;
    margin-top: 16px;
}

/*  3 */
.form-container3 {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0%;
}

.form3 {
    width: 100%;
    max-width: 541px;
    border: 1px solid #8F8F8F;
    border-radius: 12px;
    height: 751px;
    padding: 0%;
}

.form-inner3 {
    height: 731px;
    /* padding: 1.5rem; */
    /* padding: 10px; */
    width: 100%;
    overflow-y: auto;
}

.progress-bar3 {
    margin-top: 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    margin-bottom: 2.5rem;
}

.progress-step3 {
    flex: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all 0.3s;
}

.progress-step.active3 {
    border-top: 4px solid #2879FD;
}

.progress-step.inactive3 {
    border-top: 4px dotted #ddd;
}

.step-dot {
    position: absolute;
    top: -10px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: #2879FD;
}

.step-label {
    margin-top: 0.5rem;
    font-size: 10px;
    font-weight: bold;
    font-family: Montserrat, sans-serif;
    color: #2879FD;
    width: 100%;
}

.accounts-title {
    color: #000;
    font-size: 18px;
    font-family: Montserrat, sans-serif;
    font-weight: normal;
    padding: 1rem;
}

.step-container {
    margin-top: 20px;
    padding: 1rem;
    border-radius: 12px;
}

.step-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.step-number {
    font-weight: bold;
}

.step-title {
    font-family: Montserrat, sans-serif;
    margin-left: 0.75rem;
    font-size: 18px;
    text-transform: uppercase;
}

.why-bvn {
    color: #2879FD;
    font-size: 18px;
    font-family: Montserrat, sans-serif;
    font-weight: normal;
    background-color: transparent;
    border: none;
}

.input-field3 {
    border: 1px solid #2879FD;
    border-radius: 5px;
    /* height: 66.11px; */
    padding: 1rem 20px;
    outline: none;
    width: 90%;
}

.verify-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.5rem;
}

.verify-name {
    font-family: Montserrat, sans-serif;
    font-size: 18px;
    text-transform: uppercase;
}

.verify-button {
    width: 100%;
    max-width: 166px;
    background-color: #0961E3;
    font-weight: bold;
    font-size: 16px;
    font-family: Montserrat, sans-serif;
    height: 51px;
    color: #fff;
    border-radius: 4px;
    border: none;
}

.overlay {
    position: absolute;
    inset: 0;
    border-radius: 12px;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
}

.relative-content {
    position: relative;
    padding: 1rem;
    z-index: 0;
}

.step-content {
    margin-top: 1.25rem;
}

.step-description {
    font-family: Montserrat, sans-serif;
    font-size: 12px;
    font-weight: normal;
}

.bold-text {
    font-weight: bold;
}

.account-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 66.11px;
    /* padding-left: 1.5rem;
    padding-right: 1.5rem; */
    border-radius: 12px;
    margin-top: 0.75rem;
    background-color: #ECF3FF;
    width: 100%;
    border: none;
}

.account-item.connected {
    background-color: #2879FD;
}

.account-details {
    display: flex;
    justify-content: start;
    align-items: start;
    gap: 0.5rem;
}

.account-name {
    font-family: Montserrat, sans-serif;
    font-size: 18px;
    font-weight: bold;
    color: #fff;
    text-transform: uppercase;
}

.check-icon {
    width: 1.5rem;
    height: 1.5rem;
    color: white;
}

.add-icon {
    width: 1.5rem;
    height: 1.5rem;
    color: #000;
}

.account-status {
    font-family: Montserrat, sans-serif;
    font-size: 18px;
    font-weight: bold;
}

.note-text {
    color: red;
    margin-top: 0.5rem;
    font-size: 12px;
}

.step-3-container {
    margin-top: 0.75rem;
    padding: 1rem;
}

.complete-button {
    margin-top: 1.5rem;
    width: 100%;
    background-color: #2879FD;
    height: 51px;
    border-radius: 4px;
    border: none;
    cursor: pointer;
}

.complete-text {
    font-weight: bold;
    font-size: 16px;
    font-family: Montserrat, sans-serif;
    text-transform: uppercase;
    color: #fff;
}

/* new acc */
.form-container4 {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.form4 {
    width: 100%;
    max-width: 541px;
    border: 1px solid #8F8F8F;
    border-radius: 12px;
    height: 751px;
    padding: 0 20px;
}

.form-content4 {
    height: 731px;
    /* padding: 0 24px; */
    width: 100%;
    overflow-y: auto;
}

.back-button4 {
    margin-bottom: 32px;
    margin-top: 16px;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 12px;
    background: none;
    border: none;
    cursor: pointer;
}

.back-icon4 {
    width: 24px;
    height: 24px;
}

.back-text4 {
    color: #000;
    font-size: 22px;
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
}

.header-text4 {
    color: #000;
    font-size: 18px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
}

.upload-container4 {
    margin-bottom: 8px;
    border: 1px solid #2879FD;
    background-color: #ECF5FF;
    padding: 16px;
    margin-top: 20px;
    border-radius: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 66.11px;
}

.upload-label4 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.file-input4 {
    display: none;
}

.upload-text4 {
    padding-top: 4px;
    font-family: 'Montserrat', sans-serif;
    color: #000;
    font-size: 14px;
    font-weight: 400;
}

.upload-icon4 {
    width: 24px;
    height: 24px;
    color: #575A65;
}

.input-container4 {
    margin-bottom: 8px;
    border: 1px solid #2879FD;
    width: 80%;
    height: 66.11px;
    border-radius: 12px;
}

.text-input4 {
    height: 100%;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    font-weight: 400;
    border-radius: 12px;
    color: #000;
    /* padding: 0 16px; */
    outline: none;
    border: none;
    width: 80%;
}

.select-container4 {
    margin-bottom: 8px;
    border: 1px solid #2879FD;
    width: 100%;
    padding: 16px 0;
    border-radius: 12px;
}

.select-wrapper4 {
    display: flex;
    padding: 0 16px;
    height: 100%;
    justify-content: start;
    align-items: center;
}

.select-input4 {
    outline: none;
    width: 100%;
    font-size: 20px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    outline: none;
    border: none;
}

.info-container4 {
    margin-bottom: 8px;
    border: 1px solid #2879FD;
    /* padding: 0 16px; */
    display: flex;
    justify-content: start;
    align-items: center;
    width: 100%;
    height: 66.11px;
    border-radius: 12px;
}

.info-text4 {
    font-family: 'Montserrat', sans-serif;
    color: #000;
    font-size: 18px;
    font-weight: 400;
    padding: 0 20px;
}

.checkbox-container4 {
    display: flex;
    margin-top: 24px;
    justify-content: start;
    align-items: start;
    gap: 16px;
}

.checkbox-input4 {
    width: 16px;
    height: 16px;
}

.checkbox-text4 {
    font-size: 14px;
}

.submit-button4 {
    width: 100%;
    /* max-width: 238px; */
    background-color: #0961E3;
    font-weight: 600;
    font-size: 15px;
    font-family: 'Montserrat', sans-serif;
    height: 41px;
    color: #fff;
    border-radius: 4px;
    margin-top: 24px;
    border: none;
    cursor: pointer;
}
</style>