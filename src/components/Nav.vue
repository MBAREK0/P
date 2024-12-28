<template>
    <nav class="fixed top-0 left-0 w-full justify-between px-4 pb-3 pt-6 text-gray-700 sm:flex sm:px-5 bg-white dark:bg-gray-800 dark:border-gray-700 p-4 z-10 sm:ml-64 lg:mr-64"
        aria-label="Breadcrumb">
        <div class="flex justify-between items-center">
            <div class="flex items-center justify-start">
                <button data-drawer-target="sidebar-multi-level-sidebar"
                    data-drawer-toggle="sidebar-multi-level-sidebar" aria-controls="sidebar-multi-level-sidebar"
                    type="button"
                    class="inline-flex items-center p-2  text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                    <span class="sr-only">Open sidebar</span>
                    <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path clip-rule="evenodd" fill-rule="evenodd"
                            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z">
                        </path>
                    </svg>
                </button>
                <ol class="inline-flex items-center  space-x-1 md:space-x-2 rtl:space-x-reverse sm:mb-0">
                    <li>
                        <div class="flex items-center">
                            <router-link :to="{ name: 'portfolio' }"
                                class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">{{
                                hostname }}</router-link>
                        </div>
                    </li>
                    <li aria-current="page">
                        <div class="flex items-center">
                            <svg class="rtl:rotate-180 w-3 h-3 mx-1 text-gray-400" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="m1 9 4-4-4-4" />
                            </svg>
                            <router-link :to="{ name: 'portfolio' }"
                                class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">{{
                                activeRoute }} </router-link>
                        </div>
                    </li>
                    <li aria-current="page" v-if="activeHash">
                        <div class="flex items-center ">
                            <svg class="rtl:rotate-180 w-3 h-3 mx-1 text-gray-400" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="m1 9 4-4-4-4" />
                            </svg>
                            <span
                                class="mx-1 text-sm font-medium text-gray-500 md:mx-2 dark:text-gray-400">{{ activeHash }}</span>
                        </div>
                    </li>
                </ol>
            </div>
            <div class="flex justify-between items-center lg:hidden">
            <settingDropDown/>
            </div>
        </div>
    </nav>
</template>
<script setup>
import { ref, watch, onMounted } from 'vue';
import settingDropDown from './ui-elements/SettingsDropDown.vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();
const isDarkMode = ref(false);
const currentLang = ref(locale.value);

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  document.documentElement.classList.toggle('dark', isDarkMode.value);
  localStorage.setItem('darkMode', isDarkMode.value.toString());
};




const route = useRoute();
const activeHash = ref(route.hash.replace('#', ''));
const activeRoute = ref(route.name);
const hostname = ref('');

watch(() => route.hash, (newHash) => {
    activeHash.value = newHash.replace('#', '');
});

function getHostname() {
    return window.location.hostname;
}

onMounted(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
  if (savedDarkMode) {
    isDarkMode.value = savedDarkMode === 'true';
    document.documentElement.classList.toggle('dark', isDarkMode.value);
  }
    activeHash.value = route.hash.replace('#', '');
    activeRoute.value = route.name;
    hostname.value = getHostname();
});
</script>
