<template>
  <div v-motion="'fade'">
    <slot />
  </div>
</template>

<script setup>
import { useMotion } from "@vueuse/motion";
useMotion();
</script>
