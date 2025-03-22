<template>
    <div ref="container" class="relative h-[35rem] w-full overflow-y-scroll">
      <div class="relative h-[35rem]">
        <div
          v-for="(content, index) in contents"
          :key="index"
          ref="contentRefs"
          class="absolute inset-0 transition-all duration-700 ease-in-out flex justify-center items-center"
          :class="{
            'opacity-100 translate-y-0': activeIndex === index,
            'opacity-0 translate-y-20': activeIndex !== index,
          }"
        >
          <ImageContent
            :title="content.title"
            :description="content.description"
            :source="content.source"
          />
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from "vue";
  import ImageContent from "../molecules/ImageContent.vue";
  
  const contents = ref([
    {
      title: "Infrastructure Solutions",
      description: "Optimize your IT foundation...",
      source: "https://static.wixstatic.com/media/c837a6_c4594337037c4fc7b7d9e0f7c9387179~mv2.jpg",
    },
    {
      title: "Digital Solutions",
      description: "We provide digital transformation...",
      source: "https://static.wixstatic.com/media/c837a6_fcee9c7c5d3d4521a0764f5c19b4bfe7~mv2.png",
    },
    {
      title: "Cross Industry Solution",
      description: "We deliver tailored technology solutions...",
      source: "https://static.wixstatic.com/media/c837a6_3274b7d4699646d8baaed36cf4a3031e~mv2.png",
    },
    {
      title: "IT Operation Services",
      description: "Ensure seamless IT operations...",
      source: "https://static.wixstatic.com/media/c837a6_3274b7d4699646d8baaed36cf4a3031e~mv2.png",
    },
  ]);
  
  const activeIndex = ref(0);
  const container = ref(null);
  const contentRefs = ref([]);
  
  onMounted(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            activeIndex.value = index;
          }
        });
      },
      { threshold: 0.6, root: container.value }
    );
  
    contentRefs.value.forEach((el) => {
      if (el) observer.observe(el);
    });
  });
  
  onUnmounted(() => {
    contentRefs.value.forEach((el) => {
      if (el) observer.unobserve(el);
    });
  });
  </script>