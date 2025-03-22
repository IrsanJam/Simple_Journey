<template>
  <div id="service" class="min-h-screen bg-gradient-to-r pb-20 from-[#9b9c9b] to-[#1b1b1b]">
    <TitleSection
      class="text-center text-white"
      title="Explore Our Services"
      description="Describe the service and how customers or clients can benefit from it. This is the place to add a short description with relevant details, like pricing, duration and how to book."
    />

    <div v-for="(service, index) in services" :key="index">
      <ImageContent
        class="md:mx-20 mx-5 rounded-2xl md:rounded-none mb-5 md:mb-0"
        :class="service.bgColor"
        :title="service.title"
        :description="service.description"
        :source="service.source"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import TitleSection from "../molecules/TitleSection.vue";
import ImageContent from "../molecules/ImageContent.vue";

const services = ref([
  {
    title: "Infrastructure Solutions",
    description:
      "Optimize your IT foundation with our cutting-edge infrastructure solutions. From cloud computing and data centers to network security and system integration, we ensure a scalable, secure, and high-performance IT environment tailored to your business needs.",
    source: "https://static.wixstatic.com/media/c837a6_c4594337037c4fc7b7d9e0f7c9387179~mv2.jpg/v1/fill/w_330,h_383,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/ImageCard1.jpg",
    bgColor: "bg-white",
  },
  {
    title: "Digital Solutions",
    description:
      "Drive innovation and efficiency with our digital transformation services. We provide custom software development, enterprise applications, automation, and AI-driven solutions to enhance productivity and customer experience in the digital era.",
    source: "https://static.wixstatic.com/media/c837a6_fcee9c7c5d3d4521a0764f5c19b4bfe7~mv2.png/v1/fill/w_292,h_339,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ImageCard2.png",
    bgColor: "bg-[#5cffff]",
  },
  {
    title: "Cross Industry Solution",
    description:
      "We deliver tailored technology solutions across industries, including finance, healthcare, retail, and manufacturing. Our expertise in industry-specific challenges allows us to create scalable, future-ready digital ecosystems that drive business growth.",
    source: "https://static.wixstatic.com/media/c837a6_3274b7d4699646d8baaed36cf4a3031e~mv2.png/v1/fill/w_292,h_339,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ImageCard3.png",
    bgColor: "bg-[#e5e5e5]",
  },
  {
    title: "IT Operation Services",
    description:
      "Ensure seamless IT operations with our end-to-end managed services. From IT support, cloud management, and cybersecurity to proactive monitoring and disaster recovery, we help you maintain high availability, security, and operational efficiency—without the hassle.",
    source: "https://static.wixstatic.com/media/c837a6_3274b7d4699646d8baaed36cf4a3031e~mv2.png/v1/fill/w_292,h_339,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ImageCard3.png",
    bgColor: "bg-[#ffe9df]",
  },
]);
</script>
