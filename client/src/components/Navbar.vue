<template>
  <nav class="navbar">
    <div class="navbar__container">
      <router-link class="navbar__brand" to="/">K.H.</router-link>
      <div class="navbar__right">
        <div
          :class="[
            'navbar-mobile__menu-icon',
            { 'navbar-mobile__menu-icon--open': isMenuOpen }
          ]"
          @click="toggleNav"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul class="navbar__links">
          <li class="navbar__link">
            <router-link to="/events">Events</router-link>
          </li>
        </ul>
        <ul class="navbar__media-list">
          <li class="navbar__media-item">
            <a
              href="https://www.instagram.com/kameronholmberg/"
              target="_blank"
            >
              <i class="fab fa-instagram"></i>
            </a>
          </li>
          <li class="navbar__media-item">
            <a
              href="https://www.instagram.com/kameronholmberg/"
              target="_blank"
            >
              <i class="fab fa-twitter"></i>
            </a>
          </li>
          <li class="navbar__media-item">
            <a
              href="https://www.linkedin.com/in/kameron-holmberg-a788231a3/"
              target="_blank"
            >
              <i class="fab fa-linkedin-in"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div
      :class="[
        'navbar-mobile__overlay',
        { 'navbar-mobile__overlay--open': isMenuOpen }
      ]"
    ></div>
    <div
      :class="[
        'navbar-mobile__mobile-menu',
        { 'navbar-mobile__mobile-menu--open': isMenuOpen }
      ]"
    >
      <ul class="navbar-mobile__media-list">
        <li class="navbar-mobile__media-item">
          <a href="https://www.instagram.com/kameronholmberg/" target="_blank">
            <i class="fab fa-instagram"></i>
          </a>
        </li>
        <li class="navbar-mobile__media-item">
          <a href="https://www.instagram.com/kameronholmberg/" target="_blank">
            <i class="fab fa-twitter"></i>
          </a>
        </li>
        <li class="navbar-mobile__media-item">
          <a
            href="https://www.linkedin.com/in/kameron-holmberg-a788231a3/"
            target="_blank"
          >
            <i class="fab fa-linkedin-in"></i>
          </a>
        </li>
      </ul>
      <ul class="navbar-mobile__links">
        <li class="navbar-mobile__link">
          <router-link to="/events">Events</router-link>
        </li>
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
  border-bottom: 5px solid $pink;

  @media ($md-up) {
    padding: 1.25rem 64px;
  }

  a {
    color: $white;
    text-decoration: none;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    &:hover {
      color: $pink;
    }
  }

  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    max-width: 700px;
    margin: 0 auto;

    @media ($md-up) {
      max-width: 100%;
    }
  }

  &__right {
    position: relative;
    z-index: 20;
    @media ($md-up) {
      display: flex;
      gap: 50px;
      align-items: center;
    }
  }

  &__links {
    list-style: none;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 1.25rem;
    display: none;

    @media ($md-up) {
      display: block;
    }
  }

  &__brand {
    font-family: $cursive;
    font-size: 2.75rem;
    cursor: pointer;
    position: relative;
    z-index: 20;
  }

  &__media-list {
    list-style: none;
    background-color: $pink;
    width: 8.75rem;
    height: 2.75rem;
    border-radius: 0.4375rem;
    justify-content: space-around;
    align-items: center;
    display: none;

    @media ($md-up) {
      display: flex;
    }

    a:hover {
      color: $green;
    }
  }

  .router-link-exact-active {
    color: $pink;
  }
}

.navbar-mobile {
  &__mobile-menu {
    padding: 1.5rem 2rem;
    position: fixed;
    width: 70%;
    height: 100%;
    background-color: $green;
    right: -100%;
    top: 0;
    z-index: 10;
    transition: 0.5s ease-out;

    &--open {
      right: 0;
    }
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
    top: 0;
    width: 30%;
    height: 100%;
    background-color: $pink;
    opacity: 0;
    transition: 0.5s ease-in;
    z-index: 10;
    pointer-events: none;

    &--open {
      opacity: 0.7;
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

  &__menu-icon {
    width: 30px;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    cursor: pointer;

    @media ($md-up) {
      display: none;
    }

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
