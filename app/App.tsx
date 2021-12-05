/**
 * Welcome to the main entry point of the app.
 *
 * Most of this file is already set up and you shouldn't need to modify
 * it very often. But take some time to look through and understand
 * what is going on here.
 *
 * The app navigation resides in ./src/router, so head over there
 * if you're interested in adding screens and navigators.
 *
 * The fonts and color files resides in ./src/config.
 *
 * If you want to change the theme color head to ./src/theme
 *
 * To change the fonts used in this project head over to ./src/assets/fonts,
 * there you can also insert images and svgs to you project.
 */

import 'react-native-gesture-handler';
import '~/helpers/ignore-warnings';
import '~/i18n';
import React, { useRef } from 'react';
import { enableScreens } from 'react-native-screens';
import { ThemeProvider } from 'styled-components/native';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
import { NavigationContainerRef } from '@react-navigation/native';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';

import {
  useBackButtonHandler,
  RootNavigator,
  canExit,
  setRootNavigation,
  useNavigationPersistence,
} from '~/router';
import { styledTheme, theme } from '~/theme';
import { store } from '~/store';
import * as storage from '~/utils/storage';

enableScreens();

export const NAVIGATION_PERSISTENCE_KEY = 'NAVIGATION_STATE';

/**
 * Root component of the app.
 */
const App: React.FC = () => {
  const navigationRef = useRef<NavigationContainerRef<unknown>>();

  setRootNavigation(navigationRef);
  useBackButtonHandler(navigationRef, canExit);
  const { initialNavigationState, onNavigationStateChange } =
    useNavigationPersistence(storage, NAVIGATION_PERSISTENCE_KEY);

  return (
    <StoreProvider store={store}>
      <PaperProvider theme={theme}>
        <ThemeProvider theme={styledTheme}>
          <SafeAreaProvider initialMetrics={initialWindowMetrics}>
            <RootNavigator
              ref={navigationRef}
              initialState={initialNavigationState}
              onStateChange={onNavigationStateChange}
            />
          </SafeAreaProvider>
        </ThemeProvider>
      </PaperProvider>
    </StoreProvider>
  );
};

export default App;
