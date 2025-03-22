<template>
  <div class="bg-black">
    <div
      class="absolute bg-cover bg-center min-w-full bg-no-repeat max-h-full z-[-10]"
      :style="{
        backgroundImage: `url(${source})`,
        left: '-1px',
        width: '100%',
        height: `${height}`,
      }"
    ></div>
  </div>
</template>

<script setup>
defineProps({
  source: String,
  height: String
});
</script>
