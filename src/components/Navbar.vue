<template>
  <nav class="navbar">
    <div class="navbar__container">
      <div class="navbar__brand">K.H.</div>
      <div
        :class="[
          'navbar__menu-icon',
          { 'navbar__menu-icon--open': isMenuOpen }
        ]"
        @click="toggleNav"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div
      :class="['navbar__overlay', { 'navbar__overlay--open': isMenuOpen }]"
    ></div>
    <div
      :class="[
        'navbar__mobile-menu',
        { 'navbar__mobile-menu--open': isMenuOpen }
      ]"
    >
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
      isMenuOpen: false
    };
  },
  methods: {
    toggleNav() {
      this.isMenuOpen = !this.isMenuOpen;
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
    position: relative;
  }

  &__brand {
    font-family: $cursive;
    font-size: 2.75rem;
  }

  &__mobile-menu {
    padding: 1.5rem 2rem;
    position: absolute;
    width: 70%;
    height: 100%;
    background-color: $green;
    right: -100%;
    top: 0;
    transition: 0.5s ease-out;

    &--open {
      right: 0;
    }
  }

  &__media-list {
    list-style: none;
    background-color: $pink;
    width: 8.75rem;
    height: 2.75rem;
    border-radius: 0.4375rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  &__links {
    list-style: none;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 1.5rem;
    margin-top: 2.8rem;
    text-align: center;
  }

  &__overlay {
    position: absolute;
    left: 0;
    top: -100%;
    width: 30%;
    height: 100%;
    background-color: $pink;
    opacity: 0.7;
    transition: 0.5s ease-out;

    &--open {
      top: 0;
    }
  }

  &__menu-icon {
    width: 30px;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    cursor: pointer;
    z-index: 10;

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
