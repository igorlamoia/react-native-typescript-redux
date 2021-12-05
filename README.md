# React Native TypeScript Boilerplate

[![License](https://img.shields.io/github/license/raulmax319/react-native-typescript-redux-boilerplate)](https://github.com/raulmax319/react-native-typescript-redux-boilerplate/blob/main/LICENSE)
[![React Native](https://img.shields.io/badge/React%20Native-0.66.3-blue)](https://github.com/raulmax319/react-native-typescript-redux-boilerplate/blob/e4f6b04791581a83501fe2fc351bc88545afd05a/boilerplate_app/package.json#L21)
[![npm](https://img.shields.io/badge/npm-1.1.0-blue)](https://www.npmjs.com/package/react-native-typescript-redux)

Boilerplate for creating React Native applications with typescript

## Show your support

Give a ⭐️ if you liked this!

## 🤝 Contributing

Contributions are welcome! If you have questions, feature requests or a bug you want to report, please click [Here](https://github.com/raulmax319/react-native-typescript-redux-boilerplate/issues) to open an issue.

## Installation

Open your terminal and type in

```sh
npx react-native init AwesomeProject --template react-native-typescript-redux
```

## Folder Structure

```text
.
├── app
│   └── src
│       ├── @types
│       ├── assets
│       │   ├── animations
│       │   ├── fonts
│       │   └── images
│       ├── components
│       │   ├── Button
│       │   ├── Light-bulb
│       │   └── Switch
│       ├── config
│       │   └── reactotron
│       ├── helpers
│       ├── i18n
│       ├── router
│       ├── screens
│       │   ├── Demo
│       │   ├── Home
│       │   └── Redux-demo
│       ├── services
│       │   └── reactotron
│       ├── store
│       │   ├── ducks
│       │   │   └── counter
│       │   └── root-store
│       ├── theme
│       ├── utils
│       │   ├── storage
│       │   └── hooks
│       └── App.tsx
├── android
├── docs
├── ios
└── index.js
```

## Tech stack

- [TypeScript](https://www.typescriptlang.org/)
- [Async Storage](https://github.com/react-native-async-storage/async-storage)
- [Gesture Handler](https://github.com/software-mansion/react-native-gesture-handler)
- [Redux](https://redux.js.org)
- [React Native Paper](https://callstack.github.io/react-native-paper/)
- [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons)
- [React Navigation](https://reactnavigation.org)
- [Hooks]()
- [Redux Thunk](https://github.com/reduxjs/redux-thunk)
- [Reactotron](https://github.com/infinitered/reactotron)
- [Styled Components](https://styled-components.com)

## How to use

If you don't have the react-native environment already setup on your machine, please follow this [Link](https://reactnative.dev/docs/environment-setup) to setup everything you need to start

```sh
$ npm install
# OR with yarn
$ yarn
# check if your device is online by running the following command
# if running on a physical device, enable debug mode
$ adb devices
# this starts the metro server and points to reactotron ports automatically
$ yarn dev
# installing the app on the device
$ yarn run android
```
