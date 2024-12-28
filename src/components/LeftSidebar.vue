<template>
    <aside id="sidebar-multi-level-sidebar"
        class="  fixed top-0 left-0 z-40 w-68 h-screen transition-transform -translate-x-full sm:translate-x-0  "
        aria-label="Sidebar">

        <div class="h-full px-3 py-4 ps-8 overflow-y-auto bg-white dark:bg-gray-800 pb-20 sidebar ">

            <TopOfLeftAside />

            <DownloadCvBtn />


            <ul v-if="Object.keys(info).length > 0">

                <Introduction  />

                <PersonalInformation />

                <Educations />

                <licensesAndCertifications />

                <!-- <HonorsAndAwards /> -->

                <Experiences />

                <Projects />

                
                <div class="lg:hidden">
                    
                    <!-- skills -->
                    <Skills />
                    
                    <!-- languages -->
                    <Languages />
                    
                    <!-- contacts -->
                    <Contacts />
                    
                </div>
                
                <ContactMe />
            
            </ul>

            <ul v-else>
                <div class="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-36 mb-3"></div>
                <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-3"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-28 ms-4 mb-3"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-28 ms-4 mb-3"></div>
                <div class="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-36 mb-3"></div>
                <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-3"></div>
                <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-3"></div>
                <div class="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-36 mb-3"></div>
                <div class="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-36 mb-3"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-28 ms-4 mb-3"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-28 ms-4 mb-3"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-28 ms-4 mb-3"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-28 ms-4 mb-3"></div>
                <div class="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-36 mb-3"></div>
                <div class="lg:hidden">
                    <div class="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-36 mb-3"></div>
                    <div class="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-36 mb-3"></div>
                    <div class="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-36 mb-3"></div>

                </div>


            </ul>
        </div>
    </aside>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';

import { useInfoStore } from '@/stores/infoStore';
import { useMainStore } from '@/stores/mainStore';

//  ui-elements
import TopOfLeftAside from './ui-elements/TopOfLeftAside.vue';
import DownloadCvBtn from './ui-elements/DownloadCvBtn.vue';

// routes
import PersonalInformation from './routes/PersonalInformation.vue';
import Introduction from './routes/Introduction.vue';
import Educations from './routes/Educations.vue';
import licensesAndCertifications from './routes/LicenseAndCertifications.vue';
import HonorsAndAwards from './routes/HonorsAndAwards.vue';
import Experiences from './routes/Experiences.vue';
import Projects from './routes/Projects.vue';
import ContactMe from './routes/ContactMe.vue';
import Skills from './routes/Skills.vue';
import Languages from './routes/Languages.vue';
import Contacts from './routes/Contacts.vue';


const { t } = useI18n();
const route = useRoute();
const activeHash = ref(route.hash);

const infoStore = useInfoStore();
const info = ref({});

watch(() => route.hash, (newHash) => {
    activeHash.value = newHash;
});

onMounted(() => {
    activeHash.value = route.hash;
    info.value = infoStore.data;
});


watch(
    () => infoStore.data,
    async (newData, oldData) => {
        info.value = newData;
    }
);
</script>

<style>
.sidebar::-webkit-scrollbar {
    width: 8px;
}

.sidebar::-webkit-scrollbar-track {
    background: #f1f1f1;
}

.sidebar::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 4px;
}

.sidebar::-webkit-scrollbar-thumb:hover {
    background: #555;
}
</style>