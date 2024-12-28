<template>


    <div class=" lg:absolute lg:bottom-1  flex-col justify-between items-start  w-full" v-if="contactsStore.loading">

        <div class="flex flex-wrap gap-2 my-1 justify-start">
            <div v-for="index in 2" :key="index">
                <div class="flex w-full items-center justify-start gap-2">
                    <div role="status"
                        class="flex items-center justify-center h-8 w-8 bg-gray-300 rounded animate-pulse dark:bg-gray-700">
                        <svg class="w-3 h-3 text-gray-200 dark:text-gray-600" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                            <path
                                d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z" />
                        </svg>
                    </div>
                    <div>
                        <div class="w-28 h-2 bg-gray-200 rounded-full dark:bg-gray-700 ms-2"></div>
                    </div>
                </div>
            </div>
        </div>


        <div class="flex flex-wrap gap-2 my-1 justify-start">
            <div role="status" v-for="index in 5" :key="index"
                class="flex items-center justify-center h-8 w-8 bg-gray-300 rounded animate-pulse dark:bg-gray-700">
                <svg class="w-3 h-3 text-gray-200 dark:text-gray-600" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                    <path
                        d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z" />
                </svg>
            </div>
        </div>

    </div>

    <div class=" lg:absolute lg:bottom-1 flex flex-col justify-between items-start  w-full" v-else>
        <!-- For contacts with contact field -->
        <div class="flex flex-wrap gap-2 my-1 justify-start">
            <div v-for="contact in contactsWithContactRef" :key="contact.id">

                <div :id="'tooltip' + contact.id" role="tooltip"
                    class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                    {{ contact.name }}
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>

                <div v-if="!contact.path" class="flex w-full items-center justify-start gap-2">
                    <img :data-tooltip-target="'tooltip' + contact.id" class="w-8 h-8 rounded cursor-pointer"
                        :src="mainStore.baseUrl + 'images/media/' + contact.ImageName" alt="Image">
                    <p class="text-sm text-gray-700  dark:text-gray-400">{{ contact.contact }}</p>
                </div>
            </div>
        </div>

        <!-- For contacts with path -->
        <div class="flex flex-wrap gap-2 my-1 justify-start">
            <div v-for="contact in contactsWithPathRef" :key="contact.id">
                <div :id="'tooltip' + contact.id" role="tooltip"
                    class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                    {{ contact.name }}
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
                <a :href="contact.path" target="_blank" v-if="contact.path">
                    <img :data-tooltip-target="'tooltip' + contact.id" class="w-8 h-8 rounded cursor-pointer"
                        :src="mainStore.baseUrl + 'images/media/' + contact.ImageName" alt="Image">
                </a>
            </div>
        </div>



    </div>

</template>

<script setup>
import { ref, onMounted, nextTick, watch } from 'vue';
import { useContactsStore } from '@/stores/contactsStore';
import { useMainStore } from '@/stores/mainStore';
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';

const contactsWithPathRef = ref([]);
const contactsWithContactRef = ref([]);
const contactsStore = useContactsStore();
const mainStore = useMainStore();

const fetchData = async () => {
    await contactsStore.get();
    const contacts = contactsStore.data;

    // Filter contacts based on path and contact field
    const contactsWithPath = contacts.filter(contact => contact.path !== null);
    const contactsWithContact = contacts.filter(contact => contact.contact !== null);

    contactsWithPathRef.value = contactsWithPath;
    contactsWithContactRef.value = contactsWithContact;

    contactsStore.loading = false;
};
onMounted(async () => {
    await fetchData();
    await nextTick(); // Ensure DOM is updated before initializing tooltips

    contactsWithPathRef.value.forEach(contact => {
        const tooltipElement = document.getElementById(`tooltip${contact.id}`);
        if (tooltipElement) {
            tippy(`[data-tooltip-target="tooltip${contact.id}"]`, {
                content: tooltipElement.innerHTML,
                allowHTML: true,
                arrow: true,
                placement: 'top'
            });
        } else {
            console.warn(`Tooltip element not found for ${contact.id}`);
        }
    });

    contactsWithContactRef.value.forEach(contact => {
        const tooltipElement = document.getElementById(`tooltip${contact.id}`);
        if (tooltipElement) {
            tippy(`[data-tooltip-target="tooltip${contact.id}"]`, {
                content: tooltipElement.innerHTML,
                allowHTML: true,
                arrow: true,
                placement: 'top'
            });
        } else {
            console.warn(`Tooltip element not found for ${contact.id}`);
        }
    });
});

watch(
    () => mainStore.selectedLang,
    async () => {
        await fetchData();
    }
);
</script>