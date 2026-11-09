import { es } from './es';
import { en } from './en';

export type Lang = 'es' | 'en';

const dicts = { es, en };

export const useT = (lang: Lang) => dicts[lang];

/** URL de la página principal en cada idioma */
export const homePath = (lang: Lang) => (lang === 'es' ? '/' : '/en/');
