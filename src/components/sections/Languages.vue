<template>
    <!-- languages -->
    <div class="mt-6" v-if="languagesStore.loading">
        <p class="mb-3">
            <div class="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-16"></div>
            </p>

        <div role="status" class="space-y-2.5 animate-pulse max-w-lg " >
            <div class="flex items-center w-full">
                <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
            </div>
            <div class="flex items-center w-full max-w-[480px]">
                <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-36"></div>

            </div>

            <div class="flex items-center w-full max-w-[480px]">
                <div class="h-2.5  bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>

            </div>

        </div>
    </div>

    <div class="mt-6" v-else>
        <p class="mb-3">
            <span class="text-md font-semibold text-gray-700 dark:text-gray-400">{{ t('languages') }}</span>
        </p>

        <div class="flex flex-wrap gap-2">
            <div class="flex items-center" v-for="language in languages " :key="language.id">
                <span
                    class="text-xs font-semibold px-2 py-0.5 text-blue-800 bg-blue-100 dark:bg-blue-200 dark:text-blue-800 rounded-l">{{
                        language.name }}</span>
                <span
                    class="text-xs font-semibold px-2 py-0.5 text-white bg-gray-500 dark:bg-gray-300 dark:text-blue-800 rounded-r">{{
                        language.proficiency }}</span>
            </div>

        </div>
    </div>

</template>
<script setup>
import { useI18n } from 'vue-i18n';
import { onMounted, ref, watch } from 'vue'
import { useLanguagesStore } from '@/stores/languagesStore';
import { useMainStore } from '@/stores/mainStore';

const { t } = useI18n();
const languagesStore = useLanguagesStore();
const mainStore = useMainStore();
const languages = ref({});

const fetchData = async () => {
    await languagesStore.get();
    languages.value = languagesStore.data;
    languagesStore.loading = false;

};

onMounted(async () => {
    await fetchData();
});
watch(
    () => mainStore.selectedLang,
    async (newLang, oldLang) => {
        await fetchData();
    }
);
</script>