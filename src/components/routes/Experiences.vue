<template>
    <li v-if="Object.keys(experiences).length > 0">
        <router-link :to="{ name: 'portfolio', hash: '#experiences' }"
        :class="{ ' router-active ': activeHash === '#experiences' }"
        class=" cursor-pointer flex items-center justify-start p-1 text-md font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
        <span class="mr-2">#</span>
        <span>{{ t('experiences') }}</span>
    </router-link>
    </li>
</template>
<script setup>
import { ref, watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { useExperiencesStore } from '@/stores/experiencesStore';
import { useMainStore } from '@/stores/mainStore';

const ExperiencesStore = useExperiencesStore();
const { t } = useI18n();
const route = useRoute();
const activeHash = ref(route.hash);
const experiences = ref({});



watch(() => route.hash, (newHash) => {
    activeHash.value = newHash;
});

watch(
    () => ExperiencesStore.data,
    async (newData, oldData) => {
        experiences.value = newData;
    }
);

onMounted(() => {
    activeHash.value = route.hash;
    experiences.value = ExperiencesStore.data;
});
</script>