# Simple counter app written in react-native

This is a simple react native app created as a test to OneBrain.

## Structure

The app was created using `Redux` as the central state manager for the application. It has a single `Bottom-Tab-Navigator` that can cycle between two pages. It implements a custom header and has customized icons sourced by `react-native-vector-icons`. The components are created using `styled-components/native`. Other than that, no other libs were used. The whole project has just 699 lines and 21 files, counted using [this](https://github.com/osenekci/line-counter-node) module.

## .apk file

The .apk file is in `android/app/build/outputs/apk/release/app-release.apk`. Feel free to install it.

# Running the project in development

## Requirements

In order to run the project in development you need to have the React Native environment already set up. Please follow [these](https://reactnative.dev/docs/environment-setup) steps in the section `React Native CLI Quickstart`. Keep in mind this is NOT a explo project, it's a bare React Native project.

## Running the project

-   Clone the repository
-   Run in a terminal inside the root of the project `yarn` if you have yarn installed or `npm install` if you don't
-   Start your emulator or plug a phone in debugging mode in your computer
-   Run `yarn android` or `npm run android` if you are using an Android device
-   Run `yarn ios` or `npm run ios` if you are using a Mac an iOs device
-   Await the metro bundler to build your debug bundle
-   Enjoy the app!

## Buiding the project

### Android

-   Open a terminal inside the `__PROJECT_ROOT_/android` folder
-   Run `./gradlew assembleRelease` for an `.apk` if you want a .apk
-   Run `./gradlew bundleRelease` for an `.aab` if you want a .aab
-   The output will be located at `android/app/build/outputs`
