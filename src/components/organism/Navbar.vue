
<template>
  <div
    :class="[
      scrollY >= 1280 ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100',
      scrollY >= 30 ? 'bg-black/60' : 'bg-transparent',
      'fixed top-0 z-[90] w-full flex justify-center gap-8 md:gap-0  md:justify-between py-7 md:px-12 items-center transition-all duration-700 ease-in-out'
    ]"
  >
    <TitleHeader :colorTitle="colorTitle" :colorSvg="colorSvg" :message="message" />
    <RoundNav />
  </div>
</template>


<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import TitleHeader from "../molecules/TitleHeader.vue";
import RoundNav from "../molecules/RoundNav.vue";

defineProps({
  message: String,
  colorTitle:{
    type: String,
    default: "text-white"
  },
  colorSvg: {
    type: String,
    default: "text-white"
  }
})

// State untuk menyimpan posisi scroll
const scrollY = ref(0);

// Function untuk update posisi scroll
const handleScroll = () => {
  scrollY.value = window.scrollY;
};

// Tambahkan event listener saat komponen dimuat
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

// Hapus event listener saat komponen di-unmount
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
