<template>
  <div class="relative">
    <!-- Tampilan PC -->
    <div
  class="hidden lg:flex py-2 px-6  lg:w-[36rem] gap-5 bg-white/60 rounded-full justify-center items-center "
>
  <Button to="/#service" :class="{'active': route.path === '/#service'}"
    class="hover:bg-white  hover:rounded-full px-[13px] hover:cursor-pointer lg:text-[1.2rem]"
    message="Home"
  />

  <Button to="/service" :class="{'active': route.path === '/service'}"
    class="hover:bg-white rounded-full px-[13px] hover:cursor-pointer lg:text-[1.2rem]"
    message="Service"
  />

  <Button to="/about" :class="{'active': route.path === '/about'}"
    class="hover:bg-white rounded-full px-[13px] hover:cursor-pointer lg:text-[1.2rem]"
    message="About"
  />
  <Button to="/#contact" :class="{'active': route.path === '/#contact'}"
    class="hover:bg-white rounded-full px-[13px] hover:cursor-pointer lg:text-[1.2rem]"
    message="Contact Us"
  />
</div>


    <!-- Tombol Hamburger (Mobile) -->
    <button
      @click="isOpen = !isOpen"
      class="lg:hidden p-2 rounded-md bg-white shadow-md"
    >
      <svg
        class="w-6 h-6 text-black"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        viewBox="0 0 24 24"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
    </button>

    <!-- Menu Mobile dengan Ikon (Dibuat Center) -->
    <div
      v-if="isOpen"
      class="absolute top-12 left-1/2 -translate-x-3/4 w-auto px-4 py-2 bg-white rounded-full shadow-md flex flex-row justify-center items-center gap-2"
    >
      <Button to="/" class="p-2 text-gray-600 hover:text-black">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2"
          viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
          <path d="M3 12l9-9 9 9M4 10v10h16V10"></path>
        </svg>
      </Button>

      <Button to="/service" class="p-2 text-gray-600 hover:text-black">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2"
          viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
          <path d="M9.75 2.75L8 6h8l-1.75-3.25"></path>
          <path d="M4 6h16l-1 14H5L4 6z"></path>
          <path d="M9 6v14"></path>
          <path d="M15 6v14"></path>
        </svg>
      </Button>

      <Button to="/about" class="p-2 text-gray-600 hover:text-black">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2"
          viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="16" x2="12" y2="12"></line>
          <line x1="12" y1="8" x2="12.01" y2="8"></line>
        </svg>
      </Button>

      <Button to="/#contact" class="p-2 text-gray-600 hover:text-black">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2"
          viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
          <path d="M22 16.92V19a2 2 0 0 1-2 2c-8.84 0-16-7.16-16-16a2 2 0 0 1 2-2h2.08a1 1 0 0 1 1 .76
            c.14.58.36 1.13.64 1.65a1 1 0 0 1-.23 1.23L7.21 8.79a13.05 13.05 0 0 0 8 8l1.11-1.11a1 1 0 0 1
            1.23-.23c.52.28 1.07.5 1.65.64a1 1 0 0 1 .76 1z">
          </path>
        </svg>
      </Button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import Button from "../atom/Button.vue";

const isOpen = ref(false);
const route = useRoute();
</script>

<style scoped>
/* Warna tombol saat aktif */
.active {
  background-color: #ffff;
  color: #000;
  border-radius: 9999px;
  padding:0 3px;
}
</style>