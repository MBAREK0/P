<template>
    <section  id="experiences" class="mb-5 section" v-if="ExperiencesStore.loading">
        <div class="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>

        <div class="w-full">
        
          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
        </div>
       

        <div class="grid gap-4 grid-cols-1" >
            <div v-for="index in 1" :key="index" class="p-4 bg-white rounded-lg shadow-md dark:bg-gray-800"
               >

                <div class="flex flex-col md:flex-row items-start  md:items-center gap-2 md:gap-0 justify-between mb-3">
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
                    <div class="flex items-center justify-start gap-3">
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-16  mb-2.5"></div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-16  mb-2.5"></div>
                    </div>
                </div>

                <section class="mb-3" v-for="index in 2" :key="index">
                    <div class="w-full animate-pulse">
                        <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
                    </div>
                </section>


                <!-- skills -->
                <div class="mt-4">
                    <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                    <div class="flex flex-wrap gap-2 my-2">

                        <div class="flex items-center w-full  animate-pulse">
                            <div class="h-2.5  bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                            <div class="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                            <div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                            <div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-36"></div>
                            <div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                            <div class="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
                            <div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                            <div class="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                            <div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </section>
    
    <section id="experiences" class="mb-5 section" v-else>
        <router-link :to="{ name: 'portfolio', hash: '#experiences' }">
            <div class="flex justify-start items-center mb-3 text-3xl dark:hover:text-white">
                <span>#</span>
                <h1 class="ml-2" id="t-experiences" >{{ t('experiences') }}</h1>
            </div>
        </router-link>
        <p class="text-sm mb-3 ">{{ t('experiences_introduction') }}</p>

        <div class="grid gap-4 grid-cols-1" > 
            <div v-for="experience in experiences" :key="experience.id"
                class="p-4 bg-white rounded-lg shadow-md dark:bg-gray-800">

                <div class="flex flex-col md:flex-row items-start  md:items-center gap-2 md:gap-0 justify-between mb-3">
                    <div class="flex items-center justify-start gap-2">
                        <img :src="mainStore.baseUrl + 'images/experiences/' + experience.imageName" @click="openModal(experience.imageName)"
                            :alt="experience.organization" class="w-10 h-10 cursor-zoom-in ">
                        <div class="flex flex-col items-start justify-start ">
                            <h3 class="text-md font-semibold text-gray-800 dark:text-gray-100">{{ experience.role }}
                            </h3>
                            <p class="text-sm text-gray-600 dark:text-gray-300">{{ experience.organization }}</p>
                        </div>
                    </div>
                    <p class="text-sm text-gray-600 dark:text-gray-300">{{ getMonthYear(experience.start_date) }} - {{
                        getMonthYear(experience.end_date) }} </p>
                </div>


                <div v-if="experience.responsibilities" class="mb-3">
                    <div class="flex justify-start items-center mb-2 text-md dark:hover:text-white ">
                        <span>•</span>
                        <h1 class="ml-2">{{ t('Responsibilities') }} </h1>
                    </div>
                    <p class="text-sm ">{{ experience.responsibilities }}</p>
                </div>

                <div v-if="experience.achievements" class="mb-3">
                    <div class="flex justify-start items-center mb-2 text-md dark:hover:text-white ">
                        <span>•</span>
                        <h1 class="ml-2">{{ t('achievements') }} </h1>
                    </div>
                    <p class="text-sm ">{{ experience.achievements }}</p>
                </div>
                <!-- skills -->
                <div class="mt-4">
                    <h4 class="text-lg font-semibold text-gray-800 dark:text-gray-100">Technologies Used</h4>
                    <div class="flex flex-wrap gap-2 my-2">
                        <span v-for="technology in experience.technologies_used" :key="technology"
                            class="text-xs font-semibold px-2 py-0.5 rounded text-blue-800 bg-blue-100 dark:bg-blue-200 dark:text-blue-800">{{
                                technology }}</span>

                    </div>
                </div>

            </div>
        </div>

    </section>

    <div v-if="showModal && selectedImage"
        class="fixed inset-0 z-50 flex items-center justify-center  h-full bg-gray-900 bg-opacity-50 overflow-auto"
        @click.self="showModal = false">
        <div class="bg-white dark:bg-gray-800 rounded-lg w-full max-w-xl xl:max-w-2xl max-h-[90vh] overflow-y-auto modal-content"
            @click.stop>

            <div class="p-4 w-full flex items-center justify-center">
                <img :src="mainStore.baseUrl + 'images/experiences/' + selectedImage" alt="Image" class="w-auto h-96 ">

            </div>
        </div>
    </div>

</template>

<script setup>

import { useI18n } from 'vue-i18n';
import { onMounted, ref, watch } from 'vue'
import { useExperiencesStore } from '@/stores/experiencesStore';
import { useMainStore } from '@/stores/mainStore';

const { t } = useI18n();
const experiences = ref({});
const selectedExperience = ref({});
const ExperiencesStore = useExperiencesStore();
const mainStore = useMainStore();

const fetchData = async () => {
    await ExperiencesStore.get();
    experiences.value = ExperiencesStore.data;
    ExperiencesStore.loading = false;

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


<style scoped>
.tag {
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    background-color: #f0f0f0;
}

.tag img {
    width: 2rem;
    height: 2rem;
}

.tag:hover {
    background-color: #a0a0a0;
    color: #ffffff !important;
}


.fixed {
    overflow: auto;
}

 








.fixed-container::-webkit-scrollbar {
    display: none;
}
</style>