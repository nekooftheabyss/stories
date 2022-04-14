<template>
  <div class="p-8">
    <div class="text-lg">
      <div
        class="
          flex
          md:flex-row md:space-x-12
          flex-col
          items-stretch
          md:justify-between
          justify-start
        "
      >
        <div class="py-2 w-full">
          <div
            class="
              p-2
              text-gray-700
              dark:text-white
              font-semibold
              border-gray-400 border-b-2
            "
          >
            Some Random Text Generators:
          </div>
          <div
            class="
              md:flex
              flex-row
              justify-between
              items-start
              space-y-4
              md:space-y-0 md:space-x-4
            "
          >
            <ul class="flex flex-col items-start w-full px-2 space-y-4">
              <li
                v-for="article in articles"
                :key="article.name.toLowerCase()"
                class="p-2 w-full"
              >
                <a
                  href="javascript:void(0)"
                  @click="(x) => setEnabled(article.name.toLowerCase())"
                  class="
                    p-2
                    max-w-6xl
                    md:max-w-md
                    w-full
                    block
                    bg-nett-matchpurple
                    text-nett-maid
                    font-semibold
                    text-center
                  "
                  >{{
                    article.name
                      .split("-")
                      .map(
                        (s) =>
                          s.charAt(0).toUpperCase() + s.slice(1).toLowerCase()
                      )
                      .join(" ")
                  }}
                </a>
              </li>
            </ul>
            <div class="py-2 w-full h-full">
              <PageTrial v-if="enabled" :modez="modez" />
              <PageWaste v-else />
            </div>
          </div>
          <div class="p-4">
            Lala is a collection of random useful (probably) javascript classes
            and functions. I compiled them into a web app for easy use. Lala is
            licensed under the MIT license. Please refer to
            <a
              href="https://github.com/retraigo/lala/blob/main/LICENSE"
              target="_blank"
              class = "text-nett-maid"
              >the license</a
            >
            for information about copyright.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
definePageMeta({
  title: "Lala",
  description:
    "A collection of random useful (probably) javascript classes and functions.",
});
</script>
<script>
import articles from "@/data/Features";
export default {
  data() {
    return {
      articles,
      enabled: false,
      modez: null,
    };
  },
  methods: {
    formatDate(d) {
      return new Date(d).toUTCString();
    },
    setEnabled(s) {
      this.enabled = false;
      this.modez = s;
      setTimeout(() => {
        this.enabled = true;
      }, 500);
    },
    getEnabled() {
      return this.enabled;
    },
  },
};
</script>
