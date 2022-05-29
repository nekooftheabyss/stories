<template>
  <div class="flex flex-col space-y-16">
    <div class="text-4xl border-b border-white p-4">Recent Posts</div>
    <div class="flex flex-col space-y-24 p-4">
      <div
        v-for="article in posts
          .filter((x) => x._path !== '/blog/post')
          .slice()
          .reverse()"
        :key="article._path"
        class = "md:flex justify-between items-center"
        @mousedown="() => pleaseLog(posts)"
      >
        <NuxtLink :to="article._path" class="p-4 transition duration-500 ease-in-out transform hover:translate-y-1 hover:scale-110">
          <h2 class="text-3xl font-bold">{{ article.title }}</h2>
          <p class="px-2">{{ article.description }}</p>
        </NuxtLink>
        <img :src = "article.head.image" class = "w-full md:w-48" />
      </div>
    </div>
  </div>
</template>
<script setup>
function pleaseLog(x) {
  console.log(x);
}
const posts = await queryContent("blog", "post").find();
console.log(posts);
</script>