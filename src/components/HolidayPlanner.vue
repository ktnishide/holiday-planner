<template>
  <div id="app">
    <v-container fluid="true">
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
            <v-form>
              <p>
                <v-text-field label="Number of days" outlined />
                <v-btn id="btn" block color=primary
                  >Calculate Best Dates</v-btn
                >
              </p>
            </v-form>
            <v-content>
              <CardList />
            </v-content>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CardList from "./CardList.vue";

@Component({
  components: {
    CardList: CardList,
  },
})
export default class HolidayPlanner extends Vue {}
</script>
