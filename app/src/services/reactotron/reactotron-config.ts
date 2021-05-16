export interface ReactotronConfig {
  /** The name of the app. */
  name?: string;
  /** The host to connect with */
  host?: string;
  /** Clear Async storage? */
  useAsyncStorage?: boolean;
}

/**
 * The default Reactotron configuration.
 */
export const DEFAULT_REACTOTRON_CONFIG: ReactotronConfig = {
  useAsyncStorage: true,
};
