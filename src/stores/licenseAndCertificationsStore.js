import { defineStore } from 'pinia';
import { useMainStore as useMain } from './mainStore';
import apiService from '@/Service/apiService';

export const useLicenseAndCertificationsStore = defineStore('licenseAndCertificationsStore', {
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

              const response = await this.apiService.getLicenseAndCertifications();
              this.data = response.data;
             
            } catch (error) {
         
              console.error('There was an error when fetching license And Certifications  ', error);
            }
           
          },
    },
});
