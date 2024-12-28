<template>
    <li v-if="Object.keys(licenses).length > 0">
        <router-link :to="{ name: 'portfolio', hash: '#license-and-certifications' }"
            :class="{ ' router-active ': activeHash === '#license-and-certifications' }"
            class=" cursor-pointer flex items-center justify-start p-1 text-md font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
            <span class="mr-2">#</span>
            <span>{{ t('license_and_certifications') }}</span>
        </router-link>
    </li>
</template>
<script setup>
import { ref, watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { useLicenseAndCertificationsStore } from '@/stores/licenseAndCertificationsStore';
import { useMainStore } from '@/stores/mainStore';

const LicenseAndCertificationsStore = useLicenseAndCertificationsStore();
const { t } = useI18n();
const route = useRoute();
const activeHash = ref(route.hash);
const licenses = ref({});



watch(() => route.hash, (newHash) => {
    activeHash.value = newHash;
});

watch(
    () => LicenseAndCertificationsStore.data,
    async (newData, oldData) => {
        licenses.value = newData;
    }
);

onMounted(() => {
    activeHash.value = route.hash;
    licenses.value = LicenseAndCertificationsStore.data;
});
</script>