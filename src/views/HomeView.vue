<template>


  <!-- Nav -->
  <Nav />

  <!-- Left Sidebar  -->
  <LeftSidebar />

  <!-- Right Sidebar -->
  <RightSidebar />

  <main class="p-4 sm:ml-[18rem] lg:mr-64 mt-5 bg-white  dark:bg-gray-800  font-medium text-gray-700  dark:text-gray-400 ">

    <!-- introduction section -->
    <Introduction />

    <!-- personal information section -->
    <PersonalInformation />

    <!-- educations section -->
    <Educations />

    <!-- license and certifications section -->
    <LicenseAndCertifications />

    <!-- honors and awards section -->
    <!-- <HonorsAndAwards /> -->

    <!-- experiences section -->
    <Experiences />

    <!-- projects section -->
    <Projects />

    <!-- contact me section -->
    <ContactMe />

  </main>

  <!-- Footer -->
  <Footer />

</template>
<script setup>
import { onMounted, onBeforeMount } from 'vue'
import LeftSidebar from '@/components/LeftSidebar.vue'
import RightSidebar from '@/components/RightSidebar.vue'
import Footer from '@/components/Footer.vue'
import Nav from '@/components/Nav.vue'
import Introduction from '@/components/sections/Introduction.vue'
import PersonalInformation from '@/components/sections/PersonalInformation.vue'
import Educations from '@/components/sections/Educations.vue'
import LicenseAndCertifications from '@/components/sections/LicenseAndCertifications.vue'
import HonorsAndAwards from '@/components/sections/HonorsAndAwards.vue'
import Experiences from '@/components/sections/Experiences.vue'
import Projects from '@/components/sections/Projects.vue'
import ContactMe from '@/components/sections/ContactMe.vue'
import { useInfoStore } from '@/stores/infoStore'


</script>