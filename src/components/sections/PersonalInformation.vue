<template>

    <section v-if="infoStore.loading">
        <div id="personal-information" class="mb-5 section">
            <div class="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-3"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
        </div>
        <section id="about"  class="mb-5 section">
            <div class="w-full">
                <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
            </div>
        </section>
        <section id="current-role" class="mb-5 section">
            <div class="w-full">
                <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
            </div>
        </section>
    </section>

    <section v-else>

        <section id="personal-information" class="mb-5 section">
            <router-link :to="{ name: 'portfolio', hash: '#personal-information' }">
                <div class="flex justify-start items-center mb-3 text-3xl dark:hover:text-white">
                    <span>#</span>
                    <h1 class="ml-2" id="t-personal-information">{{ t('personal_information') }} </h1>
                </div>
            </router-link>
            <p class="text-sm ">{{ info.presentation }}
            </p>
        </section>

        <section id="about" class="mb-5 section">
            <router-link :to="{ name: 'portfolio', hash: '#about' }">
                <div class="flex justify-start items-center mb-3 text-xl dark:hover:text-white ">
                    <span>•</span>
                    <h1 class="ml-2" id="t-about" >{{ t('about_me') }} </h1>
                </div>
            </router-link>
            <p class="text-sm ">{{ info.about }}</p>
        </section>

        <section id="current-role" class="mb-5 section">
            <router-link :to="{ name: 'portfolio', hash: '#current-role' }">
                <div class="flex justify-start items-center mb-3 text-xl dark:hover:text-white">
                    <span>•</span>
                    <h1 class="ml-2" id="t-current-role" >{{ t('current_role') }} </h1>
                </div>
            </router-link>
            <p class="text-sm ">{{ info.currentRole }}</p>
        </section>
    </section>



</template>
<script setup>
import { useI18n } from 'vue-i18n';
import { onMounted, ref, watch } from 'vue'
import { useInfoStore } from '@/stores/infoStore';
import { useMainStore } from '@/stores/mainStore';

const { t } = useI18n();
const infoStore = useInfoStore();
const mainStore = useMainStore();
const info = ref({});

const fetchData = async () => {
    await infoStore.get();
    info.value = infoStore.data;
    infoStore.loading = false;

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