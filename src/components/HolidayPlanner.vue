<template>
  <div id="app">
    <v-container fluid>
      <v-row>
        <v-col align="center">
          <v-sheet
            class="pa-4 mx-lg-auto"
            color="grey lighten-5"
            max-width="450px"
          >
            <h2>Holiday Planner</h2>
            <br />
            <p align="left">How long is your vacation?</p>
            <v-form
              ref="form"
              lazy-validation
              v-model="days"
              @submit.prevent="onSubmit"
            >
              <p>
                <v-text-field
                  type="number"
                  min="1"
                  max="20"
                  oninput="validity.valid||(value='');"
                  v-model="days"
                  label="Number of days"
                  outlined
                />
                <v-btn id="btn" block color="primary" v-on:click="calcDates(1)"
                  >Calculate Best Dates</v-btn
                >
              </p>
            </v-form>
            <v-main>
              <CardList />
            </v-main>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CardList from "./CardList.vue";
import { mapActions, mapState } from "vuex";

@Component({
  name: "HolidayPlanner",
  // data: {
  //   days: ,
  // },
  computed: {
    ...mapState(["days"]),
  },
  methods: {
    ...mapActions(["calcDates"]),
  },
  components: {
    CardList,
  },
})
export default class HolidayPlanner extends Vue {}
</script>
