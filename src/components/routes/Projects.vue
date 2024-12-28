<template>
    <li v-if="Object.keys(projects).length > 0">
        <router-link :to="{ name: 'portfolio', hash: '#projects' }"
        :class="{ ' router-active ': activeHash === '#projects' }"
        class=" cursor-pointer flex items-center justify-start p-1 text-md font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
        <span class="mr-2">#</span>
        <span>{{ t('projects') }}</span>
    </router-link>

    </li>
</template>
<script setup>
import { ref, watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { useProjectsStore } from '@/stores/projectsStore';
import { useMainStore } from '@/stores/mainStore';

const projectStore = useProjectsStore();
const { t } = useI18n();
const route = useRoute();
const activeHash = ref(route.hash);
const projects = ref({});



watch(() => route.hash, (newHash) => {
    activeHash.value = newHash;
});

watch(
    () => projectStore.data,
    async (newData, oldData) => {
        projects.value = newData;
    }
);

onMounted(() => {
    activeHash.value = route.hash;
    projects.value = projectStore.data;
});
</script>