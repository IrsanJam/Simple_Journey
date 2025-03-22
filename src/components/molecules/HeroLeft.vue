<template>
    <div class="flex-col justify-center bg-black/70 h-full px-8 md:px-12 pt-[31%] lg:pt-[70%] xl:pt-[31%] ">
        <Title class=" -tracking-wide font-['Syne'] leading-[3.9rem] md:leading-[4.5rem] md:w-auto text-[40px] md:text-[65px] text-white" message="Your IT Transformation Partner" />
        <Title class="text-[18px] my-5 w-[23rem] text-white" message="Empowering Businesses with Smart IT Solutions for a Digital Future" />
        <Button class="hover:bg-slate-400 bg-[rgb(92,255,255)] px-8 py-3 mt-8 text-sm" message="Learn more" />
    </div>
</template>
<script setup>
import Title from '../atom/Title.vue';
import Button from '../atom/Button.vue';
</script>