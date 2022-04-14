<template>
  <div class="flex flex-col space-y-4 w-full">
    <div class="p-8">
      <div class="text-4xl font-extrabold text-center">There are three routes ahead of you.</div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <CardChoice
        title="La Lala"
        description="Generates random text."
        image="/lala.webp"
        link="/apps/la-lala"
      />
      <CardChoice
        title="Fortuna"
        description="A TS module for emulating a gacha system."
        image="/placeholder/1.png"
        link="https://github.com/queenochaos/fortuna"
      />
      <CardChoice
        title="Kuroneko"
        description="A discord bot."
        image="/queen/icon.png"
        link="/apps/queenofchaos"
      />
      <CardChoice
        title="Pranev"
        description="The dude that owns Neko Of The Abyss."
        image="/stuff/1.png"
        link="/nett"
      />
      
    </div>
  </div>
</template>