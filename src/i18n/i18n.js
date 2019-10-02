import { locale, dictionary, getClientLocale } from 'svelte-i18n';

// Defining a locale dictionary
dictionary.set({
    es: {
        header: {
            title: 'Simón dice...'
        },
        footer: {
            design: 'Diseñado por'
        }
    },
    en: {
        title: 'Simon say...',
        footer: {
            design: 'Design by'
        }
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