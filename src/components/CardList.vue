<template>
  <div id="app">
    <v-card
      v-if="formatedDateIntervals.length > 0"
      class="pa-5"
      align="left"
      rounded="true"
      id="rounded-card"
    >
      <v-list-item-group>
        <template v-for="(item, index) in formatedDateIntervals">
          <v-list-item two-line :key="index">
            <v-list-item-content>
              <v-list-item-title class="text-h5 mb-1">
                {{ item.initDate }} - {{ item.endDate }}
              </v-list-item-title>
              <v-list-item-subtitle>{{ item.days }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-divider
            v-if="index < formatedDateIntervals.length - 1"
            :key="`${index}-divider`"
          ></v-divider>
        </template>
      </v-list-item-group>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Getter } from "vuex-class";

@Component({
  name: "CardList",
})
export default class CardList extends Vue {
  @Getter
  public formatedDateIntervals!: string;
}
</script>
