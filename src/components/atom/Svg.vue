<template>
  <svg
    preserveAspectRatio="none"
    data-bbox="0.651 0.662 19.349 19.325"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0.651 0.662 19.349 19.325"
    :height="size"
    :width="size"
    data-type="shape"
    role="presentation"
    aria-hidden="true"
    aria-label=""
    fill="currentColor"
    :class="{color}"
  >
    <g>
      <path d="M11.335.662v19.325h-2.23V.662z"></path>
      <path d="M19.976 11.347H.651v-2.23h19.325z"></path>
      <path d="M11.739 10.346 4.203 17.88l-1.577-1.576 7.536-7.536z"></path>
      <path d="M16.422 17.88 2.757 4.217 4.334 2.64 18 16.304z"></path>
      <path d="M20 2.273a1.61 1.61 0 1 1-3.22 0 1.61 1.61 0 0 1 3.22 0"></path>
    </g>
  </svg>
</template>

<script setup>
defineProps({
  color: {
    type: String,
    default: "white", // Warna default jika tidak diberikan
  },
  size: {
    type: [Number, String], // Bisa dalam format number atau string (misal "20px")
    default: 20, // Ukuran default jika tidak diberikan
  },
});
</script>
