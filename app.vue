<template>
  <div :class="`${isDark ? 'dark' : ''}`">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup>
import { useMainConfig } from "@/store/mainconfig.js";

const mainConfig = useMainConfig();

let isDark = computed(() => mainConfig.darkMode);

</script>