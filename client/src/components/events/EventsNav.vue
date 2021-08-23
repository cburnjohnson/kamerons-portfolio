<template>
  <div class="events__nav">
    <ul class="events__types">
      <li
        v-for="eventType in eventTypes"
        :key="eventType"
        class="events__type"
        @click="setEventType(eventType)"
      >
        {{ eventType }}
      </li>
    </ul>
    <ul class="events__names">
      <li
        class="events__name"
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
  props: ["events"],
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
  &__nav {
    background-color: $green;
    text-transform: uppercase;
    font-weight: 700;

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
}
</style>
