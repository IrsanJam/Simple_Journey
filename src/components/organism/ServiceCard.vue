<template>
  <div class="h-screen mt-[-5rem]">
    <div class="mb-16">
      <Title
        class="md:text-[3.2rem] text-[2rem] font-bold text-center font-[Syne] text-black mb-5"
        message="Our Services"
      />
    </div>

    <div class="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-4 lg:px-20 md:px-[6rem] px-5">
      <Card
        v-for="(service, index) in services"
        :key="index"
        :title="service.title"
        :source="service.source"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Title from "../atom/Title.vue";
import Card from "../molecules/Card.vue";

const services = ref([
  {
    title: "Infrastructure Solution",
    source:
      "https://static.wixstatic.com/media/11062b_00dfbdf43bf443eaae6e0156ee6caae8~mv2.jpg/v1/fill/w_278,h_288,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Server.jpg",
  },
  {
    title: "Digital Solution",
    source:
      "https://static.wixstatic.com/media/11062b_f6efc53ab8464a6691e4dd67114c117d~mv2.jpg/v1/fill/w_278,h_288,fp_0.54_0.66,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Music%20Apps.jpg",
  },
  {
    title: "Cross Industry Solution",
    source:
      "https://static.wixstatic.com/media/7dc84b77162ccfe71a7c62d062d405e6.jpg/v1/fill/w_278,h_288,fp_0.35_0.48,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Industrial%20Worker.jpg",
  },
  {
    title: "IT Operation Service",
    source:
      "https://static.wixstatic.com/media/11062b_7d8bcf52c72e489784a9ba08fa2ccbb0~mv2.jpg/v1/fill/w_278,h_288,fp_0.52_0.28,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Shared%20Office.jpg",
  },
]);
</script>
