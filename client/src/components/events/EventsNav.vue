<template>
  <div class="events__nav">
    <ul class="events__types">
      <li
        v-for="eventType in eventTypes"
        :key="eventType"
        :class="[
          'events__type',
          { 'events__type--active': currentEventType === eventType }
        ]"
        @click="setEventType(eventType)"
      >
        {{ eventType }}
      </li>
    </ul>
    <ul class="events__names">
      <li
        :class="[
          'events__name',
          { 'events__name--active': selectedEvent.name === eventByType.name }
        ]"
        v-for="eventByType in eventsByType"
        :key="eventByType.id"
        @click="$emit('selectEvent', eventByType)"
      >
        {{ eventByType.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentEventType: "birthday"
    };
  },
  props: ["events", "selectedEvent"],
  computed: {
    eventTypes() {
      return [...new Set(this.events.map(event => event.type))];
    },
    eventsByType() {
      return this.events.filter(event => {
        return event.type === this.currentEventType;
      });
    }
  },
  methods: {
    setEventType(eventType) {
      this.currentEventType = eventType;
    }
  }
};
</script>

<style lang="scss" scoped>
.events {
  &__types {
    display: flex;
    list-style: none;
    flex-wrap: wrap;
    text-align: center;
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
    border-bottom: 5px solid $pink;

    &--active {
      color: $pink;
    }
  }

  &__nav {
    background-color: $green;
    text-transform: uppercase;
    font-weight: 700;
    border-left: 5px solid $pink;

    li {
      cursor: pointer;
      transition: 0.2s ease-in-out;

      &:hover {
        color: $pink;
      }
    }

    @media ($md-up) {
      width: 25%;
    }
  }

  &__type {
    width: calc(100% / 3);
    padding: 0.5rem 0;
    border-right: 2px solid $pink;

    &--active {
      background-color: $pink;

      &:hover {
        color: $white !important;
      }
    }
  }
}
</style>
