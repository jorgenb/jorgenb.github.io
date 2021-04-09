<template>
  <div class="flex flex-grow flex-col">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div
          class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
        >
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Tittel
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Svar
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Visninger
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Forum
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Dato
                </th>
              </tr>
            </thead>

              <transition-group
                name="staggered-fade"
                class="bg-white divide-y divide-gray-200"
                tag="tbody"
                v-bind:css="false"
                v-on:before-enter="beforeEnter"
                v-on:enter="enter"
                v-on:leave="leave"
              >
              <tr
                class="bg-white"
                v-for="(thread, index) of threads"
                :key="thread.threadid"
                :data-index-number="index"
              >
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div>
                      <div
                        class="text-sm font-medium text-dykkeprat-red hover:underline"
                      >
                        <NuxtLink :to="`/threads/${thread.slug}`">
                          <span v-html="thread.title" />
                        </NuxtLink>
                      </div>
                      <div class="text-sm text-gray-500">
                        {{ thread.postusername }}
                      </div>
                    </div>
                    <div v-if="thread.threadid === 5485" class="ml-4">
                      <a
                        class="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-dykkeprat-grey text-white"
                        target="_blank"
                        href="https://www.facebook.com/groups/dykkeprat"
                        >🍿 <span class="ml-2 hover:underline">Praten fortsetter på Facebook</span></a
                      >
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span
                    class="px-2 inline-flex text-xs leading-5 font-semibold"
                  >
                    {{ thread.replycount }}
                  </span>
                  <div class="text-sm text-gray-900"></div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span
                    class="px-2 inline-flex text-xs leading-5 font-semibold"
                  >
                    {{ thread.views }}
                  </span>
                  <div class="text-sm text-gray-900"></div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span
                    class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-dykkeprat-grey text-white"
                  >
                    {{ thread.forum.title }}
                  </span>
                  <div class="text-sm text-gray-900"></div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="text-sm font-medium text-gray-900">
                      {{ formatDate(thread.createdAt) }}
                    </div>
                  </div>
                </td>
              </tr>
              </transition-group>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ThreadList",
  props: {
    threads: {
      type: Array,
      default: [],
    },
    total: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("no", options);
    },
    beforeEnter: function (el) {
      el.style.opacity = 0;
      el.style.height = 0;
    },
    enter: function (el, done) {
      var delay = Number(el.dataset.indexNumber) * 20;
      setTimeout(function () {
        Velocity(el, { opacity: 1 }, { complete: done });
      }, delay);
    },
    leave: function (el, done) {
      var delay = Number(el.dataset.indexNumber) * 20;
      setTimeout(function () {
        Velocity(el, { opacity: 0, height: 0 }, { complete: done });
      }, delay);
    },
  },
};
</script>
