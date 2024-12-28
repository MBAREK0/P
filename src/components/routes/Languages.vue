<template>
    <li v-if="Object.keys(languages).length > 0">
        <router-link :to="{ name: 'portfolio', hash: '#languages' }"
            :class="{ ' router-active ': activeHash === '#languages' }"
            class=" cursor-pointer flex items-center justify-start p-1 text-md font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
            <span class="mr-2">#</span>
            <span>{{ t('languages') }}</span>
        </router-link>
    </li>
</template>
<script setup>
import { ref, watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { useLanguagesStore } from '@/stores/languagesStore';
import { useMainStore } from '@/stores/mainStore';

const languagesStore = useLanguagesStore();
const { t } = useI18n();
const route = useRoute();
const activeHash = ref(route.hash);
const languages = ref({});



watch(() => route.hash, (newHash) => {
    activeHash.value = newHash;
});

watch(
    () => languagesStore.data,
    async (newData, oldData) => {
        languages.value = newData;
    }
);

onMounted(() => {
    activeHash.value = route.hash;
    languages.value = languagesStore.data;
});
</script>