<template>
  <v-app>
    <v-main>
      <HolidayPlanner />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import HolidayPlanner from "./components/HolidayPlanner.vue";

export default Vue.extend({
  name: "App",

  components: {
    HolidayPlanner,
  },
});
</script>

<style>
/* keep button text capitalization */
* {
  text-transform: none !important;
}
</style>
