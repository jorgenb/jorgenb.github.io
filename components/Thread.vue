<template>
  <div class="p-2 md:block">
    <h1 class="text-4xl mb-6" v-html="thread.title" />
    <div v-for="post of thread.posts" :key="thread.slug">
      <div class="flex flex-col justify-between space-y-6 border rounded-lg shadow mt-6 p-6">
        <div class="text-grey-dark leading-normal text-sm">
          <p>
            <span class="text-dykkeprat-red font-bold">{{ post.user.username }}</span> <span class="mx-1 text-xs">&bull;</span>
            <span class="text-gray-700">{{ formatDate(post.createdAt) }}</span>
          </p>
        </div>

        <div>
          <p
            class="text-sm text-gray-darkest leading-normal whitespace-pre-line"
            v-html="post.parsed_page_text"
          ></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "thread",
  props: {
    thread: {
      type: Object,
      default: {},
    },
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    },
  },
};
</script>

