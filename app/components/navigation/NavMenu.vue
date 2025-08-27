<template>
  <nav class="flex gap-8">
    <NuxtLink
      v-for="link in links"
      :key="link.to"
      :to="link.to"
      class="hover:text-accent transition-all capitalize font-medium text-gray-800"
      :class="{
        'text-accent border-b-2 border-accent': $route.path === link.to,
      }"
    >
      {{ link.label }}
    </NuxtLink>
  </nav>
</template>

<script setup lang="ts">
const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/resume", label: "Resume" },
  { to: "/work", label: "Work" },
  { to: "/contact", label: "Contact" },
];
</script>
