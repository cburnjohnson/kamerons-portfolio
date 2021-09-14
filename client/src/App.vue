<template>
  <div id="main-container">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  components: {
    Navbar
  }
};
</script>

<style lang="scss">
@import "@/scss/main";

#main-container {
  width: 100vw;
  height: 100vh;
}
</style>
