
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
              border-zinc-400 border-b-2
            "
          >
            {{
              article.name
                .split("-")
                .map(
                  (s) => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase()
                )
                .join(" ")
            }}
          </div>

          <div class="md:flex flex-col items-start justify-between px-2">
            <div
              class="flex flex-col items-start w-full md:w-auto font-semibold"
            >
              {{ article.description }}
            </div>
            <div class="flex flex-col items-start w-full">
              <div v-for="inputThing in article.args" :key="inputThing.name">
                <div
                  v-if="inputThing.type === 'text'"
                  class="flex flex-col items-start space-y-4"
                >
                  <label for="someInput">{{ inputThing.description }}</label
                  ><input
                    id="someInput"
                    v-model="input.text"
                    @keyup="submitOrNah"
                    type="text"
                    class="
                      border-abyss-1100
                      dark:bg-abyss-1100 dark:border-nett-maid
                      border-2
                      w-full
                      h-12
                      rounded-md
                      p-2
                    "
                  />
                </div>
                <div
                  v-if="inputThing.type === 'number'"
                  class="flex flex-col items-start space-y-4"
                >
                  <label for="someInput">{{ inputThing.description }}</label
                  ><input
                    id="someInput"
                    v-model="input.number"
                    @keyup="submitOrNah"
                    type="number"
                    class="
                      border-abyss-1100
                      dark:bg-abyss-1100 dark:border-nett-maid
                      border-2
                      w-full
                      h-12
                      rounded-md
                      p-2
                    "
                  />
                </div>
                <div
                  v-if="inputThing.type === 'boolean'"
                  class="flex flex-col items-start space-y-4"
                >
                  <label for="someInput">{{ inputThing.description }}</label
                  ><input
                    id="someInput"
                    v-model="input.condit"
                    @keyup="submitOrNah"
                    type="checkbox"
                    class="
                      border-abyss-1100
                      dark:bg-abyss-1100 dark:border-nett-maid
                      border-2
                      w-full
                      h-12
                      rounded-md
                      p-2
                    "
                  />
                </div>
              </div>
              <div class="flex flex-col items-start justify-start">
                <div
                  :class="`p-3 ${
                    ['string', 'name'].includes(article.name) ? 'break-all' : ''
                  }`"
                >
                  Your Result:
                  <span class="font-bold">{{
                    result
                      ? `${
                          ["name", "character", "fantasy-name"].includes(
                            article.name
                          )
                            ? result
                                .split(" ")
                                .map(
                                  (s) =>
                                    s.charAt(0).toUpperCase() +
                                    s.slice(1).toLowerCase()
                                )
                                .join(" ")
                            : result
                        }`
                      : `Nothing. Just like your life.`
                  }}</span>
                </div>
                <button
                  class="
                    p-4
                    bg-zinc-600
                    text-white
                    rounded-lg
                    transition
                    duration-500
                    ease-in-out
                    transform
                    hover:translate-y-1
                  "
                  @click="getResult"
                >
                  Try it!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import lala from "@nekooftheabyss/lala";
import articles from "@/data/Features";
const route = useRoute();
const nuxtApp = useNuxtApp()

const mode = route.params.mode;
const article = articles.find((x) => x.name === mode);
if (!article) nuxtApp.$router.push("/");
const input = ref({
  text: null,
  condit: false,
  number: 5,
});
let result = ref(null);

function formatDate(d) {
  return new Date(d).toUTCString();
}
function submitOrNah(e) {
  if (e.keyCode === 13) return getResult();
}
function getResult() {
  result.value = lala.random[article.keyType]
    ? lala.random[article.keyType](
        article.name === "fantasy-creature"
          ? true
          : article.args.length !== 0
          ? article.args[0].type === "text"
            ? input.value.text
            : article.args[0].type === "number"
            ? input.value.number
            : input.value.condit
          : null
      )
    : "Temporary Error";
}
</script>