<template>
  <nav class="navbar">
    <div class="navbar__brand">K.H.</div>
    <div class="navbar__menu-icon">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="navbar__mobile-menu">
      <ul class="navbar__media-list">
        <li class="navbar__media-item"><i class="fab fa-instagram"></i></li>
        <li class="navbar__media-item"><i class="fab fa-twitter"></i></li>
        <li class="navbar__media-item"><i class="fab fa-linkedin-in"></i></li>
      </ul>
      <ul class="navbar__links">
        <li class="navbar__link">Events</li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.navbar {
  background-color: $green;
  padding: 1.25rem 2rem;

  &__brand {
    font-family: $cursive;
    font-size: 2.75rem;
  }

  &__mobile-menu {
    display: none;
  }
}
</style>
