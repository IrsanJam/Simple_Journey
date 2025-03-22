<template>
<hr class="border-black my-6">
<Title class="text-xl font-medium" :message="title" />
<Title class="text-sm my-2 max-w-[32rem] font-[arial] text-[0.98rem]" :message="description" />
</template>

<script setup>
import Title from "../atom/Title.vue";
defineProps({
    title: String,
    description: String
})
</script>