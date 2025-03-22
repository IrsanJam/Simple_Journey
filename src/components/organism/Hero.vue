<template>
  <div class="flex h-screen">
    <div class=" basis-3/5">
      <HeroLeft />
    </div>
    <div class="basis-4/5">
      <HeroRight />
    </div>
  </div>
</template>

<script setup>
import HeroLeft from "../molecules/HeroLeft.vue";
import HeroRight from "../molecules/HeroRight.vue";
</script>
