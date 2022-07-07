<template>
  <div
    class="
      flex flex-col
      min-h-screen
      font-montserrat
      text-lg
      tracking-wide
      text-gray-900
      dark:text-gray-300 dark:bg-abyss-1000
      bg-white
      font-semibold
      dark:font-normal
    "
  >
    <!--bg-svg-light-sm
      md:bg-svg-light bg-right
      dark:bg-svg-dark-sm
      dark:md:bg-svg-dark-->
    <LayoutHeader
      :title="nuxtApp._route.path.split('/').reverse()[0] || 'home'"
    />
    <main
      class="
        flex-1
        w-full
        max-w-7xl
        p-4
        mx-auto
        md:px-8
        py-4
        mt-24
        bg-white/40
        dark:bg-abyss-1000/80
        xl:bg-transparent
        dark:xl:bg-transparent
      "
    >
      <slot />
    </main>
    <div class="max-w-7xl w-full outline-maid-300 text-maid-300 mx-auto">
      <div id="disqus_thread" class = "outline-inherit"></div>
      <noscript
        >Please enable JavaScript to view the
        <a href="https://disqus.com/?ref_noscript"
          >comments powered by Disqus.</a
        ></noscript
      >
    </div>
    <LayoutFooter />
  </div>
</template>
<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
</style> 
<script setup>
const nuxtApp = useNuxtApp();
const route = useRoute();

useHead({ title: route.meta.title, description: route.meta.description });

function windowWidth(x) {
  return (document.body.scrollWidth * x) / 100;
}
function windowHeight(x) {
  return (document.body.scrollHeight * x) / 100;
}
function distance(x1, y1, x2, y2) {
  return Math.sqrt(Math.abs((x2 - x1) ** 2) - Math.abs((y2 - y1) ** 2));
}

onMounted(() => {
  /**
   *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
   *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables    */
  var disqus_config = function () {
    this.page.url = `https://read.nekooftheabyss.moe/${route.fullPath}`; // Replace PAGE_URL with your page's canonical URL variable
    this.page.identifier = route.fullPath; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
  };
  (function () {
    // DON'T EDIT BELOW THIS LINE
    var d = document,
      s = d.createElement("script");

    s.src = "https://nekooftheabyss.disqus.com/embed.js";
    s.setAttribute("data-timestamp", +new Date());
    (d.head || d.body).appendChild(s);
  })();
});
</script>
