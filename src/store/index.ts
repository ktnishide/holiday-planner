import moment from "moment";
import Vue from "vue";
import Vuex from "vuex";
import holidays from "../assets/public_holidays.json";

Vue.use(Vuex);

interface DateIntervals {
  initDate: Date, endDate: Date, leaveDays: number
}


export default new Vuex.Store({
  state: {
    dateIntervals: Array<DateIntervals>(),
  },
  // "sync" process
  mutations: {
    calcDates: (state, payload) => {
      if (payload) {
        const vacationDays = Number(payload);
        state.dateIntervals = getBestDates(vacationDays, "qld");
      }
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
      return state.dateIntervals.map((dateInterval: DateIntervals) => ({
        initDate: moment(dateInterval.initDate).format("ddd, D MMM"),
        endDate: moment(dateInterval.endDate).format("ddd, D MMM"),
        days: dateInterval.leaveDays + " days of annual leave",
      }));
    },
  },
  strict: process.env.NODE_ENV !== "production",
});

/** Get best dates to start/end a holiday using less days of leave. 
   * @param vacationDays desired length of vacation.
   * @param filter jurisdiction to filter holidays ex.: qld, act, nsw... 
   * */
function getBestDates(vacationDays: number, filter: string): DateIntervals[] {

  const arrays = prepareData(new Date("2019-12-31T24:00:00+10:00"), new Date("2020-12-30T24:00:00+10:00"), filter);

  const datesArray = processData(vacationDays, arrays[0] as Date[], arrays[1] as number[]);

  return datesArray;
}

/** Prepare the data to be processed (search timeframe and jurisdiction) 
   * @param start starting date of search period.
   * @param end ending date of search period.
   * @param filter jurisdiction to filter holidays.
   */
function prepareData(start: Date, end: Date, filter: string) {
  // filtering original json data by jursidiction and removing weekend days
  const arr = holidays.filter((value: holidays) => value.jurisdiction === filter && value.date).map((holidays: holidays) => moment(holidays.date, "YYYYMMDD").toDate());
  const holidaysArray = arr.filter((v: Date) => v.getDay() != 0 && v.getDay() != 6);

  const daysArray = [];
  const condArray = [];
  for (let dt = new Date(start); dt <= end; dt.setDate(dt.getDate() + 1)) {
    daysArray.push(new Date(dt));
    if (dt.getDay() === 0 || dt.getDay() === 6 || holidaysArray.find((item: Date) => item.getTime() === dt.getTime())) {
      condArray.push(0);
    } else {
      condArray.push(1);
    }
  }

  return [daysArray, condArray];
}

/** Return date intervals with number of days of leave
   * @param k length of vacation.
   * @param daysArr all dates of desired vacation period. (in this case all dates of 2020)
   * @param condArr tells if a date is business day(1) or not(0)
   */
function processData(k: number, daysArr: Date[], condArr: number[]): DateIntervals[] {
  let minSum = 999;
  let windowSum = 0;
  let start = 0;
  let datesArr: DateIntervals[] = [];
  for (let end = 0; end < condArr.length; end++) {
    windowSum += condArr[end];
    if (end >= k - 1) {
      if (windowSum == minSum) {
        datesArr.push({ initDate: daysArr[start], endDate: daysArr[end], leaveDays: minSum });
      } else
        if (windowSum < minSum) {
          minSum = windowSum;
          datesArr = [];
          datesArr.push({ initDate: daysArr[start], endDate: daysArr[end], leaveDays: minSum });
        }
      windowSum -= condArr[start];
      start++;
    }
  }

  return datesArr;
}