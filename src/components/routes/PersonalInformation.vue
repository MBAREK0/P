<template>
    
    <li v-if="Object.keys(info).length > 0" >
        <router-link :to="{ name: 'portfolio', hash: '#personal-information' }"
            :class="{ ' router-active ': activeHash === '#personal-information' }"
            class=" cursor-pointer flex items-center justify-start p-1 text-md font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
            <span class="mr-2">#</span>
            <span>{{ t('personal_information') }}</span>
        </router-link>
        <ul>
            <router-link :to="{ name: 'portfolio', hash: '#about' }"
                :class="{ ' router-active ': activeHash === '#about' }"
                class=" cursor-pointer flex items-center justify-start p-1 pl-4 text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                <span class="mr-2">•</span>
                <span>{{ t('about_me') }}</span>
                <span
                    class="hidden text-xs font-semibold px-2 py-0.5 rounded text-blue-800 bg-blue-100 dark:bg-blue-200 dark:text-blue-800">{{
                        t('new') }}</span>
            </router-link>
            <router-link :to="{ name: 'portfolio', hash: '#current-role' }"
                :class="{ ' router-active ': activeHash === '#current-role' }"
                class=" cursor-pointer flex items-center justify-start p-1 pl-4 text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                <span class="mr-2">•</span>
                <span>{{ t('current_role') }}</span>
            </router-link>
        </ul>
    </li>
</template>
<script setup>
import { ref, watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';

import { useInfoStore } from '@/stores/infoStore';
import { useMainStore } from '@/stores/mainStore';

const { t } = useI18n();
const route = useRoute();
const activeHash = ref(route.hash);

const infoStore = useInfoStore();
const mainStore = useMainStore();
const info = ref({});

watch(() => route.hash, (newHash) => {
    activeHash.value = newHash;
});

onMounted(() => {
    activeHash.value = route.hash;
    info.value = infoStore.data;
});



watch(
    () => infoStore.data,
    async (newData, oldData) => {
        info.value = newData;
    }
);
</script>