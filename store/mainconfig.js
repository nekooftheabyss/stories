import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

export const useMainConfig = defineStore("main", {
  state() {
    return {
      isDark: useStorage("dark_mode", true),
    };
  },
  actions: {
    switch() {
      console.log(this.isDark)
      this.isDark = !this.isDark;
    },
  },
  getters: {
    darkMode: (state) => state.isDark,
  },
});
