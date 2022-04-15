<template>
  <div class="flex flex-col space-y-4 w-full">
    <div class="p-8">
      <div class="text-4xl font-extrabold text-center">This is not home.</div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <CardChoice v-for = "i in [0, 1, 2, 3]" :key = "titles[i]" :title="titles[i]" :description="descriptions[i]" :image="images[i]" :link="links[i]" />
    </div>
    <div class="p-8">
      <div class="text-4xl font-extrabold text-center">Certainly.</div>
    </div>
  </div>
</template>
<script setup>
definePageMeta({
  title: "Not Home - Neko Of The Abyss",
});
function randomize(arr) {
  let curr = arr.length;
  let rand;
  while (curr != 0) {
    rand = Math.floor(Math.random() * curr);
    curr--;
    [arr[curr], arr[rand]] = [arr[rand], arr[curr]];
  }
  return arr;
}
const titles = randomize(["Pranev", "Kuroneko", "Fortuna", "La Lala", "Duration"]);
const descriptions = randomize([
  "The dude that owns Neko Of The Abyss.",
  "A discord bot.",
  "A TS module for emulating a gacha system.",
  "Get the formated time duration. ES Module that works in Node, Deno and browsers.",
  "Generates random text.",
]);
const images = randomize([
  "/nett.png",
  "/placeholder/1.png",
  "/placeholder/3.png",
  "/queen/icon.png",
  "/lala.webp",
]);
const links = randomize([
  "/apps/queenofchaos",
  "/nett",
  "https://github.com/queenochaos/fortuna",
  "/apps/la-lala",
  "https://github.com/retraigo/duration.js",
]);
</script>
