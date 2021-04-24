# React Native TypeScript Boilerplate

[![GitHub version](https://img.shields.io/badge/version-v0.1.0-blue.svg)](https://github.com/yilber/readme-boilerplate)
[![License](https://img.shields.io/github/license/yilber/readme-boilerplate.svg)](https://github.com/Yilber/readme-boilerplate/blob/master/LICENSE)

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
├── src
│    ├── assets
│    │   ├── fonts
│    │   ├── images
│    │   └── svg
│    ├── components
│    │   ├── example_component_foldedr
│    │   ├── example_component
│    │   └── index.ts
│    ├── config
│    │   ├── colors.ts
│    │   ├── fonts.ts
│    │   └── index.ts
│    ├── hooks
│    │   ├── hooks.ts
│    │   └── index.ts
│    ├── i18n
│    │   ├── en.json
│    │   ├── ptBR.json
│    │   ├── i18n.ts
│    │   ├── translate.ts
│    │   └── index.ts
│    ├── navigator
│    │   ├── mainNavigator.tsx
│    │   ├── navigationUtils.tsx
│    │   ├── RootNavigator.tsx
│    │   └── RootStack.tsx
│    ├── screens
│    │   ├── Demo
│    │   │   ├── Demo.styled.tsx
│    │   │   └── Demo.tsx
│    │   ├── Home
│    │   │   ├── Home.styled.tsx
│    │   │   └── Home.tsx
│    │   ├── ReduxDemo
│    │   │   ├── ReduxDemo.styled.tsx
│    │   │   └── ReduxDemo.tsx
│    │   └── index.ts
│    ├── services
│    │   ├── reactotron
│    │   │   ├── reactotron.ts
│    │   │   ├── reactotronConfig.ts
│    │   │   └── index.ts
│    │   └── index.ts
│    ├── store
│    │   ├── features
│    │   │   └── counter
│    │   │       ├── Counter.action.ts
│    │   │       ├── Counter.reducer.ts
│    │   │       └── index.ts
│    │   ├── rootStore
│    │   │   ├── createStore.ts
│    │   │   └── rootReducer.ts
│    │   └── index.ts
│    ├── theme
│    │   └── index.ts
│    ├── utils
│    │   ├── storage
│    │   │   ├── asyncStorage.ts
│    │   │   ├── storage.ts
│    │   │   └── index.ts
│    │   ├── delay.ts
│    │   └── ignoreWarnings.ts
│    └── types.d.ts
├── App.tsx
├── README.md
└── LICENSE
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
