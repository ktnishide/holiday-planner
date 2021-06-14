<template>
  <div id="app">
    <v-card class="pa-5" align="left" rounded="true" id="rounded-card">
      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-title class="text-h5 mb-1">
            Fri, 10 Apr - Mon, 13 Apr
          </v-list-item-title>
          <v-list-item-subtitle>0 days of annual leave</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider />
      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-title class="text-h5 mb-1">
            Thu, 25 Dec - Sun, 28 Dec
          </v-list-item-title>
          <v-list-item-subtitle>0 days of annual leave</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class CardList extends Vue {}
</script>
