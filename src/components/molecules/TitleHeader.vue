<template>
    <div class="flex gap-2 justify-center items-center">
      <Title 
        class="lg:text-3xl text-base font-['Syne'] font-bold" 
        :class="colorTitle"
        :message="message" 
      />
      <Svg :class="colorSvg" />
    </div>
  </template>
  
  <script setup>
  import Title from '../atom/Title.vue';
  import Svg from '../atom/Svg.vue';
  
  defineProps({
    message: {
      type: String,
      default: "SimpleJourney"
    },
    colorTitle: {
      type: String,
      default: "text-white"
    },
    colorSvg: {
      type: String,
      default: "text-white"
    }
  });
  </script>
  