import i18n from 'i18n-js';
import en from './en.json';
import ptBR from './ptBR.json';

i18n.fallbacks = true;
i18n.translations = { ptBR, en };

i18n.defaultLocale = 'ptBR';

i18n.locale = 'ptBR';

/**
 * Builds up valid keypaths for translations.
 *
 * Update to your default locale of choice if not Portuguese.
 */

type DefaultLocale = typeof ptBR;
export type KeyPath = RecursiveKeyOf<DefaultLocale>;
