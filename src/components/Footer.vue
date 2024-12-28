<template>
    <footer class="bg-white dark:bg-gray-900 p-4 sm:ml-64 lg:mr-64 lg:hidden">
        <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        
            <!-- skills section -->
            <skills id="skills" :isFooter="true" />

            <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
         
            <!-- languages -->
            <languages id="languages"/>

            <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

            <!-- contacts section -->
            <contacts id="contacts"/>
        </div>
    </footer>

</template>

<script setup>
import skills from '@/components/sections/Skills.vue'
import languages from '@/components/sections/Languages.vue'
import contacts from '@/components/sections/Contacts.vue'
import { useI18n } from 'vue-i18n';

 const { t, locale } = useI18n();
</script>