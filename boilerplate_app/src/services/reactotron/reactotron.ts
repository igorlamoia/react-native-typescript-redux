import Tron from 'reactotron-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  ReactotronConfig,
  DEFAULT_REACTOTRON_CONFIG,
} from './reactotronConfig';
import { RootNavigation } from '~/navigator';
import { clear } from '~/utils/storage';

declare global {
  interface Console {
    /**
     * Reactotron if we're in dev, and nothing if we're in prod.
     */
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

  ReactotronInstance = Reactotron.setAsyncStorageHandler(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
    // configure reactotron
    .configure({
      name: config.name || require('../../../package.json').name,
    }) // controls connection & communication settings
    .useReactNative({
      asyncStorage: config.useAsyncStorage ? undefined : false,
    })
    // add all built-in react native plugins
    .use(reactotronRedux())
    .connect();
} else {
  // attach a mock so if things sneaky by our __DEV__ guards, we won't crash.
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

ReactotronInstance.clear();

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

ReactotronInstance.onCustomCommand({
  title: 'Go Back',
  description: 'Goes back',
  command: 'goBack',
  handler: () => {
    console.tron.log('Going back');
    RootNavigation.goBack();
  },
});

if (config.clearOnLoad) {
  ReactotronInstance.clear();
}

console.tron = ReactotronInstance;

export { ReactotronInstance };
