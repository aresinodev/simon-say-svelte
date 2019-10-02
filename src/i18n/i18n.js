import { locale, dictionary, getClientLocale } from 'svelte-i18n';

// Defining a locale dictionary
dictionary.set({
    es: {
        header: {
            title: 'Simón dice...'
        }
    },
    en: {
        title: 'Simon say...'
    }
});

locale.set(
    getClientLocale({
        navigator: true,
        hash: 'lang',
        fallback: 'es'
    })
);

locale.subscribe(loc => console.log('Locale change', loc));