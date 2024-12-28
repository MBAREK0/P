<template>
    <aside
        class="hidden lg:block fixed top-0 right-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0">
        <div class="sidebar h-full px-3 py-4 overflow-y-auto bg-white dark:bg-gray-800">
            <!-- dark mode and login section -->
            <div class="flex justify-between items-center mb-3">
                <div>
                    <button @click="toggleDarkMode"
                        class="p-1 text-gray-700 rounded dark:text-gray-400 focus:outline-none">
                        <i v-if="isDarkMode" class="fas fa-sun"></i>
                        <i v-else class="fas fa-moon"></i>
                    </button>
                </div>
                <div>
                    <button id="dropdownButton" data-dropdown-toggle="dropdownMenuLang"
                        class="flex items-center justify-between p-2 w-full text-sm font-medium text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:outline-none dark:text-white dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-600  "
                        type="button">
                        <div class="flex">

                            <img :src="getFlagImage" alt="Language Flag" class="w-5 h-5 mr-2 rounded-full" />
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
                    <div id="dropdownMenuLang"
                        class="hidden z-10 absolute mt-2 w-44 bg-white divide-y divide-gray-200 rounded-lg shadow-lg dark:bg-gray-700 dark:divide-gray-600">
                        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownButton">
                            <li>
                                <a href="#" @click.prevent="changeLanguage('en')"
                                    class="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white transition-colors duration-150">
                                    <img :src="require('@/assets/images/en.png')" class="w-5 h-5 mr-2 rounded-full"
                                        alt="English" />
                                    {{ t('english') }}
                                </a>
                            </li>
                            <li>
                                <a href="#" @click.prevent="changeLanguage('fr')"
                                    class="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white transition-colors duration-150">
                                    <img :src="require('@/assets/images/fr.png')" class="w-5 h-5 mr-2 rounded-full"
                                        alt="French" />
                                    {{ t('french') }}
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

            <!-- skills section -->
            <skills :isFooter="false" />

            <!-- languages -->
            <languages />

            <!-- contact section -->
            <contacts />



        </div>
    </aside>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import skills from '@/components/sections/Skills.vue'
import languages from '@/components/sections/Languages.vue'
import contacts from '@/components/sections/Contacts.vue'
import { useMainStore } from '@/stores/mainStore';

const { t, locale } = useI18n();
const isDarkMode = ref(false);
const currentLang = ref(locale.value);
const mainStore = useMainStore();

const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value;
    document.documentElement.classList.toggle('dark', isDarkMode.value);
    localStorage.setItem('darkMode', isDarkMode.value.toString());
};

const changeLanguage = (lang) => {
    locale.value = lang;
    currentLang.value = lang;
    mainStore.changeLang(lang);
    localStorage.setItem('language', lang);
};


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