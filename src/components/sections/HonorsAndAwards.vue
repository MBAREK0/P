<template>
    <section id="honors-and-awards" class="mb-5 section" v-if="HonorsAndAwardsStore.loading">
        <div class="mb-5 section">
            <div class="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-64 mb-3"></div>
        </div>

        <div class="grid grid-cols-1 gap-4 mt-4 xl:grid-cols-2 w-full">

            <div role="status" v-for="index in 2" :key="index" class=" p-4  rounded shadow-lg animate-pulse md:p-6 ">
                <div class="flex flex-col md:flex-row items-start  md:items-center gap-2 md;gap-0 justify-between mb-3">
                    <div class="flex items-center justify-start gap-2">
                        <div role="status"
                            class="flex items-center justify-center h-10 w-10 bg-gray-300 rounded animate-pulse dark:bg-gray-700">
                            <svg class="w-3 h-3 text-gray-200 dark:text-gray-600" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                                <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                                <path
                                    d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z" />
                            </svg>
                        </div>
                        <div class="flex flex-col items-start justify-start animate-pulse">
                            <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-1"></div>
                            <div class="w-24 h-2 bg-gray-200 rounded-full dark:bg-gray-700 "></div>
                        </div>
                    </div>

                    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-16  mb-2.5"></div>

                </div>
                <section>
                    <div class="w-full animate-pulse">
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
                    </div>
                </section>
            </div>

        </div>
    </section>
    <section id="honors-and-awards" class="mb-5 section" v-else>
        <router-link :to="{ name: 'portfolio', hash: '#honors-and-awards' }">
            <div class="flex justify-start items-center mb-3 text-3xl dark:hover:text-white">
                <span>#</span>
                <h1 class="ml-2"  id="t-honors-and-awards"  >{{ t('honors_and_awards') }} </h1>
            </div>
        </router-link>

        <div class="grid grid-cols-1 gap-4 mt-4 xl:grid-cols-2 w-full">

            <div class="card p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md" v-for="award in awards "
                :key="award.id">
                <div class="flex flex-col md:flex-row items-start  md:items-center gap-2 md;gap-0 justify-between mb-3">
                    <div class="flex items-center justify-start gap-2">
                        <img :src="mainStore.baseUrl + 'images/awards/' + award.imageName" alt="Image"
                            @click="openModal(award.imageName)" class="mt-2 w-10 h-10 cursor-zoom-in"
                            v-if="award.imageName">
                        <div class="flex flex-col items-start justify-start ">
                            <h3 class="text-md font-semibold text-gray-800 dark:text-gray-100">{{ award.title }}</h3>
                            <p class="text-sm text-gray-800 dark:text-gray-100">{{ award.issuingOrganization }}</p>
                        </div>
                    </div>
                    <p class="text-sm text-gray-600 dark:text-gray-300">{{ getMonthYear(award.date) }}</p>
                </div>
                <p class="text-xs text-gray-600 dark:text-gray-300">{{ award.description }}</p>
            </div>


        </div>
    </section>
    <div v-if="showModal && selectedImage"
        class="fixed inset-0 z-50 flex items-center justify-center  h-full bg-gray-900 bg-opacity-50 overflow-auto"
        @click.self="showModal = false">
        <div class="bg-white dark:bg-gray-800 rounded-lg w-full max-w-xl xl:max-w-2xl max-h-[90vh] overflow-y-auto modal-content"
            @click.stop>

            <div class="p-4 w-full flex items-center justify-center">
                <img :src="mainStore.baseUrl + 'images/awards/' + selectedImage" alt="Image" class="w-auto h-96 ">

            </div>
        </div>
    </div>
</template>


<script setup>
import { useI18n } from 'vue-i18n';
import { onMounted, ref, watch } from 'vue'
import { useHonorsAndAwardsStore } from '@/stores/honorsAndAwardsStore';
import { useMainStore } from '@/stores/mainStore';

const { t } = useI18n();
const HonorsAndAwardsStore = useHonorsAndAwardsStore();
const mainStore = useMainStore();
const awards = ref({});


const fetchData = async () => {
    await HonorsAndAwardsStore.get();
    awards.value = HonorsAndAwardsStore.data;
    HonorsAndAwardsStore.loading = false;

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


const getMonthYear = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long' };
    return date.toLocaleDateString('en-US', options);
};

const showModal = ref(false);
const selectedImage = ref({});
const openModal = (image) => {
    selectedImage.value = image;
    showModal.value = true;
}
</script>
