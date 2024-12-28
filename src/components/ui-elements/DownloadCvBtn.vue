<template>
    <!-- <a :href="mainStore.ApiUrl + '/document/download/'+ mainStore.email +'/cv'" target="_blank"
        class="flex w-full justify-center items-center bg-blue-500 text-white text-sm font-semibold py-2 px-3 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
        <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 12l8 8 8-8M12 3v9" />
        </svg>
        {{ t('download_cv') }}
    </a> -->
    <div class="w-[200px] absolute bottom-5" v-if="Object.keys(info).length > 0">
        <a :href="mainStore.ApiUrl + '/document/download/'+ mainStore.email +'/cv'" target="_blank"
            class="flex w-full justify-center items-center bg-blue-500 text-white text-sm font-semibold py-2 px-3 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M4 12l8 8 8-8M12 3v9" />
            </svg>
            {{ t('download_cv') }}
        </a>
        <router-link  :to="{ name: 'portfolio', hash: '#contact-me' }" >
            <button
            class="mt-2 flex w-full justify-center items-center bg-blue-500 text-white text-sm font-semibold py-2 px-3 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
            <i class="fas fa-envelope text-white w-4 h-4 mr-2"  style="font-size: 1rem;" aria-hidden="true"></i>
                {{ t('contact_me') }}

            </button>
        </router-link>
    </div>

    <div class="w-[200px] absolute bottom-5 animate-pulse" v-else>
        <div class="h-[36px] bg-gray-200 py-2 px-3 rounded dark:bg-gray-700 w-full "></div>
        <div class="h-[36px] bg-gray-200 py-2 px-3 rounded dark:bg-gray-700 w-full mt-2"></div>
    </div>
</template>
<script setup>
import { ref, watch, onMounted } from 'vue';
import { useI18n } from 'vue-i18n'
import { useMainStore } from '@/stores/mainStore';

import { useInfoStore } from '@/stores/infoStore';


const mainStore = useMainStore()
const { t } = useI18n()
const infoStore = useInfoStore();
const info = ref({});


onMounted(() => {
  
    info.value = infoStore.data;
});



watch(
    () => infoStore.data,
    async (newData, oldData) => {
        info.value = newData;
    }
);

</script>