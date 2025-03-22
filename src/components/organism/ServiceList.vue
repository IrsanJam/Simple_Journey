<template>

<div class="flex md:flex-row flex-col justify-between gap-5 md:mt-0 xl:mt-24 pb-24">
    <div class="basis-2/3 md:pl-20 px-5 mt-10">
        <Title class="md:text-5xl text-[2rem]  text-center md:text-left font-[Times new roman] mb-5" message="Quality Services" />
        <Title class="text-[0.95rem] md:w-[95%]" message="Our local business offers top-notch services tailored to meet your needs. We take pride in delivering exceptional quality and customer satisfaction." />
    </div>
    <div class="basis-3/4 md:pr-20 px-10 md:pl-32">
        <LineTitle title="Affordable Rates" description="We believe in offering high-quality services at affordable rates. Your satisfaction is our priority, and we strive to deliver value for your money." />

        <LineTitle title="Customer Care" description="Customer care is at the heart of our business. We value your feedback and are always ready to assist you with any inquiries or concerns." />

        <LineTitle title="Community Focused" description="As a local business, we are deeply rooted in the community. We support local initiatives and aim to contribute positively to the neighborhoods we serve." />

    </div>
</div>

</template>
<script setup>
import LineTitle from '../molecules/LineTitle.vue';
import Title from '../atom/Title.vue';
</script>