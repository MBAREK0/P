// src/services/apiService.js
import axios from 'axios';
import { useMainStore } from '@/stores/mainStore';

// Create a function to get the main store instance inside each API method
function getMainStore() {
  return useMainStore();
}

// Create an instance of axios with default configuration
const apiClient = axios.create({
  withCredentials: false, // Set to true if your API requires credentials like cookies or HTTP auth
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

// Helper function to configure the apiClient
function configureApiClient() {
  const mainStore = getMainStore();
  apiClient.defaults.baseURL = mainStore.ApiUrl;
  return {
    selectedLang: mainStore.selectedLang,
    email: mainStore.email,
  };
}

// Export your API methods
export default {
  async getInfo() {
    const { selectedLang, email } = configureApiClient();

    try {
      const response = await apiClient.get(`/portfolio/info/${email}`, {
        params: { lang: selectedLang },
      });
      return response.data;
    } catch (error) {
      console.error('API call failed:', error);
      throw error;
    }
  },

  async getEducations() {
    const { selectedLang, email } = configureApiClient();

    try {
      const response = await apiClient.get(`/portfolio/educations/${email}`, {
        params: { lang: selectedLang },
      });
      return response.data;
    } catch (error) {
      console.error('API call failed:', error);
      throw error;
    }
  },

  async getSkills() {
    const { selectedLang, email } = configureApiClient();

    try {
      const response = await apiClient.get(`/portfolio/skills/${email}`);
      return response.data;
    } catch (error) {
      console.error('API call failed:', error);
      throw error;
    }
  },

  async getLanguages() {
    const { selectedLang, email } = configureApiClient();

    try {
      const response = await apiClient.get(`/portfolio/languages/${email}`, {
        params: { lang: selectedLang },
      });
      return response.data;
    } catch (error) {
      console.error('API call failed:', error);
      throw error;
    }
  },

  async getLicenseAndCertifications() {
    const { selectedLang, email } = configureApiClient();

    try {
      const response = await apiClient.get(`/portfolio/licenses-and-certifications/${email}`, {
        params: { lang: selectedLang },
      });
      return response.data;
    } catch (error) {
      console.error('API call failed:', error);
      throw error;
    }
  },

  async getHonorsAndAwards() {
    const { selectedLang, email } = configureApiClient();

    try {
      const response = await apiClient.get(`/portfolio/awards/${email}`, {
        params: { lang: selectedLang },
      });
      return response.data;
    } catch (error) {
      console.error('API call failed:', error);
      throw error;
    }
  },

  async getContacts() {
    const { selectedLang, email } = configureApiClient();

    try {
      const response = await apiClient.get(`/portfolio/contacts/${email}`);
      return response.data;
    } catch (error) {
      console.error('API call failed:', error);
      throw error;
    }
  },

  async getExperiences() {
    const { selectedLang, email } = configureApiClient();

    try {
      const response = await apiClient.get(`/portfolio/experiences/${email}`, {
        params: { lang: selectedLang },
      });
      return response.data;
    } catch (error) {
      console.error('API call failed:', error);
      throw error;
    }
  },

  async getProjects() {
    const { selectedLang, email } = configureApiClient();

    try {
      const response = await apiClient.get(`/portfolio/projects/${email}`, {
        params: { lang: selectedLang },
      });
      return response.data;
    } catch (error) {
      console.error('API call failed:', error);
      throw error;
    }
  },

};
