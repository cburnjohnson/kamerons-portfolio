<template>
  <div class="admin-container">
    <div class="admin">
      <h2 class="admin__title">Upload Events</h2>
      <form class="admin__form" @submit.prevent="addEvent">
        <div class="form-group">
          <input
            type="date"
            id="dateOfEvent"
            class="form-group__input"
            placeholder=" "
            v-model="dateOfEvent"
            required
          />
          <label for="dateOfEvent" class="form-group__label"
            >Date of Event</label
          >
        </div>
        <h3>Type of Event</h3>
        <div class="form-group form-group--radio">
          <div class="form-group__child">
            <label for="birthday">Birthday</label>
            <input
              type="radio"
              name="typeOfEvent"
              value="birthday"
              v-model="eventType"
              id="birthday"
            />
          </div>
          <div class="form-group__child">
            <label for="wedding">Wedding</label>
            <input
              type="radio"
              name="typeOfEvent"
              value="wedding"
              v-model="eventType"
              id="wedding"
            />
          </div>
          <div class="form-group__child">
            <label for="babyShower">Baby Shower</label>
            <input
              type="radio"
              name="typeOfEvent"
              value="baby shower"
              v-model="eventType"
              id="babyShower"
            />
          </div>
          <div class="form-group__child">
            <label for="retirement">Retirement</label>
            <input
              type="radio"
              name="typeOfEvent"
              value="retirement"
              v-model="eventType"
              id="retirement"
            />
          </div>
          <div class="form-group__child">
            <label for="graduation">Graduation</label>
            <input
              type="radio"
              name="typeOfEvent"
              value="graduation"
              v-model="eventType"
              id="graduation"
            />
          </div>
          <div class="form-group__child">
            <label for="holidayParty">Holiday Party</label>
            <input
              type="radio"
              name="typeOfEvent"
              value="holiday party"
              v-model="eventType"
              id="holidayParty"
            />
          </div>
        </div>
        <div class="form-group form-group--align">
          <label for="images" class="form-group__label--file"
            >Select Images</label
          >
          <input
            type="file"
            name="images"
            id="images"
            class="form-group__file"
            ref="eventImages"
            multiple
            required
          />
        </div>
        <input
          type="submit"
          value="UPLOAD"
          class="form-group__btn"
          v-if="!uploading"
        />
        <p v-else>Uploading...</p>
      </form>
    </div>
    <div class="events">
      <h2 class="events__title">List of Events</h2>
      <ul class="events__list">
        <li class="events__list-item" v-for="event in events" :key="event._id">
          <p class="event">
            {{
              new Intl.DateTimeFormat("en-US").format(
                new Date(event.dateOfEvent)
              )
            }}
          </p>
          <button class="button button--delete" @click="deleteEvent(event._id)">
            <i class="fas fa-trash-alt"></i>
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import getEvents from "@/utils/getEvents";

export default {
  data() {
    return {
      dateOfEvent: null,
      eventType: "birthday",
      events: [],
      uploading: false
    };
  },
  methods: {
    async addEvent() {
      this.uploading = true;
      const { eventImages } = this.$refs;

      const eventImagesFiles = Array.from(eventImages.files);
      let formData = new FormData();
      eventImagesFiles.forEach(file => {
        formData.append("files", file);
      });

      formData.append("dateOfEvent", this.dateOfEvent);
      formData.append("eventType", this.eventType);

      const eventResponse = await axios.post("upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "x-auth-token": window.localStorage.getItem("userToken")
        }
      });

      this.uploading = false;
      this.dateOfEvent = "";
      eventImages.value = null;
      this.events = [...this.events, eventResponse.data];
    },
    async deleteEvent(id) {
      await axios.delete(`/api/events/${id}`, {
        headers: {
          "x-auth-token": window.localStorage.getItem("userToken")
        }
      });
      this.events = this.events.filter(event => event._id !== id);
    }
  },
  async created() {
    this.events = await getEvents();
  }
};
</script>

<style lang="scss" scoped>
.admin {
  margin-top: 6rem;
  background-color: $pink;
  width: 100%;
  text-align: center;
  padding: 1.5rem 1rem;

  @media (min-width: 400px) {
    width: 400px;
    margin: 6rem auto;
    border-radius: 1rem;
  }

  &__form {
    display: flex;
    flex-direction: column;
    margin-top: 1.25rem;
  }
}

.form-group {
  &:first-child {
    margin-bottom: 1rem;
  }

  &--radio {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
    margin: 0.5rem 0;

    label {
      margin-right: 0.25rem;
    }
  }
}

.events {
  margin-top: 5rem;
  background-color: $pink;
  width: 100%;
  padding: 1.5rem 1rem;

  @media (min-width: 400px) {
    width: 400px;
    margin: 5rem auto;
    border-radius: 1rem;
  }

  &__title {
    margin-bottom: 1rem;
    text-align: center;
  }

  &__list-item {
    display: flex;
    color: $white;
    justify-content: space-between;
    border-bottom: 1px solid $green;
    width: 80%;
    margin: 0 auto 1.25rem auto;

    i {
      color: red;
      font-size: 1.25rem;
    }
  }
}
</style>
