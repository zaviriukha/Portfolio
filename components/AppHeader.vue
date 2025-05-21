<template>
  <header class="text-white py-8 xl:py-12 flex gap-6 text-lg">
    <div class="container mx-auto flex justify-between items-center">
      <NuxtLink href="/">
        <h1 class="text-4xl font-semibold text-gray-800">
          Valeriia<span class="text-accent">.</span>
        </h1>
      </NuxtLink>
      <div class="hidden xl:flex items-center justify-center gap-8">
        <NavMenu/>
      </div>

      <div class="xl:hidden">
        <MobMenu/>
      </div>

    </div>
  </header>
</template>
<script setup lang="ts">
import MobMenu from "~/components/navigation/MobMenu.vue";
import NavMenu from "~/components/navigation/NavMenu.vue";
</script>