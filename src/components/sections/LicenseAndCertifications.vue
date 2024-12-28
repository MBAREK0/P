<template>
    <section id="license-and-certifications" class="mb-5 section" v-if="LicenseAndCertificationsStore.loading">
        <div class="mb-5 section">
            <div class="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-64 mb-3"></div>
        </div>
        <div class="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2">

            <div role="status" v-for="index in 2" :key="index"
                class="max-w-sm p-4  rounded shadow-lg animate-pulse md:p-6 ">
                <div class="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
                    <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                        <path
                            d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                        <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                    </svg>
                </div>
                <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5 "></div>
                <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-16 mb-4"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-48  mb-2.5"></div>
                <div class="flex items-center justify-start gap-3">
                    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-16  mb-2.5"></div>
                    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-16  mb-2.5"></div>
                </div>

            </div>

        </div>

    </section>
    <section id="license-and-certifications" class="mb-5 section" v-else>
        <router-link :to="{ name: 'portfolio', hash: '#license-and-certifications' }">
            <div class="flex justify-start items-center mb-3 text-3xl dark:hover:text-white">
                <span>#</span>
                <h1 class="ml-2"  id="t-license-and-certifications">{{ t('license_and_certifications') }} </h1>
            </div>
        </router-link>

        <div class="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2">
            <div v-for="license in licenses" :key="license.id"
                class="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 cursor-pointer bottom-1"
                @click="openModal(license)">
                <img :src="mainStore.baseUrl + 'images/awards/' + license.imageName" alt="Image"
                    v-if="license.imageName" class="w-full h-48 mb-4">
                <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-100">{{ license.name }}</h3>

                <div class="flex flex-col md:flex-row items-start  md:items-center gap-2 md;gap-0 justify-between mb-3">
                    <p class="text-sm text-gray-600 dark:text-gray-300">{{ license.organization }}</p>
                    <p class="text-sm text-gray-600 dark:text-gray-300">{{ getMonthYear(license.date) }}</p>
                </div>
            </div>
        </div>

    </section>
    <!-- modal section -->
    <div v-if="showModal"
        class="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50 overflow-auto"
        @click.self="showModal = false">
        <div class="bg-white dark:bg-gray-800 rounded-lg w-full max-w-xl xl:max-w-2xl max-h-[90vh] overflow-y-auto modal-content"
            @click.stop>
            <div class="flex justify-between items-center p-4 border-b dark:border-gray-700">
                <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-100">{{ selectedLicense.name }}</h3>
                <button @click="showModal = false" class="text-gray-500 dark:text-gray-400">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12">
                        </path>
                    </svg>
                </button>
            </div>
            <div class="p-4">
                <img :src="mainStore.baseUrl + 'images/awards/' + selectedLicense.imageName"
                    v-if="selectedLicense.imageName" class="w-full  mb-4 bg-cover bg-center"></img>
                <div class="flex flex-col md:flex-row items-start  md:items-center gap-2 md;gap-0 justify-between mb-3">
                    <p class="text-sm text-gray-600 dark:text-gray-300">{{ selectedLicense.organization }}</p>
                    <p class="text-sm text-gray-600 dark:text-gray-300">{{ getMonthYear(selectedLicense.date) }}</p>
                </div>
                <p class="text-sm text-gray-600 dark:text-gray-300">{{ selectedLicense.description }}</p>
                <!-- skills -->
                <div class="mt-4">
                    <h4 class="text-lg font-semibold text-gray-800 dark:text-gray-100">Skills</h4>
                    <div class="flex flex-wrap gap-2 my-2">
                        <span v-for="skill in selectedLicense.skills" :key="skill"
                            class="text-xs font-semibold px-2 py-0.5 rounded text-blue-800 bg-blue-100 dark:bg-blue-200 dark:text-blue-800">{{
                                skill }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { onMounted, ref, watch } from 'vue'
import { useLicenseAndCertificationsStore } from '@/stores/licenseAndCertificationsStore';
import { useMainStore } from '@/stores/mainStore';

const { t } = useI18n();
const LicenseAndCertificationsStore = useLicenseAndCertificationsStore();
const mainStore = useMainStore();
const licenses = ref({});


const fetchData = async () => {
    await LicenseAndCertificationsStore.get();
    licenses.value = LicenseAndCertificationsStore.data;
    LicenseAndCertificationsStore.loading = false;

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
const selectedLicense = ref({});
const openModal = (license) => {
    selectedLicense.value = license;
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
</style>