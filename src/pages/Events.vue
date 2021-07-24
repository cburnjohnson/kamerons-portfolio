<template>
  <fragment>
    <div class="events__container">
      <div class="events__nav">
        <ul class="events__types">
          <li class="events__type">Birthday</li>
          <li class="events__type">Weddings</li>
        </ul>
        <ul class="events__names">
          <li class="events__name">Jimmy's Birthday</li>
          <li class="events__name">Jimmy's Birthday</li>
          <li class="events__name">Jimmy's Birthday</li>
          <li class="events__name">Jimmy's Birthday</li>
        </ul>
      </div>
      <div class="gallery-container">
        <h1 class="title">Image Gallery</h1>
        <div class="gallery">
          <img
            class="gallery__img"
            :src="require(`../assets/events/${imgNum}.jpg`)"
            alt=""
            v-for="imgNum in imgNums"
            :key="imgNum"
            @click="openPopup(require(`../assets/events/${imgNum}.jpg`))"
          />
        </div>
      </div>
    </div>
    <div class="popup" ref="popup" @click="closePopup">
      <img src="" alt="" class="popup__img" ref="popupImg" />
    </div>
  </fragment>
</template>

<script>
import { Fragment } from "vue-fragment";

export default {
  components: {
    Fragment
  },
  data() {
    return {
      imgNums: [1, 2, 3, 4, 5, 6, 7, 8]
    };
  },
  methods: {
    openPopup(imgSrc) {
      const { popup, popupImg } = this.$refs;
      popup.style.transform = "translateY(0)";
      popupImg.src = imgSrc;
    },
    closePopup() {
      const { popup, popupImg } = this.$refs;
      popup.style.transform = "translateY(-100%)";
      popupImg.src = "";
      popupImg.alt = "";
    }
  }
};
</script>

<style lang="scss">
.events {
  &__container {
    display: flex;
    flex-direction: column;
    height: 100%;

    @media ($md-up) {
      flex-direction: row-reverse;
    }
  }

  &__nav {
    background-color: $green;
    text-transform: uppercase;
    font-weight: 700;

    @media ($md-up) {
      width: 25%;
    }
  }

  &__types {
    display: flex;
    list-style: none;
    flex-wrap: wrap;
    text-align: center;
    border-bottom: 2px solid $pink;
    border-top: 2px solid $pink;
  }

  &__type {
    width: calc(100% / 3);
    padding: 0.5rem 0;
    border-right: 2px solid $pink;
  }

  &__names {
    list-style: none;
    text-align: center;
    max-height: 110px;
    overflow-y: auto;

    @media ($md-up) {
      max-height: 100%;
    }
  }

  &__name {
    padding: 0.75rem 0;
    border-bottom: 1px solid $pink;
  }
}

.title {
  color: $pink;
  font-family: $cursive;
  text-align: center;
  font-size: 3rem;
  margin: 1rem 0px;
}

.gallery-container {
  max-height: 100%;
  overflow-y: auto;
  margin: 0 auto;
  width: 80%;

  @media ($md-up) {
    max-width: 90%;
    width: 70%;
  }
}

.gallery {
  width: 100%;
  display: column;
  columns: 2;

  @media ($md-up) {
    columns: 4;
  }

  & > * {
    break-inside: avoid;
    margin-bottom: 0.5em;
  }

  &__img {
    max-width: 100%;
    cursor: pointer;
  }
}

.popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 30;
  background-color: rgba(0, 0, 0, 0.95);
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(-100%);
  transition: transoform 250ms;
  padding: 50px;

  &__img {
    max-height: 100%;
  }
}
</style>
