<template>
  <div :class="`${isDark ? 'dark' : ''}`">
    <NuxtLayout>
      <div class="flex flex-col items-center">
        <CardPlain
          title="Something went wrong"
          :description="[`And this dev couldn't bother handling that error.`]"
        />
      </div>
    </NuxtLayout>
  </div>
</template>
<script setup>
import { useMainConfig } from "@/store/mainconfig.js";

const mainConfig = useMainConfig();

let isDark = computed(() => mainConfig.darkMode);
</script>