<template>
  <section class="hero">
    <div class="hero__flex">
      <section class="hero__left">
        <p class="hero__intro">Hi, I am</p>
        <div class="hero__portrait">
          <img src="@/assets/portrait.png" alt="portrait" />
        </div>
        <p class="hero__name">Kameron Holmberg</p>
        <p class="hero__text">Event planner</p>
        <button class="hero__cta">View Events</button>
      </section>
      <section class="hero__right">
        <!-- <img
          src="@/assets/hero-img.png"
          alt="Decorated weddding table"
          class="hero__img"
        /> -->
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
  z-index: -1;

  &__flex {
    display: flex;
    flex-direction: column;
    position: relative;
  }

  &__left {
    margin-top: 5.6875rem;
    padding: 0rem 1.375rem;
  }

  &__intro {
    font-size: 1.125rem;
    color: $green;
    margin-left: 0.625rem;
  }

  &__name {
    font-family: $cursive;
    font-size: 5.94rem;
    color: $pink;
    line-height: 0.875;
  }

  &__text {
    color: $green;
    text-align: center;
    margin-top: 1rem;
  }

  &__portrait {
    position: absolute;
    top: 2.1rem;
    right: 2rem;

    img {
      width: 4.875rem;
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
    }
  }

  &__cta {
    border: none;
    background: none;
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
  }

  &__img {
    width: 553px;
    height: 360px;
    border-radius: 1.2rem;
    margin-left: 158px;
    margin-top: 38px;
    background-image: url("../assets/hero-img.png");
    background-position: center;
    position: relative;

    &-overlay {
      width: 553px;
      height: 360px;
      border-radius: 1.2rem;
      position: absolute;
      background-color: $pink;
      opacity: 0.7;
    }
  }
}
</style>
