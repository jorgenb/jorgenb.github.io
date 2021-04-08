<template>
  <div>
    <nav class="bg-dykkeprat-grey">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <div class="flex-shrink-0 hidden md:block">
              <NuxtLink to="/"
                ><img class="h-8" src="~/assets//dykkeprat.png" alt="Dykkeprat"
              /></NuxtLink>
            </div>
            <div class="flex items-baseline space-between">
              <div class="md:ml-10 space-x-4">
                <NuxtLink
                  class="bg-dykkeprat-red text-white px-3 py-2 rounded-md text-sm font-medium hover:underline"
                  to="/"
                  >Alle innlegg</NuxtLink
                >
              </div>

            </div>
          </div>
                        <div>
                <a
                  href="https://www.facebook.com/groups/dykkeprat"
                  target="_blank"
                  class="bg-dykkeprat-red text-white px-3 py-2 rounded-md text-sm font-medium hover:underline"
                  >Dykkeprat på Facebook</a
                >
              </div>
        </div>
      </div>
    </nav>
    <main>
      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <Nuxt />
      </div>
    </main>

    <footer
      class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 text-sm text-gray-500 leading-loose flex flex-col text-center border-t mt-8"
    >
      <p>
        Laget av
        <a
          class="text-dykkeprat-red hover:underline"
          href="https://www.facebook.com/jorgen.birkhaug"
          >Jørgen Birkhaug</a
        >.
      </p>
      <p>
        Logo er laget av
        <a
          class="text-dykkeprat-red hover:underline"
          href="https://www.facebook.com/hans.kaland"
          >Hans Fredrik Kaland</a
        >.
      </p>
      <p>
        <a
          class="text-dykkeprat-red hover:underline"
          href="https://github.com/jorgenb/jorgenb.github.io"
          >https://github.com/jorgenb/jorgenb.github.io</a
        >.
      </p>
    </footer>
  </div>
</template>
