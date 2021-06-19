# HOLIDAY-PLANNER
Using `VUE`, `VUEX`, `TYPESCRIPT` and something kinda catterpilar method, sliding window, two pointers...(?) algorithm to solve the problem:

---

> ### Definition
> 
> You are planning your next holiday for 2020, and want to know what is the best time to take it in
> terms of maximizing the length of the time away while minimizing your annual leave balance
> with your current employer.
> 
> Build a simple interface where the user can input the > duration of the holiday (in number of days)
> and the system should provide you with the best option(s) for 2020.
> 
> - A holiday is a consecutive number of days duration >= 4 > and <= 20 days.
> - The year period starts on the 1st of Jan 2020 and ends > on 31st of Dec 2020.
> 
> Example 1: duration of holiday is 4 days.
> 
> 2 best options:
> - 10/04/2020 to 13/04/2020 (0 days of annual leave)
> - 25/12/2020 to 28/12/2020 (0 days of annual leave)
> 
> Example 2: duration of holiday is 5 days.
> 
> 4 best options:
> 
> - 09/04/2020 to 13/04/2020 (1 day of annual leave)
> - 10/04/2020 to 14/04/2020 (1 day of annual leave)
> - 24/12/2020 to 28/12/2020 (1 day of annual leave)
> - 25/12/2020 to 29/12/2020 (1 day of annual leave)
> 
> ### Instructions
> - Create a new `VueJS` project using the `Vue-cli` with > `Typescript`, `Sass` and `Vuex`.
> - Add the following npm packages `vuex-class`, > `vue-property-decorator` and `moment`.
> - Build the app as described above
> - Follow the mockups for design choices.
>     - 16px base font size
>     - 4px/12px border radius
>     - Roboto font
>     - Box Shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
>     - Page background: #FAFAFA
> - On larger screen sizes center the content and cap the > width at 450px
> - Public holiday data can be found in the attached json > file
> - Use Vuex to manage state
> - Share a repository with your code or send it over, with > brief instruction and
> documentation on how to run it locally.
> - Document any questions you had, info you were missing > and assumptions you had to
> make.
> 
> ### Extra
> This could help for the algorithm part:
> https://codility.com/media/train/13-CaterpillarMethod.pdf > , although a purely naive
> implementation is fine too (performance is not a > consideration for the purpose of this
> exercise).

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## Questions/Assumptions
1 - I used Vuetify as an UI component framework might be desirable;

2 - I didn't type store due to setup complexity;

3 - I assumed and hardcoded jurisdiction "qld";