<script setup>
import HeroTemplate from "../components/template/HeroTemplate.vue";
import Container from "../components/organism/Container.vue";
import Service from "../components/organism/Service.vue";
import FormPage from "../components/organism/FormPage.vue";
import Footer from "../components/organism/Footer.vue";
import Navbar from "../components/organism/Navbar.vue";
import Hero from "../components/organism/Hero.vue";
</script>

<template>
  <HeroTemplate
    source="https://static.wixstatic.com/media/11062b_3de8fc4100e6414ab42592cd0d6fe4cbf000.jpg"
    height="100%"
  >
    <Navbar />
    <Hero />
  </HeroTemplate>
  <Container class="min-h-screen" />
  <Service />
  <FormPage />
  <Footer />
</template>
