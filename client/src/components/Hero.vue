<template>
  <section class="hero">
    <div class="hero__flex">
      <section class="hero__left">
        <div class="hero__container">
          <p class="hero__intro">Hi, I am</p>
          <div class="hero__portrait">
            <img src="@/assets/portrait.webp" alt="portrait" />
          </div>
          <p class="hero__name">Kameron Holmberg</p>
          <p class="hero__text">Event planner</p>
          <router-link to="/events">
            <button class="hero__cta">
              View Events
            </button>
          </router-link>
        </div>
      </section>
      <section class="hero__right">
        <div class="hero__img">
          <div class="hero__img-overlay"></div>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.hero {
  position: relative;
  height: 100%;

  @media ($md-up) {
    height: 100%;
  }

  a {
    text-decoration: none;
  }

  &__flex {
    display: flex;
    flex-direction: column;
    position: relative;
    max-width: 375px;
    margin: 0 auto;
    height: 100%;
    justify-content: space-between;

    @media ($md-up) {
      flex-direction: row;
      max-width: 100%;
      flex-basis: 100%;
    }
  }

  &__left {
    margin-top: 4rem;
    padding: 0rem 1.375rem;

    @media ($md-up) {
      flex: 1 1 50%;
      padding: 0rem 84px;
    }
  }

  &__container {
    position: relative;
    @media ($md-up) {
      max-width: 800px;
      margin: 0 auto;
    }
  }

  &__right {
    @media ($md-up) {
      flex: 1 1 50%;
    }
  }

  &__intro {
    font-size: 1.125rem;
    color: $green;
    margin-left: 0.625rem;
    position: relative;
    display: inline;

    &::before {
      content: "";
      position: absolute;
      bottom: 3px;
      left: -5px;
      z-index: -1;
      width: 60%;
      height: 0.35rem;
      background-color: $pink;
      opacity: 0.8;
    }
  }

  &__name {
    font-family: $cursive;
    font-size: 5.94rem;
    color: $pink;
    line-height: 0.875;

    @media ($md-up) {
      font-size: 10rem;
      margin-top: 1rem;
    }
  }

  &__text {
    color: $green;
    text-align: center;
    margin-top: 1rem;

    @media ($md-up) {
      font-size: 18px;
      margin-top: 1.2rem;
    }
  }

  &__portrait {
    position: absolute;
    top: -2.1rem;
    right: 2rem;

    @media ($md-up) {
      top: -2.1rem;
      right: 4rem;
    }

    img {
      width: 4.875rem;

      @media ($md-up) {
        width: 100px;
      }
    }

    &::before {
      content: "";
      display: block;
      position: absolute;
      top: -5px;
      left: -6px;
      z-index: -10;
      width: 90px;
      height: 90px;
      background: radial-gradient(
        50% 50% at 50% 50%,
        rgba(247, 204, 192, 0.869019) 0%,
        #f6c4b6 0.01%,
        rgba(247, 204, 192, 0.869019) 4.69%,
        rgba(248, 206, 195, 0.822917) 33.85%,
        rgba(247, 205, 193, 0.855815) 75%,
        rgba(247, 204, 192, 0.869019) 82.81%,
        rgba(255, 255, 255, 0) 100%
      );

      @media ($md-up) {
        width: 110px;
        height: 110px;
      }
    }
  }

  &__cta {
    border: none;
    display: block;
    cursor: pointer;
    color: $white;
    padding: 1rem 1.31rem;
    background-color: $green;
    text-transform: uppercase;
    font-weight: bold;
    border-radius: 1.56rem;
    margin-top: 3rem;
    margin-left: auto;

    &:hover {
      opacity: 0.8;
    }
  }

  &__img {
    width: 553px;
    height: 360px;
    border-radius: 1.2rem;
    margin-left: 158px;
    margin-top: 38px;
    background-image: url("../assets/hero-img.webp");
    background-position: center;
    position: relative;

    @media ($md-up) {
      margin: 0;
      width: 100%;
      height: 100%;
      border-radius: 0;
      background-repeat: no-repeat;
      background-position: initial;
      background-size: cover;
    }

    &-overlay {
      width: 553px;
      height: 360px;
      border-radius: 1.2rem;
      position: absolute;
      background-color: $pink;
      opacity: 0.7;

      @media ($md-up) {
        width: 100%;
        height: 100%;
        border-radius: 0;
      }
    }
  }
}
</style>
