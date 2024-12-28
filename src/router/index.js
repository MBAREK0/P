import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'portfolio',
    component: function () {
      return import('../views/HomeView.vue');
    }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,  
        behavior: 'smooth',
        top: 80 
      };
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { left: 0, top: 80};  
    }
  }
});

export default router;
