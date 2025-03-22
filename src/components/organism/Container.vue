<template>
  <div class="relative">
    <div
    class="absolute inset-0 flex lg:h-screen h-screen z-[-10] bg-[url('https://static.wixstatic.com/media/11062b_148abf6124504b8cbe6fa264a5249028~mv2.jpg/v1/fill/w_1351,h_661,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Server%20Room.jpg')] bg-cover bg-center"
  >
    <div class="flex h-screen w-screen">
      <div class="basis-4/5 hidden md:block">
        <HeroRight />
      </div>
      <div class="basis-2/3 lg:py-44 md:py-72 py-44">
        <AboutRight />
      </div>
    </div>
  </div>
  </div>
  
</template>

<script setup>
import AboutRight from "../molecules/AboutRight.vue";
import HeroRight from "../molecules/HeroRight.vue";
</script>
