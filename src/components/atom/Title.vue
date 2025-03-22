<template>
    <p :class="styling">{{ message }}</p>
</template>

<script setup>
defineProps({
    message: String,
    styling:String
})
</script>