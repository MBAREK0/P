import { defineStore } from 'pinia';
import { useMainStore as useMain } from './mainStore';
import apiService from '@/Service/apiService';

export const useEducationsStore = defineStore('educationsStore', {
    state: () => ({
        store: useMain(),
        apiService: apiService,
        data: {},
        loading: false,
    }),
    actions: {
        async get() {
            this.loading = true;
            try {

              const response = await this.apiService.getEducations();
              this.data = response.data;
             
            } catch (error) {
         
              console.error('There was an error when fetching educations', error);
            }
           
          },
    },
});
