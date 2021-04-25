export interface ReactotronConfig {
  /** The name of the app. */
  name?: string;
  /** The host to connect with: default 'localhost'. */
  host?: string;
  /** Clear Async storage? */
  useAsyncStorage?: boolean;
  /** Clear Reactotron on reload? */
  clearOnLoad?: boolean;
}

/**
 * The default Reactotron configuration.
 */
export const DEFAULT_REACTOTRON_CONFIG: ReactotronConfig = {
  clearOnLoad: true,
  host: 'localhost',
  useAsyncStorage: true,
};
