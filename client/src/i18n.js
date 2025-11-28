import i18next from 'i18next';
import {
    initReactI18next
} from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend';

i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .use(Backend)
    .init({
        debug: true,
        fallbacklng: 'en',
        // resources: {
        //     en: {
        //         translation: {
        //             header: {
        //                 home: 'Home',
        //                 quizzes: 'Quizzes',
        //                 calculators: 'Calculators'
        //             },
        //             key: 'hello world',
        //             interpolation: '{{what}} is {{how}}',
        //             interpolationHTML: '{{what}} is {{how}}',
        //             look: {
        //                 deeper: 'some deep key',
        //             },
        //             error: {
        //                 404: 'Not found',
        //                 unknown: 'Some strnge thing happend',
        //             },
        //             cake_one: 'a cake',
        //             cake_other: '{{cound}} cakes',
        //             cake_zero: 'no cake',
        //         },
        //         common: {
        //             save: 'save',
        //             cancel: 'cancel',
        //         },
        //     },
        //     pl: {
        //         translation: {
        //             key: 'Witaj Świecie',
        //         },
        //     },
        //     common: {
        //         save: 'zapisz',
        //         cancel: 'anuluj',
        //     },
        // },
    });

console.log(i18next.t('key'), {
    lng: 'pl'
});
console.log(i18next.t('interpolation', {
    what: 'Cat',
    how: 'great'
}));
console.log(
    i18next.t('interpolationHTML', {
        what: 'Cat',
        how: '<i>great<i>',
        interpolation: {
            escapeValue: false
        },
    })
);
console.log(i18next.t('cake', {
    count: 0
})); // no cake