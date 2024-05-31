# This app is supposed to be an introduction to Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.1 and requires node 22.0.0.

There are two parts to this app. I and II. (see below). The development server is used for both.

## Development server

Run this command to start a dev server:

`npm start`

Navigate to `http://localhost:4200/`. 
The application will automatically reload if you change any of the source files.


## I: Examples

It contains examples of basic JS/TS features (as a refresher) as well as building blocks used in Angular.
You can find examples and exercises under `src/examples`


## II: Travelling App

The 2nd part of this app is a fake travelling guide with fake reviews.

(Fake data is randomly generated)

### Run the mock server for fake data

Run this command to start the local mock server to serve data:

`npm run json-server`

Then start the development server (in another terminal) as described above.

### Setup
Run this command if the post install hook did not already generate a db.json or if you want to regenerate new fake data: 

`npm run setup-json-server-database`

This will overwrite your local db.json and all possible changes that have taken place will be lost and overwritten by new fake data.
