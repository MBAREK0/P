<template>
    <button id="dropdownMenuIconButton" data-dropdown-toggle="dropdownDots"
        class="inline-flex items-center p-2 text-sm font-medium text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-600"
        type="button">
        <i class="fas fa-cog text-gray-900 dark:text-white" style="font-size: 1.2rem;" aria-hidden="true"></i>
    </button>

    <!-- Dropdown menu -->
    <div id="dropdownDots"
        class="relative z-10 hidden bg-white divide-y divide-gray-200 rounded-lg shadow-lg w-44 dark:bg-gray-700 dark:divide-gray-600"
        style="right: 20px !important;">
        <!-- Dropdown button -->
        <button id="dropdownButton" data-dropdown-toggle="dropdownMenu"
            class="flex items-center justify-between p-2 w-full text-sm font-medium text-gray-900 bg-white rounded-t-lg hover:bg-gray-100 focus:outline-none dark:text-white dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-600  "
            type="button">
            <div class="flex">
                    
                <img :src="getFlagImage" alt="Language Flag"  class="w-5 h-5 mr-2"/>
                <span>{{ t(currentLang) }}</span>
            </div>
            <svg class="w-5 h-5 ml-2" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                    d="M6.293 9.293a1 1 0 011.414 0L10 10.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clip-rule="evenodd"></path>
            </svg>
        </button>

        <!-- Dropdown menu items -->
        <div id="dropdownMenu"
            class="hidden z-10 absolute mt-2 w-full bg-white divide-y divide-gray-200 rounded-lg shadow-lg dark:bg-gray-700 dark:divide-gray-600">
            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownButton">
                <li>
                    <a href="#" @click.prevent="changeLanguage('en')"
                        class="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white transition-colors duration-150">
                        <img :src="require('@/assets/images/en.png')" class="w-5 h-5 mr-2" alt="English" />
                        {{ t('english') }}
                    </a>
                </li>
                <li>
                    <a href="#" @click.prevent="changeLanguage('fr')"
                        class="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white transition-colors duration-150">
                        <img :src="require('@/assets/images/fr.png')" class="w-5 h-5 mr-2" alt="French" />
                        {{ t('french') }}
                    </a>
                </li>
            </ul>
        </div>

        <!-- Dark mode toggle -->
        <div class="pt-2">
            <button @click="toggleDarkMode"
                class="flex items-center px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 w-full bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-b-lg focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-600 transition-colors duration-150">
                <i v-if="isDarkMode" class="fas fa-sun text-yellow-500"></i>
                <i v-else class="fas fa-moon text-gray-500"></i>
                <div class="ml-2">
                    <span v-if="isDarkMode">Light Mode</span>
                    <span v-else>Dark Mode</span>
                </div>
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useMainStore } from '@/stores/mainStore';

const { t, locale } = useI18n();
const isDarkMode = ref(false);
const currentLang = ref(locale.value);
const mainStore = useMainStore();

// Function to toggle dark mode
const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value;
    document.documentElement.classList.toggle('dark', isDarkMode.value);
    localStorage.setItem('darkMode', isDarkMode.value.toString());
};

// Function to change language and save it to localStorage
const changeLanguage = (lang) => {
    locale.value = lang;
    currentLang.value = lang;
    mainStore.changeLang(lang);
    localStorage.setItem('language', lang);
};

// On component mount, load saved settings from localStorage
onMounted(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode) {
        isDarkMode.value = savedDarkMode === 'true';
        document.documentElement.classList.toggle('dark', isDarkMode.value);
    }

    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
        locale.value = savedLanguage;
        currentLang.value = savedLanguage;
    }
});

// Computed property to get the correct flag image based on the current language
const getFlagImage = computed(() => {
    switch (currentLang.value) {
        case 'en':
            return require('@/assets/images/en.png');
        case 'fr':
            return require('@/assets/images/fr.png');
        default:
            return '';
    }
});
</script>

