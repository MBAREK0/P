import { defineStore } from 'pinia';

export const useMainStore = defineStore('mainStore', {
  state: () => ({
    //  api configuration
   ApiUrl: 'https://api.mbarekelaadraoui.me/api',
   baseUrl: 'https://api.mbarekelaadraoui.me/',
  //  contact form configuration
   email : 'mbarekelaadraoui@gmail.com',
   userName: 'M\'barek EL AADRAOUI',
  //  emailJs configuration
   service_id : 'service_8p1j5fd',
   template_id : 'template_f2m0fea',
   user_id : 'Pms4EzhvmczF8xnPR',
    // language
   selectedLang : 'en',
  }),
  actions: {
    changeLang(lang) {
      this.selectedLang = lang;
    }, 

  },
});
