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
            <p>
              <v-text-field
                type="number"
                min="4"
                max="20"
                oninput="validity.valid||(value='');"
                v-model="vacationDays"
                label="Number of days"
                outlined
              />
              <v-btn
                id="btn"
                block
                color="primary"
                v-on:click="calcDates(vacationDays)"
                >Calculate Best Dates</v-btn
              >
            </p>
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
import { Action } from "vuex-class";

@Component({
  name: "HolidayPlanner",
  components: {
    CardList,
  },
})
export default class HolidayPlanner extends Vue {
  private vacationDays = "";
  @Action
  public calcDates!: (vacationDays: number) => void;
}
</script>
