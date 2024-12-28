<template>
    <li v-if="Object.keys(educations).length > 0">
        <router-link :to="{ name: 'portfolio', hash: '#educations' }"
            :class="{ ' router-active ': activeHash === '#educations' }"
            class=" cursor-pointer flex items-center justify-start p-1 text-md font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
            <span class="mr-2">#</span>
            <span>{{ t('educations') }}</span>
        </router-link>
    </li>
</template>
<script setup>
import { ref, watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { useEducationsStore } from '@/stores/educationsStore';
import { useMainStore } from '@/stores/mainStore';

const educationsStore = useEducationsStore();
const { t } = useI18n();
const route = useRoute();
const activeHash = ref(route.hash);
const educations = ref({});



watch(() => route.hash, (newHash) => {
    activeHash.value = newHash;
});

watch(
    () => educationsStore.data,
    async (newData, oldData) => {
        educations.value = newData;
    }
);

onMounted(() => {
    activeHash.value = route.hash;
    educations.value = educationsStore.data;
});
</script>