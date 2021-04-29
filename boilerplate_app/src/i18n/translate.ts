import i18n, { TranslateOptions } from 'i18n-js';
import { KeyPath } from './i18n';

/**
 * Translates text
 *
 * @param key The i18n key
 */

export function translate(key: KeyPath, options?: TranslateOptions) {
  return key ? i18n.t(key, options) : null;
}
