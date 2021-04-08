<template>
  <NuxtLink to="/">
    <img class="dykkeprat-logo" :class="classes ? classes : ''" src="~/assets/dykkeprat_logo.png" alt="Dykkeprat"
  /></NuxtLink>
</template>

<script>
export default {
  props: {
    classes: {
      type: String,
      default: null
    }
  }
}
</script>

<style>
.dykkeprat-logo {
  animation: 1s appear;
  margin: auto;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
