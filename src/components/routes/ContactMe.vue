<template>

    <li v-if="Object.keys(info).length > 0">

        <router-link :to="{ name: 'portfolio', hash: '#contact-me' }"
                        :class="{ ' router-active ': activeHash === '#contact-me' }"
                        class=" cursor-pointer flex items-center justify-start p-1 text-md font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                        <span class="mr-2">#</span>
                        <span>{{ t('contact_me') }}</span>
                    </router-link>

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