<template>
  <div class="flex flex-col items-center">
    <CardPlain
      title="About Me"
      :description="[`I'm a college student who makes random JavaScript programs in my free time. I usually make websites and web apps using Vue and Nuxt.`, `Started programming like back in 2020 when I had nothing better to do. Eventually came to be known by different names here and there, commonly as NeTT in internet communities.`]"
    />
  </div>
</template>
<script>
definePageMeta({
  layout: "erena",
  title: "About Pranev"
});
</script>