<template>
  <div class="flex flex-col space-y-16">
    <div class="text-4xl border-b border-white p-4 font-bold">Recent Updates</div>
    <div class="flex flex-col space-y-24 p-4">
      <div
        v-for="article in posts
          .filter((x) => x._path !== '/stories')
          .filter(x => x.head?.image)
          .slice()
          .reverse()"
        :key="article._path"
        class = "md:flex justify-between items-center"
      >
        <NuxtLink :to="article._path" class="p-4 transition duration-500 ease-in-out transform hover:translate-y-1 hover:scale-110">
          <h2 class="text-3xl font-bold">{{ article.title }}</h2>
          <p class = "text-xs px-2">{{article.date}}</p>
          <p class="px-2">{{ article.description }}</p>
        </NuxtLink>
        <img :src = "article.head.image" class = "w-full md:w-48" />
      </div>
    </div>
  </div>
</template>
<script setup>
const posts = await queryContent("stories").find();
console.log(posts);
definePageMeta({
  title: "Stories - Neko Of The Abyss",
  description: "Read stories."
})

</script>