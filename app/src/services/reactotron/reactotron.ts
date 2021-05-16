import Tron from 'reactotron-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  ReactotronConfig,
  DEFAULT_REACTOTRON_CONFIG,
} from './reactotron-config';
import { RootNavigation } from '~/router';
import { clear } from '~/utils/storage';

declare global {
  interface Console {
    tron: typeof Tron;
  }
}

let ReactotronInstance: typeof Tron;
const config: ReactotronConfig = DEFAULT_REACTOTRON_CONFIG;

/** Do Nothing. */
const nope = () => undefined;

if (__DEV__) {
  const Reactotron = require('reactotron-react-native').default;

  const { reactotronRedux } = require('reactotron-redux');

  // You can use either `@react-native-async-storage/async-storage` or `@react-native-community/async-storage`
  ReactotronInstance = Reactotron.setAsyncStorageHandler(AsyncStorage)
    // configure reactotron
    .configure({
      name: config.name || require('../../../../package.json').name,
    })
    .useReactNative({
      asyncStorage: config.useAsyncStorage ? undefined : false,
    })
    // add all built-in react native plugins
    .use(reactotronRedux())
    .connect();
} else {
  // attach a mock so if things go wrong we won't crash.
  console.tron = {
    benchmark: nope,
    clear: nope,
    close: nope,
    configure: nope,
    connect: nope,
    display: nope,
    error: nope,
    image: nope,
    log: nope,
    logImportant: nope,
    onCustomCommand: nope,
    overlay: nope,
    reportError: nope,
    send: nope,
    startTimer: nope,
    storybookSwitcher: nope,
    use: nope,
    useReactNative: nope,
    warn: nope,
  };
}

ReactotronInstance.onCustomCommand({
  title: 'Reset Root Store',
  description: 'Resets redux store',
  command: 'resetStore',
  handler: () => {
    console.tron.log('resetting store');
    clear();
  },
});

ReactotronInstance.onCustomCommand({
  title: 'Reset Navigation State',
  description: 'Resets the navigation state',
  command: 'resetNavigation',
  handler: () => {
    console.tron.log('resetting navigation state');
    RootNavigation.resetRoot({ routes: [] });
  },
});

console.tron = ReactotronInstance;

ReactotronInstance.clear();

export { ReactotronInstance };
