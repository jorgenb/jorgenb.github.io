<template>
  <div class="p-2">
    <div class="flex flex-col space-y-2 md:space-y-0 md:space-x-2 md:flex-row">
      <h1 class="text-lg" v-html="thread.title" />
      <p class="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded bg-gray-200 text-grey-darkest">{{ thread.forum.title }}</p>
      <p class="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded bg-gray-200 text-grey-darkest">{{ thread.views }} visninger</p>
      <p class="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded bg-gray-200 text-grey-darkest">{{ thread.replycount }} svar</p>
    </div>

    <div v-for="post of thread.posts" :key="post.postid">
      <div class="flex flex-col justify-between space-y-6 border rounded-lg shadow mt-6 p-6">
        <div class="text-grey-dark leading-normal text-sm">
          <p>
            <span v-if="post.user" class="text-dykkeprat-red font-bold">{{ post.user.username }}</span> <span class="mx-1 text-xs">&bull;</span>
            <span class="text-gray-700">{{ formatDate(post.createdAt) }}</span>
          </p>
        </div>

        <div>
          <p
            class="text-sm text-gray-darkest leading-normal whitespace-pre-wrap"
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
  head () {
    return {
      title: this.thread.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.thread.posts[0]
        }
      ]
    }
  },
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

