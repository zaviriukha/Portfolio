<template>
  <header class="text-white py-8 xl:py-12 flex gap-6 text-lg">
    <div class="container mx-auto flex justify-between items-center">
      <NuxtLink href="/">
        <h1 class="text-4xl font-semibold">
          Valeriia<span class="text-accent">.</span>
        </h1>
      </NuxtLink>
      <div class="hidden xl:flex items-center justify-center gap-8">
        <NavMenu/>
        <NuxtLink href="/contact">
          <button>Hire me</button>
        </NuxtLink>
      </div>

      <div class="xl:hidden">
        mob nav
      </div>

    </div>
  </header>
</template>
<script setup lang="ts">
</script>