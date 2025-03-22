<template>
  <HeroTemplate source="https://static.wixstatic.com/media/11062b_e6232f830c204d1198b2d55d529b0f19f000.jpg/v1/fill/w_1351,h_455,al_c,q_85,usm_0.33_1.00_0.00,enc_avif,quality_auto/11062b_e6232f830c204d1198b2d55d529b0f19f000.jpg" height="74%">
    <Navbar />
  </HeroTemplate>
  <ServiceCard />
  <ServiceList/>
  <FormPage/>
  <Footer/>
</template>

<script setup>
import HeroTemplate from "../components/template/HeroTemplate.vue";
import Navbar from "../components/organism/Navbar.vue";
import ServiceCard from "../components/organism/ServiceCard.vue";
import ServiceList from "../components/organism/ServiceList.vue";
import FormPage from "../components/organism/FormPage.vue";
import Footer from "../components/organism/Footer.vue";
</script>
