# React Native TypeScript Boilerplate

[![GitHub version](https://img.shields.io/badge/version-v0.1.0-blue.svg)](https://github.com/raulmax319/react-native-typescript-redux-boilerplate)
[![License](https://img.shields.io/github/license/raulmax319/react-native-typescript-redux-boilerplate)](https://github.com/raulmax319/react-native-typescript-redux-boilerplate/blob/main/LICENSE)

Boilerplate for creating React Native applications with typescript

## Show your support

Give a ⭐️ if you liked this!

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
│       │   └── redux-home
│       ├── services
│       │   └── rectotron
│       ├── store
│       │   ├── models
│       │   └── root-store
│       ├── theme
│       └── utils
│           ├── api
│           └── storage
├── CUSTOM_FONTS.md
├── LICENSE
└── README.md
```

## How to use

If you don't have the react-native environment already setup on your machine, please follow this [Link](https://reactnative.dev/docs/environment-setup) to setup everything you need to start

```sh
$ cd boilerplate_app
$ npm install
# OR
$ yarn
# check if your device is online by running the following command
# if running on a physical device, enable debug mode
$ adb devices
# open all reactotron ports
$ yarn adb
# installing the app on the device and starting metro server
$ yarn run android
```

## 🤝 Contributing

If you have questions, feature requests or a bug you want to report, please click [Here](https://github.com/raulmax319/react-native-typescript-redux-boilerplate/issues) to file an issue.
