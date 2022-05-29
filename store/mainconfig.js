import { defineStore } from "pinia";
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark()
console.log(isDark)
const toggleDark = useToggle(isDark)

export const useMainConfig = defineStore("main", {
  state() {
    return {
      isDark,
    };
  },
  actions: {
    switch: toggleDark,
  },
  getters: {
    darkMode: (state) => isDark.value,
  },
});
