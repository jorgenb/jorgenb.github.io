<template>
  <div>
    <div class="flex items-center p-4">
      <div class="flex-none hidden md:block">
        <NuxtLink to="/">
          <img src="~/assets/dykkeprat_logo.png" alt="Dykkeprat"
        /></NuxtLink>
      </div>
      <div class="flex-grow p-4 space-y-2">
        <form>
          <input
            v-model="q"
            type="search"
            name="search"
            id="search"
            class="w-full border-2 focus:outline-none focus:ring-2 focus:ring-dykkeprat-red focus:border-transparent rounded-lg hover:shadow-lg"
            placeholder="Søk i alle innlegg"
          />
        </form>
        <p class="ml-1 text-gray-darkest text-sm">
          Forumet ble
          <NuxtLink
            class="text-dykkeprat-red hover:underline"
            to="/threads/dykkeprat-moter-facebook"
            >stengt</NuxtLink
          >
          i oktober 2015. Her kan du søke i alle tråder og innlegg fra 2009 til
          2015. Vi fortsetter diskusjonen på
          <a
            class="text-dykkeprat-red hover:underline"
            target="_blank"
            href="https://www.facebook.com/groups/dykkeprat"
            >Facebook</a
          >.
        </p>
      </div>
    </div>

    <ThreadList class="mt-8" :threads="paginatedThreads" :total="total" />

    <div class="flex items-center justify-between py-3 mt-4">
      <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div class="ml-4">
          <p class="text-sm text-gray-700">
            Viser
            <span class="font-medium">{{ firstItem }}</span>
            til
            <span class="font-medium">{{ lastItem }}</span>
            av
            <span class="font-medium">{{ total }}</span>
            innlegg
          </p>
        </div>

        <paginate
          :pageCount="numberOfPages"
          :clickHandler="setPage"
          :prevText="'Forrige side'"
          :nextText="'Neste side'"
          :containerClass="'relative z-0 inline-flex rounded-md shadow-sm -space-x-px'"
          :page-class="'relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50'"
          :page-link-class="'page-link-class'"
          :prev-class="'relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50'"
          :prev-link-class="'prev-link-class'"
          :next-class="'relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50'"
          :next-link-class="'next-link-class'"
          :break-view-class="'break-view-class'"
          :break-view-link-class="'break-view-link-class'"
          :active-class="'font-bold'"
          :disabled-class="'disabled-class'"
        >
        </paginate>
      </div>
    </div>
  </div>
</template>

<script>
import ThreadList from "@/components/ThreadList";

export default {
  name: "Threads",
  components: {
    ThreadList,
  },
  computed: {
    firstItem() {
      if (this.page == 1 || !this.page) {
        return "1";
      }
      return (this.page - 1) * this.perPage + 1;
    },
    lastItem() {
      if (this.page == 1 || !this.page) {
        if (this.total < this.perPage) {
          return this.total;
        }
        return this.perPage;
      }

      if (this.page == this.lastPage) {
        return this.firstItem + this.lastPageCount - 1;
      }
      return this.firstItem + this.perPage - 1;
    },
  },
  methods: {
    setPage(pageNum) {
      this.$router.push({
        query: Object.assign({}, this.$route.query, { page: pageNum }),
      });
    },
  },
  async asyncData({ $content, route }) {
    const q = route.query.q;
    const page = route.query.page ? route.query.page : 1;

    let query = $content("threads", { deep: true });

    if (q) {
      query = query.search(q);
    }

    const threads = await query.fetch();

    const perPage = 10;
    const total = threads.length;
    const lastPage = Math.ceil(total / perPage);
    const lastPageCount = total % perPage;
    const numberOfPages = Math.ceil(total / perPage);

    const skipNumber = () => {
      if (page === 1) {
        return 0;
      }
      if (page === lastPage) {
        return total - lastPageCount;
      }
      return (page - 1) * perPage;
    };

    let paginatedQuery = $content("threads", { deep: true });

    if (q) {
      paginatedQuery = paginatedQuery.search(q);
    }

    const paginatedThreads = await paginatedQuery
      .limit(perPage)
      .sortBy("createdAt", "desc")
      .skip(skipNumber())
      .fetch();

    return {
      q,
      paginatedThreads,
      total,
      numberOfPages,
      page,
      lastPage,
      lastPageCount,
      perPage,
      skipNumber,
    };
  },
  watch: {
    q() {
      let query = Object.assign({}, this.$route.query);
      delete query.page;
      query.q = this.q;
      this.$router.push({ query });

    }
  },
  watchQuery: true,
};
</script>
