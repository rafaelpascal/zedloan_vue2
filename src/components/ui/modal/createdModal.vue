<template>
    <div v-if="show" class="modal-overlay">
        <div class="modal-content">
            <div class="modal-header">
                <button class="modal-close" @click="closeModal">
                    <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12">
                        </path>
                    </svg>
                </button>
            </div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        show: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        closeModal() {
            this.$emit('update:show', false);
        },
        beforeEnter(el) {
            el.style.opacity = 0;
        },
        enter(el) {
            el.offsetHeight; // Trigger reflow
            el.style.transition = 'opacity 0.5s ease';
            el.style.opacity = 1;
        },
        leave(el) {
            el.style.transition = 'opacity 0.5s ease';
            el.style.opacity = 0;
        },
    },
};
</script>

<style scoped>
.modal-overlay {
    position: fixed;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 50;
}

.modal-content {
    background-color: white;
    overflow-y: auto;
    margin: 0 1rem;
    /* mx-4 */
    border-radius: 0.5rem;
    /* rounded-lg */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    /* shadow-lg */
    padding: 2.5rem 1rem;
    /* py-10 px-4 */
    width: 100%;
    max-width: 714px;
    /* lg:w-[714px] */
}

.modal-header {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    margin-bottom: 0.5rem;
    /* mb-2 */
}

.modal-close {
    color: #6b7280;
    /* text-gray-500 */
    z-index: 50;
    background: none;
    /* Avoid button styles */
    border: none;
    /* Avoid button styles */
    cursor: pointer;
    /* Add pointer cursor */
}

.icon {
    width: 1.5rem;
    /* w-6 */
    height: 1.5rem;
    /* h-6 */
}
</style>
