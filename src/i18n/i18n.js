import { locale, dictionary, getClientLocale } from 'svelte-i18n';

// Defining a locale dictionary
dictionary.set({
    es: {
        test: 'Traducción de test'
    },
    en: {
        test: 'Test translate'
    }
});

locale.set(
    getClientLocale({
        navigator: true,
        hash: 'lang',
        fallback: 'en'
    })
);

locale.subscribe(loc => console.log('Locale change', loc));