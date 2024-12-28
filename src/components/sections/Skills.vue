<template>
    <!-- skills section -->
    <div>


        <section v-if="skillsStore.loading">
            <p class="mb-3">
            <div class="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-16"></div>
            </p>
            <div role="status" class="space-y-2.5 animate-pulse max-w-lg ">
                <div class="flex items-center w-full">
                    <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
                    <div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
                    <div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                </div>
                <div class="flex items-center w-full max-w-[480px]">
                    <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                    <div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                    <div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
                </div>
                <div class="flex items-center w-full max-w-[400px]">
                    <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                    <div class="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
                    <div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                </div>
                <div class="flex items-center w-full max-w-[480px]">
                    <div class="h-2.5  bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                    <div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                    <div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
                </div>
                <div class="flex items-center w-full max-w-[440px]">
                    <div class="h-2.5  bg-gray-300 rounded-full dark:bg-gray-600 w-32"></div>
                    <div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
                    <div class="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                </div>

            </div>
        </section>
        <section v-else>
            <p class="mb-3">
                <span class="text-md font-semibold text-gray-700 dark:text-gray-400">{{ t('skills') }}</span>
            </p>
            <div class="flex flex-wrap gap-2">
                <span v-for="(skill, index) in displayedSkills" :key="skill.id"
                    class="text-xs font-semibold px-2 py-0.5 rounded text-blue-800 bg-blue-100 dark:bg-blue-200 dark:text-blue-800">
                    {{ skill.name }}
                </span>
                <!-- Show More/Show Less Button -->
                <button v-if="skills.length > 10 && isFooter == false" @click="showModal = true"
                    class="text-blue-600 hover:underline text-xs font-semibold">
                    Show More
                </button>


            </div>


        </section>


        <!-- modal section -->

        <div v-if="showModal"
            class="absolute top-0 z-50 flex items-start justify-center w-full h-full dark:bg-gray-800 bg-white overflow-auto"
            @click.self="showModal = false">
            <div class="bg-white dark:bg-gray-800  w-full max-w-xl xl:max-w-2xl overflow-y-auto modal-content"
                @click.stop>
                <div class="flex justify-between items-center p-4 border-b dark:border-gray-700">
                    <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-100">{{ t('all_Skills') }}</h3>
                    <button @click="showModal = false" class="text-gray-500 dark:text-gray-400">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M6 18L18 6M6 6l12 12">
                            </path>
                        </svg>
                    </button>
                </div>
                <div class="p-4">
                    <div class="flex flex-wrap gap-2">
                        <span v-for="skill in skills" :key="skill.id"
                            class="text-xs font-semibold px-2 py-0.5 rounded text-blue-800 bg-blue-100 dark:bg-blue-200 dark:text-blue-800">
                            {{ skill.name }}
                        </span>

                    </div>
                </div>
            </div>
        </div>
    </div>



</template>
<script setup>
import { useI18n } from 'vue-i18n';
import { onMounted, ref, watch, computed } from 'vue'
import { useSkillsStore } from '@/stores/skillsStore';
import { useMainStore } from '@/stores/mainStore';
import { defineProps } from 'vue';

const props = defineProps({
  isFooter: Boolean 
});


const { t } = useI18n();
const skillsStore = useSkillsStore();
const mainStore = useMainStore();
const skills = ref([]);

const fetchData = async () => {
    await skillsStore.get();
    skills.value = skillsStore.data;
    skillsStore.loading = false;

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
const displayedSkills = computed(() => {
    if (props.isFooter) return skills.value;
    return skills.value.length > 10 ? skills.value.slice(0, 20) : skills.value;
});
const showModal = ref(false);
const isFooter = ref(props.isFooter);
</script>
<style>
.backdrop {
    display: none !important;
}
</style>