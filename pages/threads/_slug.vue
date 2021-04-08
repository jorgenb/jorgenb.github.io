<template>
  <article>
    <thread :thread="thread"/>
  </article>
</template>

<script>
import Thread from "@/components/Thread.vue";
export default {
  components: {
    Thread,
  },
  async asyncData({ $content, params }) {
    const thread = await $content("threads", params.slug).fetch();

    return { thread };
  },
};
</script>
