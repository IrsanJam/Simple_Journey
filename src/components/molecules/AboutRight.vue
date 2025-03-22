<template>
  <div class="absolute inset-0 bg-black/50 z-[-5]"></div>

  <div class="relative flex-col md:gap-5 gap-0">
    <Title
      class="text-5xl text-center ml-[2rem] md:ml-0 lg:text-left text-white"
      message="About Us"
    />

    <div class="flex gap-14 mt-14 mb-5">
        <div class="w-[2rem]">
            <Svg class="mt-[5px] text-[#00FFFF] ml-[2rem] md:ml-0" size="16" />
        </div>
      <Title
        class="lg:text-[1.1rem] md:w-[25rem] w-[16rem] md:ml-0 text-white"
        message="PT Simple Journey Indonesia is an IT consulting company and a provider of Infrastructure Solutions, Digital Solutions, Cross-Industry Solutions, and IT Operation Services."
      />
    </div>

    <div class="flex gap-14">
      <div class="w-[2rem]"></div>
      <Title
        class="lg:text-[1.1rem] md:w-[27rem] w-[16rem]  md:ml-0 text-white"
        message="We deliver IT solutions to businesses on a global scale by providing IT experts  with flexible arrangements to help our clients adapt to the digital world."
      />
    </div>
  </div>
</template>

<script setup>
import Title from "../atom/Title.vue";
import Svg from "../atom/Svg.vue";
</script>
