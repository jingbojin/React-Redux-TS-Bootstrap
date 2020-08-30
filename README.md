This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

***
## Vue vs React
1. Vue cannot use import const in the <template>, reactjs can:
    vue: src/views/pages/exam/Index.vue
    react: src/views/pages/exam/Exam.tsx


***
## [React Icon](https://github.com/react-icons)
1. Only import from the `lib`:
https://github.com/facebook/jest/issues/2550#issuecomment-345432292
https://github.com/react-icons/react-icons#usage

***
## Potential improvement:
1. Result page still needs some polish for mobile responsive view.
2. Add user input validations.
3. Use local Storage to support offline saving draft answers. 
4. [Reactstrap](https://reactstrap.github.io/) seems to support more Bootstrap components out-of-box than [React-bootstrap](https://react-bootstrap.github.io/).

***
## License:
[GNU GPLv3](https://choosealicense.com/licenses/gpl-3.0/)
