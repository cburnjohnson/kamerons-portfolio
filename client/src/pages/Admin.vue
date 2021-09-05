<template>
  <div class="admin">
    <h1 class="admin__title">Upload Events</h1>
    <form class="admin__form" @submit.prevent="addEvent">
      <div class="form-group">
        <input
          type="text"
          id="name"
          class="form-group__input"
          placeholder=" "
          v-model="eventName"
          required
        />
        <label for="name" class="form-group__label">Name of Event</label>
      </div>
      <h2>Type of Event</h2>
      <div class="form-group form-group--radio">
        <div class="form-group__child">
          <label for="birthday">Birthday</label>
          <input
            type="radio"
            name="typeOfEvent"
            value="birthday"
            v-model="eventType"
          />
        </div>
        <div class="form-group__child">
          <label for="wedding">Wedding</label>
          <input
            type="radio"
            name="typeOfEvent"
            value="wedding"
            v-model="eventType"
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
      <input type="submit" value="UPLOAD" class="form-group__btn" />
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      eventName: null,
      eventType: "birthday"
    };
  },
  methods: {
    async addEvent() {
      const { eventImages } = this.$refs;

      const eventImagesFiles = Array.from(eventImages.files);
      let formData = new FormData();
      eventImagesFiles.forEach(file => {
        formData.append("files", file);
      });

      formData.append("eventName", this.eventName);
      formData.append("eventType", this.eventType);

      await axios.post("upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });

      eventImages.value = null;
    }
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
    gap: 1rem;
    margin: 0.5rem 0;

    label {
      margin-right: 0.25rem;
    }
  }
}
</style>
