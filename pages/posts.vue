<template>
  <div class="container flex-col">
    <input class="border" v-model="q" type="text">
    <div v-for="post in posts" :key="post.slug">
      {{ post.name }}
    </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, route }) {
    const q = route.query.q
    let query = $content('posts', { deep: true })
    if (q) {
      query = query.search(q)
      // OR query = query.search('title', q)
    }
    const posts = await query.fetch()
    return {
      q,
      posts
    }
  },
  //watch: {
  //  q () {
  //    this.$router.replace({ query: this.q ? { q: this.q } : undefined }).catch(() => { })
  //  }
  //},
  //watchQuery: true
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
