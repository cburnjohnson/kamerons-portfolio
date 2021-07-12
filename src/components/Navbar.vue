<template>
  <nav class="navbar">
    <div class="navbar__container">
      <div class="navbar__brand">K.H.</div>
      <div
        :class="['navbar__menu-icon', { 'navbar__menu-icon--open': isNavOpen }]"
        @click="toggleNav"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
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
export default {
  data: function() {
    return {
      isNavOpen: false
    };
  },
  methods: {
    toggleNav() {
      this.isNavOpen = !this.isNavOpen;
    }
  }
};
</script>

<style lang="scss" scoped>
.navbar {
  background-color: $green;
  padding: 1.25rem 2rem;

  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__brand {
    font-family: $cursive;
    font-size: 2.75rem;
  }

  &__mobile-menu {
    display: none;
  }

  &__menu-icon {
    width: 30px;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    cursor: pointer;

    span {
      display: block;
      height: 5px;
      width: 100%;
      background: $white;
      border-radius: 9px;
      opacity: 1;
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
      -webkit-transition: 0.25s ease-in-out;
      -moz-transition: 0.25s ease-in-out;
      -o-transition: 0.25s ease-in-out;
      transition: 0.25s ease-in-out;

      &:nth-child(2) {
        margin: 0.25rem 0;
      }
    }

    &--open {
      span {
        position: absolute;

        &:nth-child(1) {
          -webkit-transform: rotate(135deg);
          -moz-transform: rotate(135deg);
          -o-transform: rotate(135deg);
          transform: rotate(135deg);
        }

        &:nth-child(2) {
          opacity: 0;
          margin: 0;
        }

        &:nth-child(3) {
          -webkit-transform: rotate(-135deg);
          -moz-transform: rotate(-135deg);
          -o-transform: rotate(-135deg);
          transform: rotate(-135deg);
        }
      }
    }
  }
}
</style>
