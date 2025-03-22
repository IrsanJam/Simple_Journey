<template>
    <div class="w-full">
      <label class="block mb-2 font-thin text-sm">
        {{ label }}
        <span v-if="required" class="text-white text-[11px]">*</span>
      </label>
      <input
        :type="type"
        :value="modelValue"
        @input="handleInput"
        @blur="isTouched = true"
        class="w-full p-3 border-t-0 border-r-0 border-l-0 ring-0 border-white bg-transparent outline-none text-lg"
      />
      <div v-if="isTouched && errorMessage" class="flex items-center mt-1 text-white text-sm">
        <!-- Icon Error -->
        <svg class="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 9v2m0 4h.01M12 5a7 7 0 1 1 0 14a7 7 0 0 1 0-14z" />
        </svg>
        {{ errorMessage }}
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  defineProps({
    label: String,
    modelValue: String,
    type: {
      type: String,
      default: "text",
    },
    errorMessage: String,
    required: {
      type: Boolean,
      default: false,
    },
  });
  
  const emit = defineEmits(["update:modelValue"]);
  const isTouched = ref(false);
  
  const handleInput = (event) => {
    emit("update:modelValue", event.target.value);
  };
  </script>
  