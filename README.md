# User

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.

##Project structure

Application is based on https://angular.io and https://ngrx.io/

Application structure and flow follows ngrx approach.

`Actions`
Actions are one of the main building blocks in NgRx. Actions express unique events that happen throughout your application. From user interaction with the page, external interaction through network requests, and direct interaction with device APIs, these and more events are described with actions.

`Reducers`
Reducers in NgRx are responsible for handling transitions from one state to the next state in your application. Reducer functions handle these transitions by determining which actions to handle based on the type.

`Selectors`
Selectors are pure functions used for obtaining slices of store state. @ngrx/store provides a few helper functions for optimizing this selection. Selectors provide many features when selecting slices of state.

`Effects`
Effects are an RxJS powered side effect model for Store. Effects use streams to provide new sources of actions to reduce state based on external interactions such as network requests, web socket messages and time-based events.

`Router Store`
Bindings to connect the Angular Router with Store. During each router navigation cycle, multiple actions are dispatched that allow you to listen for changes in the router's state. You can then select data from the state of the router to provide additional information to your application.

****
Requests to the API are in `/shared/services/user-api.servise.ts` (this service uses configuration file `/api-config.ts` and `default-user.ts`)

All components are in `/components` folder. 

Application includes directives `/shared/directives` such as:

`copy-clipboard.directive`-- copies data to clipboard
`outside.directive`-- click events outside the element

##Running the app

Run `npm i` and wait for all packages to be installed.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
