<template>
    <li v-if="Object.keys(skills).length > 0">
        <router-link :to="{ name: 'portfolio', hash: '#skills' }"
            :class="{ ' router-active ': activeHash === '#skills' }"
            class=" cursor-pointer flex items-center justify-start p-1 text-md font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
            <span class="mr-2">#</span>
            <span>{{ t('skills') }}</span>
        </router-link>
    </li>
</template>
<script setup>
import { ref, watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { useSkillsStore } from '@/stores/skillsStore';
import { useMainStore } from '@/stores/mainStore';

const skillsStore = useSkillsStore();
const { t } = useI18n();
const route = useRoute();
const activeHash = ref(route.hash);
const skills = ref({});



watch(() => route.hash, (newHash) => {
    activeHash.value = newHash;
});

watch(
    () => skillsStore.data,
    async (newData, oldData) => {
        skills.value = newData;
    }
);

onMounted(() => {
    activeHash.value = route.hash;
    skills.value = skillsStore.data;
});
</script>