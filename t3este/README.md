# React Native TypeScript Boilerplate

[![GitHub version](https://img.shields.io/badge/version-v0.1.0-blue.svg)](https://github.com/raulmax319/react-native-typescript-redux-boilerplate)
[![License](https://img.shields.io/github/license/raulmax319/react-native-typescript-redux-boilerplate)](https://github.com/raulmax319/react-native-typescript-redux-boilerplate/blob/main/LICENSE)
[![React Native](https://img.shields.io/badge/React%20Native-0.64.0-blue)](https://github.com/raulmax319/react-native-typescript-redux-boilerplate/blob/e4f6b04791581a83501fe2fc351bc88545afd05a/boilerplate_app/package.json#L21)
[![help](https://img.shields.io/github/labels/raulmax319/react-native-typescript-redux-boilerplate/Help%20Wanted)]()

Boilerplate for creating React Native applications with typescript

## Show your support

Give a ⭐️ if you liked this!

## 🤝 Contributing

Contributions are welcome! If you have questions, feature requests or a bug you want to report, please click [Here](https://github.com/raulmax319/react-native-typescript-redux-boilerplate/issues) to open an issue.

## Installation

Open your terminal and type in

```sh
$ git clone https://github.com/raulmax319/react-native-typescript-redux-boilerplate.git
$ cd react-native-typescript-redux-boilerplate
```

## Folder Structure

```text
.
├── boilerplate_app
│   ├── __tests__
│   ├── android
│   ├── ios
│   └── src
│       ├── @types
│       ├── assets
│       │   ├── fonts
│       │   └── images
│       ├── components
│       │   └── Button
│       ├── config
│       ├── helpers
│       ├── hooks
│       ├── i18n
│       ├── navigation
│       ├── screens
│       │   ├── demo
│       │   ├── home
│       │   └── redux-demo
│       ├── services
│       │   └── rectotron
│       ├── store
│       │   ├── models
│       │   ├──── counter
│       │   └── root-store
│       ├── theme
│       └── utils
│           ├── api
│           └── storage
└── LICENSE
```

## Tech stack
* [TypeScript](https://www.typescriptlang.org/)
* [Async Storage](https://github.com/react-native-async-storage/async-storage)
* [Gesture Handler](https://github.com/software-mansion/react-native-gesture-handler)
* [Redux](https://redux.js.org)
* [React Native Paper](https://callstack.github.io/react-native-paper/) theme
* [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons)
* [React Navigation](https://reactnavigation.org)
* [Hooks]() with redux hooks configured and typed
* [Redux Thunk](https://github.com/reduxjs/redux-thunk)
* [Reactotron](https://github.com/infinitered/reactotron)
* [Styled Components](https://styled-components.com)



## How to use

If you don't have the react-native environment already setup on your machine, please follow this [Link](https://reactnative.dev/docs/environment-setup) to setup everything you need to start

```sh
$ cd boilerplate_app
$ npm install
# OR with yarn
$ yarn
# check if your device is online by running the following command
# if running on a physical device, enable debug mode
$ adb devices
# call reactotron ports
$ yarn adb
# installing the app on the device and starting metro server
$ yarn run android
```

