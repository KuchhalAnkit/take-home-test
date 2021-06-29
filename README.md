# webdriver.IO / nodeJS Take home test
This repository contains a basic example on how to test a dinamyc application built with GoldenLayout (https://github.com/golden-layout/golden-layout) using webdriver.IO (https://webdriver.io/docs/what-is-webdriverio). You will need to clone Golden Layout's repo and start the api test app. 

## Test Dependencies
nodeJS Stable (> v16.4.0)

### Start Golden Layout api test app
Follow the instructions on how to start the api test app: https://github.com/golden-layout/golden-layout#build-and-run-demotest-app
1) `git clone https://github.com/golden-layout/golden-layout` Clone Golden Layout repo
2) `npm ci` Install dependencies 
3) `npm run build` Build the app 
4) `npm run apitest:build`
5) `npm run apitest:serve` Start the app

### Install webdriver.IO
1) Clone this repo
2) `npm ci` Install dependencies
3) `npx wdio run wdio.conf.ts` Run the tests

## Add the following tests
Using webdriver.IO open the page where the app is running (http://localhost:3000) and perform the following actions:

- Once the app is running, use the controls on the left sidebar to load the `standard` Layout
- Change the color of `LexCorp plc.` to blue
- Add an Event component, send `Test event 123` and validate the received text 
- Remove `comp1`, `comp2` and `comp3` components 
- Save the Layout 
- Load `component` layout and validate the are no components displayed 
- Restore the saved layout and send an event from the previously created event component and validate the received text. 
- Drag `comp1` next to `Acme, Inc` component

## Submit a Pull Request
After you're done with tests, please submit a pull request with your changes for evaluation.
