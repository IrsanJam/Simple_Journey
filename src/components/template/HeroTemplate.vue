<script setup>
import ImageTop from "../atom/ImageTop.vue";

defineProps({
  height: String,
  source: {
    type: String,
    default: "https://static.wixstatic.com/media/11062b_3de8fc4100e6414ab42592cd0d6fe4cbf000.jpg",
  }});
</script>

<template>
  <div class="relative h-screen w-full">
    <ImageTop
      :height="height"
      :source="source"
    />

    <div class="relative z-10">
      <slot />
    </div>
  </div>
</template>

<!-- <style scoped>
@keyframes floatBg {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateX(-30px);
    transform: translateY(-10px);

  }
}

.animate-floating {
  animation: floatBg 3s ease-in-out infinite;
}
</style> -->
