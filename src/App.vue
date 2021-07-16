<template>
  <div id="main-container">
    <Navbar />
    <Hero />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default {
  components: {
    Navbar,
    Hero
  }
};
</script>

<style lang="scss">
@import "@/scss/main";

#main-container {
  width: 100vw;
  overflow: hidden;
}
</style>
