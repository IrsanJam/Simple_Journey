<script setup>
import { FwbButton } from "flowbite-vue";
import { RouterLink } from "vue-router";
import { useAttrs } from "vue";

defineProps({
  message: String,
  colorChoice: {
    type: String,
    default: "primary",
  },
  to: {
    type: String,
    default: null,
  },
});

const attrs = useAttrs();
</script>

<template>
  <RouterLink v-if="to" :to="to">
    <slot/>
    <fwb-button v-bind="attrs" tag="a" :color="colorChoice" pill>
      {{ message }}
    </fwb-button>
  </RouterLink>
  <fwb-button v-else v-bind="attrs" :color="colorChoice" pill>
    {{ message }}
  </fwb-button>
</template>
