import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Loads a string from storage.
 *
 * @param key The key to load.
 */
export async function loadString(key: string): Promise<Maybe<string>> {
  try {
    return await AsyncStorage.getItem(key);
  } catch {
    return null;
  }
}

/**
 * Saves a string to storage.
 *
 * @param key The key to store.
 * @param value The value to store.
 */
export async function saveString(key: string, value: string): Promise<boolean> {
  try {
    await AsyncStorage.setItem(key, value);
    return true;
  } catch {
    return false;
  }
}

/**
 * Loads something from storage and runs through JSON.parse.
 *
 * @param key The key to load.
 */
export async function load(key: string): Promise<Maybe<any>> {
  try {
    const item = await AsyncStorage.getItem(key);
    return JSON.parse(item);
  } catch {
    return null;
  }
}

/**
 * Saves an object to storage.
 *
 * @param key The key to store.
 * @param value The value to store.
 */
export async function save(key: string, value: any): Promise<boolean> {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
}

/**
 * Removes something from storage.
 *
 * @param key The key to remove.
 */
export async function remove(key: string): Promise<void> {
  try {
    await AsyncStorage.removeItem(key);
  } catch {
    /* catch'em all */
  }
}

/**
 * Burn everything.
 */
export async function clear(): Promise<void> {
  try {
    await AsyncStorage.clear();
  } catch {
    /* catch'em all */
  }
}
