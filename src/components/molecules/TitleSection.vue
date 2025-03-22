<template>
    <div class="pt-28 pb-20">
      <Title :message="title" :styling="'lg:text-5xl md:text-4xl text-[2.8rem] mb-5 font-[arial]'" />
      <Title :message="description" :styling="'text-center md:px-[24%] px-10 font-sans'" />
    </div>
  </template>
  
  <script setup>
  import Title from "../atom/Title.vue";
  
  defineProps({
    title: String,
    description: String,
  });
  </script>
  