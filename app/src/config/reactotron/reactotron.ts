import Tron from 'reactotron-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { reactotronRedux } from 'reactotron-redux';

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
const noop = () => null;

if (__DEV__) {
  // You can use either `@react-native-async-storage/async-storage` or `@react-native-community/async-storage`
  ReactotronInstance = Tron.setAsyncStorageHandler(AsyncStorage)
    // configure reactotron
    .configure({
      // eslint-disable-next-line @typescript-eslint/no-var-requires
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
    benchmark: noop,
    clear: noop,
    close: noop,
    configure: noop,
    connect: noop,
    display: noop,
    error: noop,
    image: noop,
    log: noop,
    logImportant: noop,
    onCustomCommand: noop,
    overlay: noop,
    reportError: noop,
    send: noop,
    startTimer: noop,
    storybookSwitcher: noop,
    use: noop,
    useReactNative: noop,
    warn: noop,
  };
}

ReactotronInstance.onCustomCommand({
  title: 'Reset Root Store',
  description: 'Resets redux store',
  command: 'resetStore',
  handler: () => {
    __DEV__ && console.tron.log('resetting store');
    clear();
  },
});

ReactotronInstance.onCustomCommand({
  title: 'Reset Navigation State',
  description: 'Resets the navigation state',
  command: 'resetNavigation',
  handler: () => {
    __DEV__ && console.tron.log('resetting navigation state');
    RootNavigation.resetRoot({ routes: [] });
  },
});

console.tron = ReactotronInstance;

ReactotronInstance.clear();

export { ReactotronInstance };
