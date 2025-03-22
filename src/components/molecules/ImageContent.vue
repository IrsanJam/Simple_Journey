<template>
  <div class="md:flex-row relative md:static flex flex-col h-[35rem] md:gap-10 gap-0 justify-between md:px-20 px-5 items-center">
    <div class="flex-col self-end mb-0.5 md:mb-20">
      <Title class="md:text-5xl md:w-auto w-[12rem] text-[2rem] font-medium md:font-normal pt-12 md:pt-0 font-[Times new roman] mb-5" :message="title" />
      <Title
        class="text-base max-w-[32rem] font-[arial] text-[1.08rem]"
        :message="description"
      />
    </div>

    <div class="flex justify-center h-[10rem] md:static absolute top-8/12 md:h-[25rem] items-center">
      <img
        :src="source"
        alt=""
        class="h-full"
        loading="lazy"
      />
    </div>
  </div>
</template>

<script setup>
import Title from "../atom/Title.vue";

defineProps({
  title: String,
  description: String,
  source: String
});
</script>
