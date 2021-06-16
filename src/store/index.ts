import moment from "moment";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    days: 0,
    dateIntervals: [
      { initDate: "16/06/2020", endDate: "16/06/2020", days: 0 },
      { initDate: "16/06/2020", endDate: "16/06/2020", days: 1 },
    ],
  },
  // "sync" process
  mutations: {
    calcDates: (state, payload) => {
      state.dateIntervals.forEach((dateInterval) => {
        dateInterval.days = dateInterval.days + payload;
      });
    },
  },
  // "async" process
  actions: {
    calcDates: (context, payload) => {
      context.commit("calcDates", payload);
    },
  },
  getters: {
    formatedDateIntervals: (state) => {
      return state.dateIntervals.map((dateInterval) => ({
        initDate: moment(dateInterval.initDate, "DD/MM/YYYY").format(
          "ddd, D MMM"
        ),
        endDate: moment(dateInterval.endDate, "DD/MM/YYYY").format(
          "ddd, D MMM"
        ),
        days: dateInterval.days + " days of annual leave",
      }));
    },
  },
  strict: process.env.NODE_ENV !== "production",
});
