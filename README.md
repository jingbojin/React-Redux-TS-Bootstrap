# A React + Redux + TypeScript + Bootstrap + Axios Project example
[![Build Status](https://travis-ci.com/jingbojin/exam-react.svg?token=AiCM6zPJxbZCtuxqfTpu&branch=master)](https://travis-ci.com/jingbojin/exam-react)
[![codecov](https://codecov.io/gh/jingbojin/exam-react/branch/master/graph/badge.svg)](https://codecov.io/gh/jingbojin/exam-react)
[![Uptime Robot ratio (30 days)](https://img.shields.io/uptimerobot/ratio/m785871154-efc1a3c517ff82c9d89d822e)](https://uptimerobot.com/dashboard#785871154)
[![Website exam-react.jingbojin.com](https://img.shields.io/website-up-down-green-red/http/exam-react.jingbojin.com)](http://exam-react.jingbojin.com/)
![npm type definitions](https://img.shields.io/npm/types/typescript?label=TS)
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

Demo site: http://exam-react.jingbojin.com

***
## Part of the `Vue vs React` experiment:
[Vue version](https://github.com/jingbojin/Vue-TS-Bootstrap): https://github.com/jingbojin/Vue-TS-Bootstrap

***
## Application workflow:

This application simulates an online exam/survey website. 
There are two pages:
1. An exam page: Allow users to input/select their answers.
2. A result page: Show users what they have submitted, with start and finish time.

* Once users submitted their answers, they will be redirected to the result page.
* In the result page, there is a `Try again` button in the end of the page, 
so that users can retry the exam. 
* Therefore, both page can navigate to each other. 

There are 3 types of questions:

| Question Type |                                    |
| ------------- |:-----------------------------------|
| singleSelect  | only one answer is allowed         |
| multiCheckbox | multiple selections are permitted  |
| freeText      | free text answer                   |

The questions list can be modified in [test_data.json](public/test_data.json), 
you can utilise [MockApiResponse](src/services/api/MockApiResponse.ts) to update/print this json file. 

This json file also controls:
* The test title
* Pagination setting for exam page (number of questions per page)

***
## Available Scripts
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

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
1. Vue cannot use import const in the `<template>`, reactjs can:
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
## Deployment:
https://github.com/mars/create-react-app-buildpack

***
## License:
[GNU GPLv3](https://choosealicense.com/licenses/gpl-3.0/)
