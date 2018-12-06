# Code.hub React Project

## App details

The application is using the below technologies:

* [Webpack](https://webpack.github.io/) - for building and bundling
* [Babel.js](https://babeljs.io/) - for using ES6 features, compiling JSX, etc.
* [React](https://facebook.github.io/react/) - for building the client-side app and components
* [React Router](https://github.com/ReactTraining/react-router) - for client-side (browser) routing
* [Bootstrap](https://getbootstrap.com/) and [React-Bootstrap] - for UI
* [axios](https://github.com/axios/axios) - for HTTP requests
* [ESLint](http://eslint.org/) - for ES6 linting and best practices


## Run locally

You need to have node.js installed. For development I used node version `8.11.3` and npm version `6.4.0`, but you can use any node/npm version you want. When you are ready, you can install all dependencies and run the development servers by typing the below commands:

```
npm install
npm run api
npm start
open http://localhost:8080
```


## Build app

Build the app:

```
npm run build
```

This command will create a `dist` directory with the generated `index.html` file and the bundled JS file (`bundle.js`).


## Lint files

Lint all js/jsx files:

```
npm run lint
```

Auto-fix linting issues:

```
npm run lint:fix
```

## User stories
### Create a dashboard page

The dashbord page must contain:
  1. Code.Hub's stats (students, courses, instructors and events)
  2. a list with the last 5 courses
  3. every course must have a link that leads to the course details page
  4. a link that leads to the courses page

### Create a courses page

The courses page must contain:
  1. all the available courses
  2. every course must have a link that leads to the course details page

### Create a course details page

The course details page must contain:
  1. all the details of the course
  2. all the course instructors
  3. an edit button that will edit the current course (edit the course inline or in another page)
  4. a delete button that will delete the current course

### Create an add new course page

The add new course page must contain:
  1. a form with the appropriate course fields
  2. a submit button that posts the data correctly
