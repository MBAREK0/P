<template>
    <li v-if="Object.keys(awards).length > 0">
        <router-link :to="{ name: 'portfolio', hash: '#honors-and-awards' }"
            :class="{ ' router-active ': activeHash === '#honors-and-awards' }"
            class=" cursor-pointer flex items-center justify-start p-1 text-md font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
            <span class="mr-2">#</span>
            <span>{{ t('honors_and_awards') }}</span>
        </router-link>
    </li>
</template>
<script setup>
import { ref, watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { useHonorsAndAwardsStore } from '@/stores/honorsAndAwardsStore';
import { useMainStore } from '@/stores/mainStore';

const HonorsAndAwardsStore = useHonorsAndAwardsStore();
const { t } = useI18n();
const route = useRoute();
const activeHash = ref(route.hash);
const awards = ref({});



watch(() => route.hash, (newHash) => {
    activeHash.value = newHash;
});

watch(
    () => HonorsAndAwardsStore.data,
    async (newData, oldData) => {
        awards.value = newData;
    }
);

onMounted(() => {
    activeHash.value = route.hash;
    awards.value = HonorsAndAwardsStore.data;
});
</script>