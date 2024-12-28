<template>

    <div class="flex items-center my-6 animate-pulse" v-if="infoStore.loading">
        <svg class="w-12 h-12 me-3 text-gray-200 dark:text-gray-700" aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path
                d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
        </svg>
        <div>
            <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
            <div class="w-36 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
    </div>

    <div class="flex items-center justify-between my-6" v-else>
        <div class="flex items-center">
            <img :src="require('@/assets/images/profile.png')" alt="avatar" class="w-12 h-12 rounded-full">
            <div class="ml-3">
                <h3 class="text-md font-medium  text-gray-600 dark:text-gray-400">{{ info.firstName + ' ' + info.lastName
                    }}</h3>
                <p class="text-sm text-gray-600 dark:text-gray-400">{{ info.position }}</p>
            </div>
        </div>
    </div>

</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
import { useInfoStore } from '@/stores/infoStore';
import { useMainStore } from '@/stores/mainStore';

const infoStore = useInfoStore();
const mainStore = useMainStore();
const info = ref({});

onMounted(async () => {
    info.value = infoStore.data;
});

watch(
    () => infoStore.data,
    async (newData, oldData) => {
        info.value = newData;
    }
);
</script>