<template>
  <fragment>
    <div class="events__container">
      <EventsNav :events="events" @selectEvent="selectEvent" />
      <div class="gallery-container" v-if="selectedEvent">
        <h1 class="title">{{ selectedEvent.name }}</h1>
        <div class="gallery">
          <img
            v-for="image in selectedImages"
            :key="image"
            class="gallery__img"
            :src="image"
            alt=""
            @click="openPopup(require(`../assets/events/${eventImg}.jpg`))"
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
import axios from "axios";
import { Fragment } from "vue-fragment";
import EventsNav from "@/components/events/EventsNav";

export default {
  components: {
    Fragment,
    EventsNav
  },
  data() {
    return {
      events: [],
      selectedEvent: null,
      selectedImages: []
    };
  },
  created() {
    this.getEvents();
  },
  methods: {
    async getEvents() {
      const res = await axios.get("/api/events");
      this.events = [...this.events, ...res.data];

      this.selectedEvent = res.data[0];
    },
    async getImage(filename) {
      const res = await axios.get(`/api/image/${filename}`, {
        responseType: "arraybuffer"
      });
      const base64ImageString = Buffer.from(res.data, "binary").toString(
        "base64"
      );
      return `data:image/png;base64,${base64ImageString}`;
    },
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
    },
    selectEvent(selectedEvent) {
      this.selectedEvent = selectedEvent;
    }
  },
  watch: {
    selectedEvent() {
      this.selectedEvent.images.forEach(async image => {
        const res = await this.getImage(image);

        this.selectedImages = [...this.selectedImages, res];
      });
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
