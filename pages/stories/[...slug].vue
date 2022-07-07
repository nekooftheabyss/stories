<template>
  <div class="flex flex-col space-y-8">
    <ContentDoc :key="$route.fullPath" v-slot="{ doc }">
      <div
        class="
          grid grid-cols-1
          lg:grid-cols-3
          text-justify
          items-start
          md:justify-start
          gap-8
        "
      >
        <BlogTableOfContents
          :content="doc.body.toc.links"
          class="order-1 w-full"
        />

        <article
          class="
            prose prose-gray
            col-span-2
            order-2
            dark:prose-invert
            prose-code:before:content-none prose-code:after:content-none
          "
        >
          <ContentRenderer :value="doc" />
        </article>
      </div>
    </ContentDoc>
    <div key="navigation" class="lg:flex flex-row items-center justify-between">
      <div class="p-2 flex flex-col space-y-2">
        <span class="text-sm text-left">Prev</span>

        <NuxtLink
          v-if="prev"
          :to="prev._path"
          class="text-maid-600 dark:text-maid-300"
          >{{ prev.title }}</NuxtLink
        >
      </div>
      <div class="p-2 flex flex-col space-y-2">
        <span class="text-sm text-right">Next</span>
        <NuxtLink
          v-if="next"
          :to="next._path"
          class="text-maid-600 dark:text-maid-300 text-right"
          >{{ next.title }}</NuxtLink
        >
      </div>
    </div>
  </div>
</template>

<style lang="postcss">
/* Customize headers to remove default underline */
.prose h2 a {
  @apply no-underline transition duration-500 ease-in-out block font-bold border-b border-neutral-600 dark:border-neutral-300;
  &:hover {
    @apply text-zinc-600 dark:text-maid-100;
  }
}
.prose h3 a {
  @apply font-semibold no-underline;
}
</style>
<script setup lang="ts">
const { next, prev } = useContent();
</script>