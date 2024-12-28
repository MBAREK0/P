<template>
    <!-- project section -->
    <section class="mb-5 section" id="projects" v-if="projectStore.loading">
        <div class="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>

        <div class="w-full">

            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
        </div>
        <div class="grid grid-cols-1 gap-5 mt-5">
            <div class="p-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
                <div class="flex items-center justify-between mb-3">
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
                        <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-1"></div>
                    </div>
                    <div class="flex items-center justify-start gap-2">
                        <div class="h-8 bg-gray-200 rounded-md dark:bg-gray-700 w-16 "></div>
                        <div class="h-8 bg-gray-200 rounded-md dark:bg-gray-700 w-16 "></div>
                    </div>
                </div>
                <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-1"></div>
                <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-1"></div>
                <!-- skills -->

                <div class="my-3">

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

                <!-- swiper -->
                <swiper :slidesPerView="'auto'" :centeredSlides="true" :spaceBetween="30"
                    :pagination="{ clickable: true }" :modules="modules" class="mySwiper">
                    <swiper-slide>
                        <div role="status"
                            class="flex items-center justify-center w-full h-full bg-gray-300 animate-pulse dark:bg-gray-700">
                            <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                                <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                                <path
                                    d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z" />
                            </svg>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </section>
    <section v-else>

        <section id="projects" class="mb-5 section">
            <router-link :to="{ name: 'portfolio', hash: '#projects' }">
                <div class="flex justify-start items-center mb-3 text-3xl dark:hover:text-white">
                    <span>#</span>
                    <h1 class="ml-2" id="t-projects">{{ t('projects') }}</h1>
                </div>
            </router-link>
            <p class="text-sm">{{ t('projects_introduction') }}</p>
        </section>
        
        <section>
            <ul>
                <li v-for="project in projects" :key="project.id" class="flex items-center justify-start">
                    <router-link :to="{ name: 'portfolio', hash: `#project${project.id}` }"
                        class="cursor-pointer flex items-center justify-start p-1 pl-4 text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                        <span class="mr-2">•</span>
                        <span class="mr-2">{{ project.name }}</span>

                    </router-link>
                    <div class="flex flex-wrap">
                        <span class="mr-1"> &#91;</span>
                        <span v-for="(technology, index) in project.technologies" :key="technology"
                            class="text-[14px] dark:text-blue-100 text-blue-800 m-0 p-0">
                            {{ technology }}
                            <span v-if="index < project.technologies.length - 1" class="mx-1">,</span>
                        </span>
                        <span class="ml-1">&#93;</span>
                    </div>
                </li>

            </ul>
        </section>

        <div class="grid grid-cols-1 gap-5 mt-5">
            <section class="p-4 bg-white rounded-lg shadow-md dark:bg-gray-800 mb-5 small-section  "
                v-for="project in projects" :key="project.id" :id="'project' + project.id">
                <div class="flex items-center gap-1 md:gap-2 justify-between mb-3">
                    <div class="flex items-center justify-start gap-2">
                        <img :src="mainStore.baseUrl + 'images/projects/' + project.imageName" alt="Image"
                            class="w-10 h-10 cursor-zoom-in" @click="openModal(project.imageName)">
                        <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-100">{{ project.name }}</h3>
                    </div>
                    <div class="flex items-center justify-start gap-2">
                        <div v-if="project.github_path">
                            <a :href="project.github_path" target="_blank"
                                :data-tooltip-content="`#project-github-${project.id}`"
                                class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-md text-xs px-3 py-1.5 text-center me-2 mb-2">GitHub</a>
                            <div :id="`project-github-${project.id}`" role="tooltip" class="hidden">
                                <p>source code</p>
                            </div>
                        </div>
                        <div v-if="project.host_path">
                            <a :href="project.host_path" target="_blank"
                                :data-tooltip-content="`#project-host-${project.id}`"
                                class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-md text-xs px-3 py-1.5 text-center me-2 mb-2">Demo</a>
                            <div :id="`project-host-${project.id}`" role="tooltip" class="hidden">
                                <p>view the project</p>
                            </div>
                        </div>
                    </div>
                </div>
                <p class="text-sm">{{ project.description }}</p>
                <!-- skills -->
                <div class="flex flex-wrap gap-2 my-2 mb-3">
                    <span v-for="technology in project.technologies" :key="technology"
                        class="text-xs font-semibold px-2 py-0.5 rounded text-blue-800 bg-blue-100 dark:bg-blue-200 dark:text-blue-800">
                        {{ technology }}
                    </span>
                </div>
                <!-- swiper -->
                <swiper :slidesPerView="'auto'" :centeredSlides="true" :spaceBetween="30"
                    :pagination="{ clickable: true }" :modules="modules" class="mySwiper">
                    <swiper-slide v-for="image in project.ProjectImages" :key="image">
                        <img :src="mainStore.baseUrl + 'images/projects/' + image" alt="">
                    </swiper-slide>
                </swiper>
            </section>
        </div>
    </section>
    <div v-if="showModal && selectedImage"
        class="fixed inset-0 z-50 flex items-center justify-center  h-full bg-gray-900 bg-opacity-50 overflow-auto"
        @click.self="showModal = false">
        <div class="bg-white dark:bg-gray-800 rounded-lg w-full max-w-xl xl:max-w-2xl max-h-[90vh] overflow-y-auto modal-content"
            @click.stop>

            <div class="p-4 w-full flex items-center justify-center">
                <img :src="mainStore.baseUrl + 'images/projects/' + selectedImage" alt="Image" class="w-auto h-96 ">

            </div>
        </div>
    </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { useI18n } from 'vue-i18n';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import { onMounted, ref, watch, nextTick } from 'vue';
import { useProjectsStore } from '@/stores/projectsStore';
import { useMainStore } from '@/stores/mainStore';
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';

const modules = [Pagination];
const { t } = useI18n();
const projectStore = useProjectsStore();
const mainStore = useMainStore();

const projects = ref({});

const fetchData = async () => {
    await projectStore.get();
    projects.value = projectStore.data;
    projectStore.loading = false;
};

onMounted(async () => {
    await fetchData();
    await nextTick(); 

    if (!projects.value.length === 0){
        projects.value.forEach(project => {
        const githubTooltipContent = document.querySelector(`[data-tooltip-content="#project-github-${project.id}"]`);
        const hostTooltipContent = document.querySelector(`[data-tooltip-content="#project-host-${project.id}"]`);

        if (githubTooltipContent) {
            tippy(githubTooltipContent, {
                content: githubTooltipContent.nextElementSibling.innerHTML,
                allowHTML: true,
                arrow: true,
                placement: 'top'
            });
        } else {
            console.warn(`GitHub tooltip content not found for ${project.id}`);
        }

        if (hostTooltipContent) {
            tippy(hostTooltipContent, {
                content: hostTooltipContent.nextElementSibling.innerHTML,
                allowHTML: true,
                arrow: true,
                placement: 'top'
            });
        } else {
            console.warn(`Host tooltip content not found for ${project.id}`);
        }
    });
    }

});

watch(
    () => mainStore.selectedLang,
    async (newLang, oldLang) => {
        await fetchData();
    }
);

const showModal = ref(false);
const selectedImage = ref({});
const openModal = (image) => {
    selectedImage.value = image;
    showModal.value = true;
}

</script>

<style scoped>
.swiper {
    width: 100%;
    height: 350px;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.swiper-pagination {
    position: absolute;
    bottom: 10px;
    left: 0;
    width: 100%;
    text-align: center;
}

/* Responsive Styles */
@media (max-width: 768px) {
    .swiper {
        height: 250px;
    }
}

@media (max-width: 480px) {
    .swiper {
        height: 200px;
    }
}

@media (min-width: 768px) and (max-width: 1024px) {
    .swiper {
        height: 300px;
    }
}
</style>
