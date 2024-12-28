<template>
    <li v-if="Object.keys(contacts).length > 0">
        <router-link :to="{ name: 'portfolio', hash: '#contacts' }"
            :class="{ ' router-active ': activeHash === '#contacts' }"
            class=" cursor-pointer flex items-center justify-start p-1 text-md font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
            <span class="mr-2">#</span>
            <span>{{ t('contacts') }}</span>
        </router-link>
    </li>
</template>
<script setup>
import { ref, watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { useContactsStore } from '@/stores/contactsStore';
import { useMainStore } from '@/stores/mainStore';

const contactsStore = useContactsStore();
const { t } = useI18n();
const route = useRoute();
const activeHash = ref(route.hash);
const contacts = ref({});



watch(() => route.hash, (newHash) => {
    activeHash.value = newHash;
});

watch(
    () => contactsStore.data,
    async (newData, oldData) => {
        contacts.value = newData;
    }
);

onMounted(() => {
    activeHash.value = route.hash;
    contacts.value = contactsStore.data;
});
</script>