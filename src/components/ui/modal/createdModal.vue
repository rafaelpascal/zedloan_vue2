<template>
    <transition name="modal" @before-enter="beforeEnter" @enter="enter" @leave="leave">
        <div v-if="show" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div class="bg-white overflow-y-auto mx-4 rounded-lg shadow-lg px-4 lg:px-6 w-full lg:w-[714px] py-10">
                <div class="flex justify-end items-end mb-2">
                    <button class="text-gray-500 z-50" @click="closeModal">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                <slot></slot>
            </div>
        </div>
    </transition>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    show: {
        type: Boolean,
        default: false,
    },
});

const emit = defineEmits(['update:show']);

function closeModal() {
    emit('update:show', false);
}

function beforeEnter(el) {
    el.style.opacity = 0;
}

function enter(el) {
    el.offsetHeight;
    el.style.transition = 'opacity 0.5s ease';
    el.style.opacity = 1;
}

function leave(el) {
    el.style.transition = 'opacity 0.5s ease';
    el.style.opacity = 0;
}
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
    transition: opacity 0.5s ease;
}

.modal-enter,
.modal-leave-to {
    opacity: 0;
}
</style>
