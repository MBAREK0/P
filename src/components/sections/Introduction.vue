<template>
  <section id="introduction" class="mb-5 section mt-10" v-if="infoStore.loading">
    <div class="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>

    <div class="w-full">
      <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
      <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
      <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
    </div>
  </section>
  
  <section v-else id="introduction" class="mb-5 section mt-10">
    <router-link :to="{ name: 'portfolio', hash: '#introduction' }">
      <div class="flex justify-start items-center mb-3 text-3xl dark:hover:text-white">
        <span>#</span>
        <h1 class="ml-2"  id="t-introduction">{{ t('introduction') }} </h1>
      </div>
    </router-link>

    <p class="text-sm ">{{ t('introduction_content', { position }) }}</p>
  </section>
</template>
<script setup>
import { useI18n } from 'vue-i18n';
import { onMounted, ref, watch } from 'vue'
import { useInfoStore } from '@/stores/infoStore';
import { useMainStore } from '@/stores/mainStore';

const { t } = useI18n();
const infoStore = useInfoStore();
const mainStore = useMainStore();
const position = ref({});

onMounted(async () => {
  position.value = infoStore.data.position;
});

watch(
  () => infoStore.data,
  async (newData, oldData) => {
    position.value = newData.position;
  }
);

</script>
<style scoped>

</style>
