<template>
    <transition name="modal" @before-enter="beforeEnter" @enter="enter" @leave="leave">
        <div v-if="show" class="modal-overlay">
            <div class="modal-content">
                <slot></slot>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    props: {
        show: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        closeModal() {
            console.log("Close modal clicked");
            this.$emit('input', false);
        },
        beforeEnter(el) {
            el.style.opacity = 0;
        },
        enter(el) {
            el.offsetHeight; // trigger reflow
            el.style.transition = 'opacity 0.5s ease';
            el.style.opacity = 1;
        },
        leave(el) {
            el.style.transition = 'opacity 0.5s ease';
            el.style.opacity = 0;
        }
    }
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
    padding: 1rem;
    border-radius: 0.5rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 60%;
    height: 90%;
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

/* Transition Styles */
.modal-enter-active,
.modal-leave-active {
    transition: opacity 0.5s ease;
}

.modal-enter,
.modal-leave-to {
    opacity: 0;
}
</style>
