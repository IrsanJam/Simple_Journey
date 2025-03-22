<template>
  <div class="flex-col items-center w-[9rem] md:w-[17rem] md:h-[25rem] h-[18rem] justify-center">
    <img
      :src="source"
      alt="source"
      class="md:h-[16rem] h-[14rem] w-full"
      loading="lazy"
    />
    <Title class="md:text-xl text-sm text-center my-8  " :message="title" />
  </div>
</template>

<script setup>
import Title from "../atom/Title.vue";

defineProps({
  title: String,
  source: String
});
</script>