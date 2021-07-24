<template>
  <fragment>
    <h1 class="title">Image Gallery</h1>
    <div class="gallery-container">
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
  max-width: 80%;
  margin: 0 auto;

  @media ($md-up) {
    max-width: 90%;
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
